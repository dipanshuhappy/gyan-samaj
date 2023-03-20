// RegistrationForm.js
interface SubjectOption {
  readonly value: string;
  readonly label: string;
}
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
import {
  FormControl,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  Stack,
} from '@chakra-ui/react';
import { Select } from 'chakra-react-select';
import { useState } from 'react';

function RegistrationForm(props) {
  const [value, setValue] = useState('School');
  return (
    <form>
      <FormControl color={'white'}>
        <FormLabel>Name</FormLabel>
        <Input type='text' placeholder='Enter your name' />
      </FormControl>
      <FormControl mt={6} color={'white'}>
        <FormLabel>Insituition</FormLabel>
        <RadioGroup onChange={setValue} value={value}>
          <Stack direction={'row'}>
            <Radio value='School'>School</Radio>
            <Radio value='University/College'>Universiy/College</Radio>
          </Stack>
        </RadioGroup>
      </FormControl>
      <FormControl mt={6} color={'white'}>
        <FormLabel>School Name/University Name</FormLabel>
        <Input type={'text'} placeholder='School Name ' />
      </FormControl>
      <FormControl mt={6} color={'white'}>
        <FormLabel>Stream/Course</FormLabel>
        <Input type={'text'} placeholder='School Name ' />
      </FormControl>
      <FormControl mt={6} color={'white'}>
        <FormLabel>Class/Year</FormLabel>
        <Input type={'text'} placeholder='School Name ' />
      </FormControl>
      <FormControl mt={6} color={'white'}>
        <FormLabel>Subjects</FormLabel>

        <Select
          defaultValue={options[0]}
          name='subjects'
          isMulti
          options={options}
        />
      </FormControl>
    </form>
  );
}

export default RegistrationForm;
