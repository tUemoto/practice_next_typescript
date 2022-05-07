import { GetServerSideProps, GetStaticPaths, GetStaticProps } from 'next'
import Link from 'next/link'
import Meta from '../../../components/Mata'
import { server } from '../../../config'
// import { useRouter } from 'next/router'
const Article = ({ article }: { article: Article }) => {
  // urlに含まれる変数を取得する場合は下記を利用すると良い
  //   const router = useRouter()
  //   const { id } = router.query

  return (
    <>
      <Meta title={article.title} description={article.excerpt}></Meta>
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <br />
      <Link href="/">Go Back</Link>
    </>
  )
}

/**
 * ページのレンダリング処理の前にサーバーに問い合わせて
 * データを取得する
 * リクエストのたびに実行される。
 * キャッシュが残るのが嫌な場合にはこちらを使う。
 */
// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context?.params?.id}`,
//   )

//   const article: BlogPost = await res.json()

//   return {
//     props: { article },
//   }
// }

/**
 * getStaticPathsを利用する際は
 * getStaticPropsと一緒に使う。
 * getStaticPathsは、ビルドのタイミングで実行され、ランタイムでは実行されない。（bundleしたときにこの部分はclient-sideにはコードが露出しない）
 * getStaticPropsはそれぞれの`next build`のときに実行される
 * fallback: trueに設定するとバックグラウンドで実行される
 * fallback: blockingに設定すると最初のレンダリング時に実行される。
 *
 * ビルド時に1度だけ実行され、キャッシュの利用ができる。
 * →DBやAPI、headless CMSやfilesystemの利用で有効
 * ビルド時に実行するので表示が早い。
 * SEOを気にする場合はこちらを利用する
 */
// export const getStaticProps: GetStaticProps = async (context) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context?.params?.id}`,
//   )

//   const article: BlogPost = await res.json()
//   return {
//     props: { article },
//   }
// }

// export const getStaticPaths: GetStaticPaths = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`)
//   const articles: BlogPost[] = await res.json()

//   const ids = articles.map((article) => article.id)
//   const paths = ids.map((id) => ({ params: { id: id.toString() } }))
//   return {
//     paths,
//     fallback: false,
//   }
// }

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch(`${server}/api/articles/${context?.params?.id}`)

  const article: BlogPost = await res.json()
  return {
    props: { article },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`${server}/api/articles/`)
  const articles: BlogPost[] = await res.json()

  const ids = articles.map((article) => article.id)
  const paths = ids.map((id) => ({ params: { id: id.toString() } }))
  return {
    paths,
    fallback: false,
  }
}

export default Article
