import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { getPost } from '../../actions/post';
import PostItem from '../posts/PostItem';
import CommentForm from '../posts/CommentForm';
import { deleteComment } from '../../actions/post';

const Post = ({ getPost, deleteComment, post, auth }) => {
  const { id } = useParams();

  useEffect(() => {
    getPost(id);
  }, [getPost, id]);

  const { post: singlePost, loading } = post;

  if (loading || singlePost === null) {
    return <h2>Loading...</h2>;
  }

  return (
    <section className="container">
      <Link to="/posts" className="btn">
        Back To Posts
      </Link>

      <PostItem post={singlePost} showActions={false} />

      <CommentForm postId={singlePost._id} />

      <div className="comments">
        {singlePost.comments.map(comment => (
          <div key={comment._id} className="post bg-white p-1 my-1">
            <div>
              <img
                className="round-img"
                src={comment.avatar}
                alt=""
              />
              <h4>{comment.name}</h4>
            </div>

            <div>
              <p className="my-1">{comment.text}</p>
              <p className="post-date">
                {new Date(comment.date).toLocaleDateString('en-GB')}
              </p>

              {/* 🔥 DELETE COMMENT BUTTON */}
              {!auth.loading &&
                auth.user &&
                comment.user === auth.user._id && (
                  <button
                    onClick={() =>
                      deleteComment(singlePost._id, comment._id)
                    }
                    type="button"
                    className="btn btn-danger"
                  >
                    <i className="fas fa-times"></i>
                  </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

Post.propTypes = {
  getPost: PropTypes.func.isRequired,
  deleteComment: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  post: state.post,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getPost, deleteComment }
)(Post);