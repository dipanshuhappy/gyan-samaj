// register.js

import React, { useState } from 'react';
import Layout from '@/components/layout';
import PageLayout from '@/components/page-layout';
import { Flex, Box, Heading, FormControl, FormLabel, Input, Button } from '@chakra-ui/react';
import RegisterationDetails from './RegisterationDetails';

function Register() {
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowRegistrationForm(true);
  };

  return (
    <PageLayout title={''}>
      <Flex width="100%" height={'100%'} align="center" marginInline={'auto'} marginTop="15%" justifyContent="center">
        <Box p={2} bg="#553C9A" w="400px" borderWidth={1} borderRadius={8} boxShadow="lg">
          <Box textAlign="center">
            <Heading color={'white'} mt={3} >Register</Heading>
          </Box>
          <Box my={4} px={3} textAlign="left">
            <form onSubmit={handleSubmit}>
              <FormControl color={'white'}>
                <FormLabel>Email</FormLabel>
                <Input type="email" placeholder="Enter your email." />
              </FormControl>
              <FormControl mt={6} color={'white'} >
                <FormLabel>Password</FormLabel>
                <Input type="password" placeholder="*******" />
              </FormControl>
              <Button width="full" mt={8} mb={3} type="submit" >
                Register
              </Button>
            </form>
            {showRegistrationForm && <RegisterationDetails />}
          </Box>
        </Box>
      </Flex>
    </PageLayout>
  );
}

export default Register;
