import React from "react";
import { useParams } from "react-router-dom";
import articles from "./article-content";

const ArticalePage = () => {
    const urlParams = useParams();
    const article_id = urlParams.articleId;
    var getArticle = articles.find(ramElement => ramElement.name === article_id);
    
    return getArticle ? (
        <>
            <h1>{getArticle.title}</h1>
            {getArticle.content.map((articleContent, key) => (
                <p key={key}>{articleContent}</p>
            ))}
        </>
        
    ) : (
        <h1>Uh oh, looks like that article doesn't exist</h1>
    )
}

export default ArticalePage;