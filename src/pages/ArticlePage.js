import { parsePath, useParams } from "react-router-dom";
import articles from './article-content';

export function ArticlePage () {
    // const params = useParams();
    // const articleId = params.articleId;

    const {articleId} = useParams();
    const article = articles.find( (articleItem) => {
        return articleItem.name === articleId;
    })
 
    return (
        <>
            <h1> {article.title} </h1>
            {article.content.map(paragraph => {
                return (
                    <p> {paragraph} </p>
                );
            })}
        </>

    );
}