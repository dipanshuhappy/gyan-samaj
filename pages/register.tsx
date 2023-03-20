// register.js

import PageLayout from '@/components/page-layout';

import { app } from '@/utils/firebase';
import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Radio,
  RadioGroup,
  Stack,
  Text,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import { Select } from 'chakra-react-select';
import { getAuth } from 'firebase/auth';
import { useRouter } from 'next/router';
import { Dispatch, SetStateAction, useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { FcGoogle } from 'react-icons/fc';
import {
  create_user,
  InsituitionSchoolDetailType,
  InsituitionUniversityDetailType,
  User,
} from 'src/db/user';
const options = [
  {
    label: 'General',
    value: 'General',
  },
  {
    label: 'History',
    value: 'History',
  },
  {
    value: 'Biology',
    label: 'Biology',
  },
  {
    value: 'Sociology',
    label: 'Sociology',
  },
  {
    value: 'Biology',
    label: 'Biology',
  },
  {
    value: 'Physics',
    label: 'Physics',
  },
  {
    value: 'Mathematics',
    label: 'Mathematics',
  },
  {
    value: 'History',
    label: 'History',
  },
  {
    value: 'English',
    label: 'English',
  },
  {
    value: 'Biology',
    label: 'Biology',
  },
  {
    value: 'Chinese',
    label: 'Chinese',
  },
  {
    value: 'German',
    label: 'German',
  },
  {
    value: 'Biology',
    label: 'Biology',
  },
  {
    value: 'English',
    label: 'English',
  },
  {
    value: 'Statistics',
    label: 'Statistics',
  },
  {
    value: 'German',
    label: 'German',
  },
  {
    value: 'Japanese',
    label: 'Japanese',
  },
  {
    value: 'Psychology',
    label: 'Psychology',
  },
  {
    value: 'Sociology',
    label: 'Sociology',
  },
  {
    value: 'Mathematics',
    label: 'Mathematics',
  },
  {
    value: 'Psychology',
    label: 'Psychology',
  },
];
function RegistrationForm({
  formUser,
  onFormUserChange,
}: {
  formUser: FormUser;
  onFormUserChange: Dispatch<SetStateAction<FormUser>>;
}) {
  const [value, setValue] = useState('School');
  return (
    <form>
      <FormControl color={'white'}>
        <FormLabel>Name</FormLabel>
        <Input
          type='text'
          value={formUser.name}
          onChange={(e) => {
            onFormUserChange({
              ...formUser,
              name: e.target.value,
            });
          }}
          placeholder='Enter your name'
        />
      </FormControl>
      <FormControl mt={6} color={'white'}>
        <FormLabel>Insituition</FormLabel>
        <RadioGroup
          onChange={(val) => {
            onFormUserChange({
              ...formUser,
              insituition: val as 'School' | 'University/College',
            });
          }}
          value={formUser.insituition}
        >
          <Stack direction={'row'}>
            <Radio value='School'>School</Radio>
            <Radio value='University/College'>Universiy/College</Radio>
          </Stack>
        </RadioGroup>
      </FormControl>
      <FormControl mt={6} color={'white'}>
        <FormLabel>School Name/University Name</FormLabel>
        <Input
          onChange={(e) => {
            onFormUserChange({
              ...formUser,
              insituitionName: e.target.value,
            });
          }}
          type={'text'}
          value={formUser.insituitionName}
          placeholder='School Name '
        />
      </FormControl>
      <FormControl mt={6} color={'white'}>
        <FormLabel>Stream/Course</FormLabel>
        <Input
          value={formUser.study}
          onChange={(e) => {
            onFormUserChange({
              ...formUser,
              study: e.target.value,
            });
          }}
          type={'text'}
          placeholder='School Name '
        />
      </FormControl>
      <FormControl mt={6} color={'white'}>
        <FormLabel>Class/Year</FormLabel>
        <Input
          value={formUser.level}
          onChange={(e) => {
            onFormUserChange({
              ...formUser,
              level: e.target.value,
            });
          }}
          type={'text'}
          placeholder='School Name '
        />
      </FormControl>
      <FormControl mt={6} color={'white'}>
        <FormLabel>Subjects</FormLabel>

        <Select
          defaultValue={options[0]}
          name='subjects'
          isMulti
          value={formUser.subjects}
          onChange={(e) =>
            onFormUserChange({ ...formUser, subjects: e as string[] })
          }
          options={options}
        />
      </FormControl>
    </form>
  );
}
interface FormUser {
  name: string;
  insituition: 'School' | 'University/College';
  insituitionName: string;
  study: string;
  level: string;
  subjects: string[];
}
function Register() {
  // const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const { isOpen, onClose, onOpen } = useDisclosure();
  const toast = useToast();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formUser, setFormUser] = useState<FormUser>({
    insituition: 'School',
    name: '',
    insituitionName: '',
    level: '',
    study: '',
    subjects: [],
  });
  const [createUserWithEmailAndPassword, firebaseUser, loading, error] =
    useCreateUserWithEmailAndPassword(getAuth(app));
  const handleLoginWithEmailAndPassword = (e) => {
    e.preventDefault();
    // setShowRegistrationForm(true);
    createUserWithEmailAndPassword(email, password).then(() => {
      console.log({ error });
      onOpen();
    });
  };
  const router = useRouter();
  const signUp = async () => {
    let insituitonalDetail = {};
    if (formUser.insituition == 'School') {
      insituitonalDetail = {
        class: formUser.level,
        stream: formUser.study,
      } as InsituitionSchoolDetailType;
    } else {
      insituitonalDetail = {
        degree: formUser.study,
        year: formUser.level,
      } as InsituitionUniversityDetailType;
    }
    const user = {
      email: email,
      insituition: formUser.insituition,
      insituitionDetail: insituitonalDetail,
      name: formUser.name,
      subjects: formUser.subjects,
    } as User;

    try {
      await create_user(user);
      toast({ title: 'User has been created', status: 'success' });
      router.push('/login');
    } catch (error) {
      console.error(error);
    }
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
              Register
            </Heading>
          </Box>
          <Box my={4} px={3} textAlign='left'>
            <form onSubmit={handleLoginWithEmailAndPassword}>
              <FormControl color={'white'}>
                <FormLabel>Email</FormLabel>
                <Input
                  type='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='Enter your email.'
                />
              </FormControl>
              <FormControl mt={6} color={'white'}>
                <FormLabel>Password</FormLabel>
                <Input
                  type='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder='*******'
                />
              </FormControl>
              <Button
                width='full'
                mt={8}
                mb={3}
                type='submit'
                isLoading={loading}
              >
                Register
              </Button>
            </form>
            <Modal
              isOpen={isOpen}
              closeOnOverlayClick={false}
              onClose={onClose}
            >
              <ModalOverlay />
              <ModalContent>
                <ModalHeader> Registration Form</ModalHeader>
                <ModalBody>
                  <RegistrationForm
                    formUser={formUser}
                    onFormUserChange={setFormUser}
                  />
                </ModalBody>
                <ModalFooter>
                  <Button
                    variant='solid'
                    colorScheme={'green'}
                    onClick={() => {
                      signUp();
                    }}
                  >
                    Sign Up
                  </Button>
                  <Button
                    onClick={() => {
                      onClose();
                    }}
                    variant='ghost'
                    colorScheme={'red'}
                  >
                    Close
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
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

export default Register;
