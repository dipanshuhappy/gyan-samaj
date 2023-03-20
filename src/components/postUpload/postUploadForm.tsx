import {
  Button,
  Checkbox,
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
import React from 'react';

function UploadForm() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return (
    <>
      <Button onClick={onOpen}>Create Post</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Post and Share with your Peers.</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>PostId</FormLabel>
              <Input type={'text'} placeholder='postid' />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Title</FormLabel>
              <Input type={'text'} placeholder='title' />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Files Upload</FormLabel>
              <Input type='file' placeholder='upload file' />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Summary</FormLabel>
              <Textarea placeholder='' size={'md'} />
            </FormControl>

            <Checkbox paddingTop={'5'} isRequired>
              I am creating a post on my wish
            </Checkbox>
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
