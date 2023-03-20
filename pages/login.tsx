import Layout from '@/components/layout';
import PageLayout from '@/components/page-layout';
import UploadForm from '@/components/postUpload/postUploadForm';

import{
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Center,
  VStack
} from '@chakra-ui/react';

function login() {
  return (
    <PageLayout title={''}>
      <VStack spacing={8}>
    <Flex width="100%" height={"100%"} align="center" marginInline={"auto"}  marginTop="15%" justifyContent="center" >

        <Box p={2} bg='#553C9A' w="400px" borderWidth={1} borderRadius={8} boxShadow="lg">
        <Box textAlign="center" >
          <Heading color={"white"} mt={3}>Login</Heading>
        </Box>
        <Box my={4} px={3}  textAlign="left">
          <form>
            <FormControl color={"white"}>
              <FormLabel>Email</FormLabel>
              <Input type="email" placeholder="test@test.com" />
            </FormControl>
            <FormControl mt={6}>
              <FormLabel color={"white"}>Password</FormLabel>
              <Input type="password" placeholder="*******" />
            </FormControl>
            <Button width="full" mt={8} mb={3} type="submit">
              Sign In
            </Button>
          </form>
        </Box>
      </Box>

    </Flex>
    <UploadForm/>
    </VStack>
    

    </PageLayout>
  );
}

export default login;
