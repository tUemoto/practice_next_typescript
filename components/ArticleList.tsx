import articleStyles from '../styles/Article.module.css'
import ArticleItem from './ArticleItem'

const ArticleList = ({ articles }: { articles: Article[] }) => {
  console.log(articles)
  return (
    <div className={articleStyles.grid}>
      {articles.map((article: Article) => (
        <ArticleItem article={article} key={article.id} />
      ))}
    </div>
  )
}

export default ArticleList
