import { app } from '@/utils/firebase';
import {
  Button,
  Center,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
  useDisclosure,
} from '@chakra-ui/react';
import { getAuth } from 'firebase/auth';
import { getDownloadURL, getStorage, ref } from 'firebase/storage';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useUploadFile } from 'react-firebase-hooks/storage';
import { create_post } from 'src/db/post';

const storage = getStorage(app);
function UploadForm() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [uploadFile, uploading, snapshot, error] = useUploadFile();
  const [title, setTitle] = useState('');
  const [fileUrl, setFileUrl] = useState('');
  const [selectedFile, setSelectedFile] = useState<File>();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [loading, setLoading] = useState(false);
  const [user] = useAuthState(getAuth(app));
  const [summary, setSummary] = useState('');

  const upload = async () => {
    if (selectedFile) {
      const filestorageRef = `pdfs/${selectedFile.name}`;
      const folderRef = ref(storage, filestorageRef);
      const result = await uploadFile(folderRef, selectedFile, {
        contentType: 'application/pdf',
      });
      return { result, filestorageRef };
    }
  };
  const getSummary = async () => {
    setLoading(true);
    const { result, filestorageRef } = await upload();
    const url = await getDownloadURL(ref(storage, filestorageRef));

    let headersList = {
      Accept: '*/*',
      'User-Agent': 'Thunder Client (https://www.thunderclient.com)',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    };
    setFileUrl(url);
    let bodyContent = JSON.stringify({
      fileUrl: url,
    });

    let response = await fetch(
      'https://cute-tan-worm-toga.cyclic.app/summary',
      {
        method: 'POST',
        body: bodyContent,
        headers: headersList,
      }
    );

    let data = await response.json();
    console.log(data);
    setSummary(data['summary']);
    setLoading(false);
  };
  const createPost = () => {
    console.log({
      Files: [fileUrl],
      summary: summary,
      title: title,
      userID: user.uid,
      id: '',
    });
    create_post({
      Files: [fileUrl],
      summary: summary,
      title: title,
      userID: user.uid,
      id: '',
    }).then(() => {
      location.reload();
    });
  };
  return (
    <>
      <Button onClick={onOpen}>Create Post</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Post and Share with your Peers.</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl mt={4}>
              <FormLabel>Title</FormLabel>
              <Input
                type={'text'}
                placeholder='title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Files Upload</FormLabel>
              <Input
                type='file'
                onChange={(e) => {
                  const file = e.target.files ? e.target.files[0] : undefined;
                  setSelectedFile(file);
                }}
                placeholder='upload file'
              />
            </FormControl>
            <Center marginTop={'8'}>
              <Button
                loadingText='Uploading and Summarizing'
                isLoading={loading}
                marginInline={'auto'}
                onClick={getSummary}
              >
                Get Summary
              </Button>
            </Center>

            <Textarea
              marginTop={'5'}
              placeholder='Your summary will come here '
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
            ></Textarea>
            {/* <Checkbox paddingTop={'5'} isRequired>
              I am creating a post on my wish
            </Checkbox> */}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={createPost}>
              Make Post
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default UploadForm;
