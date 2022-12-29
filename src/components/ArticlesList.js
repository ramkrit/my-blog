import React from "react"
import { Link } from "react-router-dom";

const ArticlesList = ({articles}) => {
    return (
        <>
            {
                articles.map((row, i) => (
                    <Link className="article-list-item" key={i} to={`/articale/${row.name}`}>
                        <h3 >{row.title}</h3>
                        <p>{row.content[0].substring(0, 150)}...</p>
                    </Link>
                ))
            }
        </>
    )
}

export default ArticlesList;