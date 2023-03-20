import PageLayout from '@/components/page-layout';
import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
} from '@chakra-ui/react';
import { FcGoogle } from 'react-icons/fc';

function login() {
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
              <Button width='full' mt={8} mb={3} type='submit'>
                Sign In
              </Button>
            </form>
          </Box>
        </Box>
      </Flex>
      <Center p={8}>
        <Button
          w={'full'}
          maxW={'md'}
          variant={'outline'}
          leftIcon={<FcGoogle />}
        >
          <Center>
            <Text>Sign Up with Google</Text>
          </Center>
        </Button>
      </Center>
    </PageLayout>
  );
}

export default login;
