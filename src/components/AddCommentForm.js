import { useState } from "react";
import axios from "axios";
import useUser from "../hooks/useUser";

const AddCommentForm = ({ articleId, onArticleUpdated }) => {
    const [ name, setName ] = useState('');
    const [ comment, setComment ] = useState('');
    const { user } = useUser();

    const addComment =  async () =>{
        const token = user && await user.getIdToken();
        const headers = (token) ? { authtoken: token } : {};
        const response = await axios.post(`/api/articles/${articleId}/comments`, 
            {
                uploadedBy: name,
                text: comment
            },
            { headers }
        );
        const updateArticle = response.data;
        onArticleUpdated(updateArticle);
        setName('');
        setComment('');
    }

    return (
        <>
            <div id="add-comment-form">
                <h3>Add Comment</h3>
                { user && <p>You are posting as {user.email}</p>}
                <label>
                    <textarea
                        value={comment}
                        onChange={e => setComment(e.target.value)}
                        row="5"
                        col="50"></textarea>
                </label>
                <button onClick={addComment}>Add Comment</button>
            </div>
        </>
    )
}

export default AddCommentForm;