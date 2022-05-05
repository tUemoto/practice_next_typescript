import { GetServerSideProps } from 'next'
import Link from 'next/link'
// import { useRouter } from 'next/router'
const Article = ({ article }: { article: BlogPost }) => {
  // urlに含まれる変数を取得する場合は下記を利用すると良い
  //   const router = useRouter()
  //   const { id } = router.query

  return (
    <>
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <br />
      <Link href="/">Go Back</Link>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context?.params?.id}`,
  )

  const article: BlogPost = await res.json()

  return {
    props: { article },
  }
}

export default Article
