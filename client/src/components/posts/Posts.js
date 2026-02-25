import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPosts } from '../../actions/post';
import PostItem from './PostItem';
import PostForm from './PostForm';

const Posts = ({
  getPosts,
  post: { posts, loading }
}) => {

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <section className="container">
      <h1 className="large text-primary">Posts</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Welcome to the community!
      </p>
        <PostForm />
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <div className="posts">
          {posts.length > 0 ? (
            posts.map(post => (
              <PostItem key={post._id} post={post} />
            ))
          ) : (
            <h4>No posts found...</h4>
          )}
        </div>
      )}
    </section>
  );
};

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  post: state.post
});

export default connect(
  mapStateToProps,
  { getPosts }
)(Posts);