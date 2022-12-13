import { useParams } from "react-router-dom";
import articles from './article-content';
import { NotFoundPage } from './NotFoundPage';

export function ArticlePage () {
    // const params = useParams();
    // const articleId = params.articleId;

    const {articleId} = useParams();
    const article = articles.find( (articleItem) => {
        return articleItem.name === articleId;
    })
    
    if (!article) {
        return(
            <NotFoundPage />
        );
    }
    return (
        <>
            <h1> {article.title} </h1>
            {article.content.map((paragraph, i) => {
                return (
                    <p key = {i}> {paragraph} </p>
                );
            })}
        </>

    );
}