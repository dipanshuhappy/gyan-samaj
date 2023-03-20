import PageLayout from '@/components/page-layout';
import { app } from '@/utils/firebase';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from '@chakra-ui/react';
import { getAuth } from 'firebase/auth';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';

function login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [signInWithEmailAndPassword, _, loading] =
    useSignInWithEmailAndPassword(getAuth(app));
  const router = useRouter();
  const login = () => {
    signInWithEmailAndPassword(email, password)
      .then((userCred) => {
        console.log({ userCred });
        router.push('/home');
      })
      .catch(console.error);
  };
  return (
    <PageLayout title={''}>
      <Flex
        width='100%'
        height={'100%'}
        align='center'
        marginInline={'auto'}
        marginTop='15%'
        justifyContent='center'
      >
        <Box
          p={2}
          bg='#553C9A'
          w='400px'
          borderWidth={1}
          borderRadius={8}
          boxShadow='lg'
        >
          <Box textAlign='center'>
            <Heading color={'white'} mt={3}>
              Login
            </Heading>
          </Box>
          <Box my={4} px={3} textAlign='left'>
            <form>
              <FormControl color={'white'}>
                <FormLabel>Email</FormLabel>
                <Input type='email' placeholder='test@test.com' />
              </FormControl>
              <FormControl mt={6}>
                <FormLabel color={'white'}>Password</FormLabel>
                <Input type='password' placeholder='*******' />
              </FormControl>
              <Button
                width='full'
                mt={8}
                mb={3}
                isLoading={loading}
                onClick={login}
              >
                Sign In
              </Button>
            </form>
          </Box>
        </Box>
      </Flex>
    </PageLayout>
  );
}

export default login;
