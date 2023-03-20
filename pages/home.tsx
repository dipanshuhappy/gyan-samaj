import PageLayout from '@/components/page-layout';
import { Flex } from '@chakra-ui/react';

function Home(props) {
  return (
    <PageLayout title={'Home dashboard '}>
      <Flex
        width='100%'
        flexDirection={'column'}
        backgroundColor={'red'}
        minHeight={'90vh'}
        position='absolute'
      >
        <VStack></VStack>
      </Flex>
    </PageLayout>
  );
}

export default Home;
