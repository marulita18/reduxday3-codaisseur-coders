import React, { useEffect, useState } from "react";
import moment from "moment";
import { fetchNext5Posts } from "../store/feeds/actions";
import { useDispatch, useSelector } from "react-redux";
import { selectFeedLoading, selectFeedPosts } from "../store/feeds/selectors";
import { Link } from "react-router-dom";

export default function PostsFeed() {
  const loading = useSelector(selectFeedLoading);
  const posts = useSelector(selectFeedPosts);
  const dispatch = useDispatch();
  // const [data, setData] = useState({
  //   loading: true,
  //   posts: [],
  // });

  useEffect(() => {
    dispatch(fetchNext5Posts);
  }, [dispatch]);

  return (
    <div className="PostsFeed">
      <h2>Recent posts</h2>
      <div>
        {posts.map((post) => {
          return (
            <div key={post.id}>
              <h3>
                <Link to={`/post/${post.id}`}>{post.title}</Link>
              </h3>
              <p className="meta"></p>
            </div>
          );
        })}
      </div>
      {loading ? (
        "Loading"
      ) : (
        <button onClick={() => dispatch(fetchNext5Posts)}>Load more</button>
      )}
    </div>
  );
}
