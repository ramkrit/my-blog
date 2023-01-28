import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import CommentsList from "../components/CommentsList";
import AddCommentForm from "../components/AddCommentForm";
import useUser from "../hooks/useUser";
import articles from "./article-content";

const ArticalePage = () => {

    const [ aritcleInfo, setArticleInfo ] = useState({ upvotes: 0, comments: [], canUpvote: false });
    const { canUpvote } = aritcleInfo;
    const urlParams = useParams();
    const article_id = urlParams.articleId;
    const { user, isLoading } = useUser();

    var getArticle = articles.find(ramElement => ramElement.name === article_id);

    // this hook is used to call code only at once time when page reload
    useEffect(() => {
        
        async function getArticleDetail() {
            try {

                const token = user && await user.getIdToken();
                const headers = (token) ? { authtoken: token } : {};
                // Because i have added "proxy": "http://localhost:8000", in package.json file
                const response = await axios.get(`/api/articles/${article_id}`, { headers });
                const newAricleInfo = response.data;
                setArticleInfo(newAricleInfo);
            } catch (error) {
                console.error(error);
            }
        }
        if (!isLoading) {
            getArticleDetail();
        }

    }, [isLoading, user]);

    const upvoteArticle =  async () => {
        try {
            const token = user && await user.getIdToken();
            const headers = token ? { authtoken: token } : {};
            console.log(headers);
            const response = await axios.put(`/api/articles/${article_id}/upvote`, null, { headers });
            setArticleInfo(response.data);
        } catch (error) {
            console.error(error);
        }
    }
    
    
    return getArticle ? (
        <>
            <h1>{getArticle.title}</h1>
            <div className="upvotes-section">
                { 
                    user ? <button onClick={upvoteArticle}>{canUpvote ? 'Upvote' : 'Already Upvoted'}</button>
                    : <button >Log In for upvote</button> 
                }
                <p>This article has {aritcleInfo.upvotes} upvote(s)</p>
            </div>
            {getArticle.content.map((articleContent, key) => (
                <p key={key}>{articleContent}</p>
            ))}
            
            { user 
             ? <AddCommentForm 
                articleId={article_id}
                onArticleUpdated={updatedArticle => setArticleInfo(updatedArticle)} />
            : <button>Log In for comment</button> }

            <CommentsList comments={aritcleInfo.comments} />
        </>
        
    ) : (
        <h1>Uh oh, looks like that article doesn't exist</h1>
    )
}

export default ArticalePage;