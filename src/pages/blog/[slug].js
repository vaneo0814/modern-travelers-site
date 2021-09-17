import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { getPostSlugs, getPostData } from '../../utils/posts';

export const getStaticProps = async ({ params }) => {
    const postData = await getPostData(params.slug);
    return {
      props: {
        postData,
      },
    };
  };

  export const getStaticPaths = () => {
    const paths = getPostSlugs();
    return {
      paths,
      fallback: false,
    };
  };

  const BlogPost = ({ postData }) => {
    return (
      <>
        <Head>
          <title>{postData.postTitle} // Modern Travelers</title>
        </Head>
        <div className='page-wrapper'>
          <Header />
          <main>
            <pre>{JSON.stringify(postData, null, 2)}</pre>
          </main>
          <Footer />
        </div>
      </>
    );
  };
  
  export default BlogPost;