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
import { getStorage, ref } from 'firebase/storage';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useUploadFile } from 'react-firebase-hooks/storage';

const storage = getStorage(app);
function UploadForm() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [uploadFile, uploading, snapshot, error] = useUploadFile();
  const [selectedFile, setSelectedFile] = useState<File>();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [user] = useAuthState(getAuth(app));
  const upload = async () => {
    if (selectedFile) {
      const filestorageRef = `pdfs/${selectedFile.name} ${Date.now()}`;
      const folderRef = ref(storage, filestorageRef);
      const result = await uploadFile(folderRef, selectedFile, {
        contentType: 'pdf',
      });
      return { result, filestorageRef };
    }
  };
  const getSummary = async () => {
    const { result, filestorageRef } = await upload();
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
              <Input type={'text'} placeholder='title' />
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
              <Button marginInline={'auto'} onClick={getSummary}>
                Get Summary
              </Button>
            </Center>

            <Textarea
              marginTop={'5'}
              placeholder='Your summary will come here '
            ></Textarea>
            {/* <Checkbox paddingTop={'5'} isRequired>
              I am creating a post on my wish
            </Checkbox> */}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default UploadForm;
