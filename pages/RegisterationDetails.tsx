// RegistrationForm.js

import React from 'react';
import { FormControl, FormLabel, Input } from '@chakra-ui/react';

function RegistrationForm(props) {
  return (
    <form>
      <FormControl color={'white'}>
        <FormLabel>Name</FormLabel>
        <Input type="text" placeholder="Enter your name" />
      </FormControl>
      <FormControl mt={6} color={'white'}>
        <FormLabel>Address</FormLabel>
        <Input type="text" placeholder="Enter your address" />
      </FormControl>
      <FormControl mt={6} color={'white'}>
        <FormLabel>Phone</FormLabel>
        <Input type="text" placeholder="Enter your phone number" />
      </FormControl>
    </form>
  );
}

export default RegistrationForm;
