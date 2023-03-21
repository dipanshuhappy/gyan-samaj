import PageLayout from '@/components/page-layout';
import {
  Avatar,
  Box,
  Divider,
  Flex,
  Grid,
  GridItem,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { all_posts, Post } from 'src/db/post';

function Home(props) {
  const [posts, setPosts] = useState<Post[]>();
  useEffect(() => {
    all_posts().then((value) => {
      setPosts(value);
    });
  }, []);
  return (
    <PageLayout title={'Home dashboard '}>
      {/* <UploadForm /> */}
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
        <Box width={'50%'} margin='8'>
          <Text textAlign={'left'} marginBottom='8'>
            Top Feed
          </Text>
          {posts?.map((post) => {
            return (
              <Box
                width={'100%'}
                borderRadius={'2xl'}
                border='2px'
                borderColor='aqua'
                marginBottom={'16px'}
                onClick={() => {
                  window.open(post.Files[0], '_blank');
                }}
              >
                <Grid
                  marginBottom={'16px'}
                  templateColumns={'repeat(2,1fr)'}
                  templateRows={'repeat(2,1fr)'}
                  gap={8}
                >
                  <GridItem rowSpan={1} colSpan={1}>
                    <Flex margin={'2'} textAlign='left'>
                      <Avatar name='D S PS' marginRight={'3'} />
                      <VStack textAlign={'left'} spacing={0}>
                        <Text textAlign={'left'}>{post.userID}</Text>
                        <Text fontSize={'smaller'}>Some momeetns ago</Text>
                      </VStack>
                    </Flex>
                  </GridItem>
                  <GridItem rowSpan={1} colSpan={2}>
                    <Box
                      borderRadius={'2xl'}
                      border={'2px'}
                      width={'100%'}
                      height={'100%'}
                      borderColor='blue.300'
                      shadow={'xs'}
                    >
                      {post.title}
                    </Box>
                  </GridItem>
                  <GridItem rowSpan={2} colSpan={2}>
                    <Box
                      borderRadius={'2xl'}
                      border={'2px'}
                      width={'100%'}
                      height={'100%'}
                      borderColor='blue.300'
                      shadow={'xs'}
                      padding='4'
                    >
                      {post.summary}
                    </Box>
                  </GridItem>
                </Grid>
                <Text>Click to Download Full Note</Text>
              </Box>
            );
          })}
        </Box>
      </Flex>
    </PageLayout>
  );
}

export default Home;
