import { GetStaticProps } from 'next'
import Head from 'next/head'
import ArticleList from '../components/ArticleList'
import { server } from '../config'

const Home = ({ articles }: { articles: BlogPost[] }) => {
  return (
    <div>
      <Head>
        <title>WebDev News</title>
        <meta name="keywords" content="web development, programming" />
      </Head>

      <ArticleList articles={articles} />
    </div>
  )
}

export default Home

// export const getStaticProps: GetStaticProps = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
//   const articles = await res.json()

//   return {
//     props: { articles },
//   }
// }

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`)
  const articles = await res.json()

  return {
    props: { articles },
  }
}
