import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost } from "../store/postPage/actions";
import { selectPostAndComments } from "../store/postPage/selectors";
import { useParams } from "react-router";
import ReactMarkdown from "react-markdown";

export default function PostPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const postData = useSelector(selectPostAndComments);

  useEffect(() => {
    dispatch(fetchPost(id));
  }, [dispatch, id]);

  return (
    <div>
      {!postData ? (
        <p>Loading...</p>
      ) : (
        <>
          <h1>{postData.post.title}</h1>
          <p className="meta">TODO</p>

          <ReactMarkdown children={postData.post.content} />

          <h2>Comments ({postData.comments.count})</h2>
          {postData.comments.rows.map((comment) => {
            return <div key={comment.id}>{comment.text}</div>;
          })}
        </>
      )}
    </div>
  );
}
