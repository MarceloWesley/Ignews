import { GetServerSideProps } from "next"
import { getSession } from "next-auth/react"
import Head from "next/head"
import { RichText } from "prismic-dom"
import {createClient} from '../../services/prismic'
import styles from './post.module.scss'

interface PostProps {
  post: {
    slug: string,
    title: string,
    content: string
    updated_at: string
  }
}

export default function Post({post}: PostProps){
  return(
    <>
      <Head>
        <title>{post.title} | Ignews</title>
      </Head>

      <main className={styles.container}>
        <article className={styles.post}>
          <h1>{post.title}</h1>
          <time>{post.updated_at}</time>
          <div className={styles.postContent} dangerouslySetInnerHTML={{__html: post.content}}></div>
        </article>
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async  ({req, previewData, params}) => {
  const session = await getSession({req})
  const {slug} = params;


  if(!session?.activeSubscription){
    return {
      redirect: {
        destination: `/posts/preview/${slug}`,
        permanent: false
      }
    }
  }

  const client = createClient({previewData})
  const response = await client.getByUID('publ', String(slug), {})

  const post = {
    slug,
    title: RichText.asText(response.data.title),
    content: RichText.asHtml(response.data.content),
    updated_at: new Date(response.last_publication_date).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    })

  }

  return{
    props: {post}
  }
  
}