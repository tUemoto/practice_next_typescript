import articleStyles from '../styles/Article.module.css'
import ArticleItem from './ArticleItem'

const ArticleList = ({ articles }: { articles: BlogPost[] }) => {
  console.log(articles)
  return (
    <div className={articleStyles.grid}>
      {articles.map((article: BlogPost) => (
        <ArticleItem article={article} key={article.id} />
      ))}
    </div>
  )
}

export default ArticleList
