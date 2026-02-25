import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { getProfileById, getGithubRepos } from '../../actions/profile';
import PropTypes from 'prop-types';

const Profile = ({
  getProfileById,
  getGithubRepos,
  profile: { profile, loading, repos }
}) => {

  const { id } = useParams();

  useEffect(() => {
    getProfileById(id);
  }, [getProfileById, id]);

  useEffect(() => {
    if (profile?.githubusername) {
      getGithubRepos(profile.githubusername);
    }
  }, [profile, getGithubRepos]);

  return (
    <section className="container">

      <Link to="/profiles" className="btn btn-light my-2">
        Back To Profiles
      </Link>

      {loading || profile === null ? (
        <h2>Loading...</h2>
      ) : (
        <>
          {/* TOP SECTION */}
          <div className="profile-top bg-primary p-3 text-center">
            <img
              className="round-img my-2"
              src={profile.user.avatar}
              alt=""
            />
            <h1 className="large">{profile.user.name}</h1>
            <p className="lead">{profile.status}</p>
            <p>{profile.location}</p>
          </div>

          {/* ABOUT SECTION */}
          <div className="profile-about bg-light p-3 my-3">
            <h2 className="text-primary">Bio</h2>
            <p>{profile.bio}</p>
          </div>

          {/* SKILLS SECTION */}
          <div className="profile-skills bg-light p-3 my-3">
            <h2 className="text-primary">Skills</h2>
            <div className="skills-grid">
              {profile.skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  ✓ {skill}
                </div>
              ))}
            </div>
          </div>

          {/* EXPERIENCE */}
          {profile.experience.length > 0 && (
            <div className="profile-exp bg-light p-3 my-3">
              <h2 className="text-primary">Experience</h2>
              {profile.experience.map(exp => (
                <div key={exp._id} className="my-2">
                  <h3>{exp.company}</h3>
                  <p>{exp.title}</p>
                  <p>{exp.description}</p>
                  
                </div>
              ))}
            </div>
          )}

          {/* EDUCATION */}
          {profile.education.length > 0 && (
            <div className="profile-edu bg-light p-3 my-3">
              <h2 className="text-primary">Education</h2>
              {profile.education.map(edu => (
                <div key={edu._id} className="my-2">
                  <h3>{edu.school}</h3>
                  <p>{edu.degree}</p>
                </div>
              ))}
            </div>
          )}

          {/* GITHUB REPOS */}
          {repos.length > 0 && (
            <div className="profile-github bg-light p-3 my-3">
              <h2 className="text-primary">GitHub Repositories</h2>
              {repos.map(repo => (
                <div key={repo.id} className="repo-card my-2 p-2">
                  <h3>
                    <a href={repo.html_url} target="_blank" rel="noreferrer">
                      {repo.name}
                    </a>
                  </h3>
                  <p>{repo.description}</p>
                  <div>
                    ⭐ {repo.stargazers_count} | 🍴 {repo.forks_count}
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </section>
  );
};

Profile.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  getGithubRepos: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(mapStateToProps, {
  getProfileById,
  getGithubRepos
})(Profile);