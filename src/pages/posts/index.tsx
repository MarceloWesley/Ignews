import Head from 'next/head'
import { GetStaticProps } from 'next'
import styles from './styles.module.scss'
import { createClient } from '../../services/prismic'
import {RichText} from 'prismic-dom'
import Link from 'next/link'



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

  return(
    <>
      <Head>
        <title>Posts | ig.news</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          {posts.map(post => (
             <Link key={post.slug} href={`/posts/${post.slug}`}>
               <a key={post.slug}>
                  <time>{post.updated_at}</time>
                  <strong>{post.title}</strong>
                  <p>{post.excerpt}</p>
               </a>
             </Link>
          ))}
        </div>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ previewData }) => {
  const client = createClient({ previewData });
  const response = await client.getAllByType('publ');

  const posts = response.map(post => {
    return{
      slug: post.uid,
      title: RichText.asText(post.data.title),
      excerpt: post.data.content.find(content => content.type === 'paragraph')?.text ?? "",
      updated_at: new Date(post.last_publication_date).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      })
    }
  })

  return {
    props: {posts},
  };
};

