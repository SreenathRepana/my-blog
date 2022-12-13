import { Link } from 'react-router-dom';

export function ArticlesList(props) {
    return (
        <>
            {
                props.articles.map((article, i) => {
                    return (
                        <div>
                            <Link key = {i} className="article-list-item" to = {`/article/${article.name}`} >
                                <h3> {article.title} </h3>
                                <p> {article.content[0].substring(0,150)}... </p>
                            </Link> 
                            
                        </div>
                    );
                })
            }
        </>
    );
}