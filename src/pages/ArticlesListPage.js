import articles from './article-content';

export function ArticlesListPage () {
    return (
        <>
            <h1> Articles </h1>
            {
                articles.map(article => {
                    return (
                        <div>
                            <h3> {article.title} </h3>
                            <p> {article.content[0].substring(0,150)}... </p>
                        </div>
                    );
                })
            }
        </>
    );
}