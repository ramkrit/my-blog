const CommentsList = ({ comments }) => {
    return (
            <>
                <h3>Comments</h3>
                {
                    comments.map((comment) => (
                        <div className="comment" key={comment.uploadedBy+ " : "+comment.text} >
                            <h3 >{comment.uploadedBy}</h3>
                            <p>{comment.text}</p>
                        </div>
                    ))
                }
            </>
        )
}

export default CommentsList;