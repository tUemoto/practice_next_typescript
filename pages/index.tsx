import { GetStaticProps } from 'next'
import ArticleList from '../components/ArticleList'
import { server } from '../config'

const Home = ({ articles }: { articles: Article[] }) => {
  return (
    <div>
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
  let articles: BlogPost[] = []
  if (res.status === 200) {
    articles = await res.json()
  }

  return {
    props: { articles },
  }
}
