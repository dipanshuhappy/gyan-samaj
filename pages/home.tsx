import PageLayout from '@/components/page-layout';
import {
  Avatar,
  Box,
  Divider,
  Flex,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from '@chakra-ui/react';
import { BsSearch } from 'react-icons/bs';

function Home(props) {
  return (
    <PageLayout title={'Home dashboard '}>
      <Flex
        width='100%'
        flexDirection={'row'}
        minHeight={'90vh'}
        position='absolute'
      >
        <Box width={['20%', '25%']} marginLeft='4'>
          <HStack>
            <Text>Explore: </Text>
            <InputGroup>
              <InputLeftElement
                pointerEvents='none'
                children={<BsSearch color='gray.300' />}
              />
              <Input type='text' placeholder='Search Your interest' />
            </InputGroup>
          </HStack>
          <Divider
            width={'100%'}
            color='white'
            orientation='horizontal'
            height={'30px'}
          />
          <Box marginTop={'40px'}>
            <Text marginBottom={'16px'}>Popular Tags: </Text>
            <HStack
              borderRadius={'2xl'}
              width={'100%'}
              marginInline='2%'
              padding={'4'}
              backgroundColor={'#121740'}
            >
              <Avatar name='S C' />
              <Text>Electric Charges</Text>
            </HStack>
          </Box>
        </Box>
        <Box width={'35%'} margin='8'>
          <Text textAlign={'left'} marginBottom='8'>
            Top Feed
          </Text>

          <Box
            width={'80%'}
            borderColor='lightblue'
            borderRadius={'2xl'}
            border='4px'
            minHeight={'300px'}
          ></Box>
        </Box>
      </Flex>
    </PageLayout>
  );
}

export default Home;
