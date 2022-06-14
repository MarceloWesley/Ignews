import Head from 'next/head'
import { GetStaticProps } from 'next'
import styles from './styles.module.scss'
import { createClient } from '../../services/prismic'
import { PrismicRichText } from '@prismicio/react';



type Post = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  updated_at: string;
};
interface PostsProps {
  posts: Post[];
}

export default function Posts({posts}: PostsProps){
  console.log(posts)
  return(
    <>
      <Head>
        <title>Posts | ig.news</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href='#'>
            <time>13 de fevereiro de 2001</time>
            <strong>Creating a repository with nextjs</strong>
            <p>first, you should open your terminal and write yarn create nextapp in the folder that you want the project will be created</p>
          </a>
          <a href='#'>
            <time>13 de fevereiro de 2001</time>
            <strong>Creating a repository with nextjs</strong>
            <p>first, you should open your terminal and write yarn create nextapp in the folder that you want the project will be created</p>
          </a>
          <a href='#'>
            <time>13 de fevereiro de 2001</time>
            <strong>Creating a repository with nextjs</strong>
            <p>first, you should open your terminal and write yarn create nextapp in the folder that you want the project will be created</p>
          </a>
        </div>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ previewData }) => {
  const client = createClient({ previewData });
  console.log(client)

  const response = await client.getAllByType('publ');
  console.log(response)

  
 
  return {
    props: { response },
  };
};

