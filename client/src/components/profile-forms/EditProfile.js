import React, { Fragment, useState,useEffect } from 'react';
import PropTypes from 'prop-types';
import { createProfile,getCurrentProfile } from '../../actions/profile';
import { Link, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import CreateProfile from './CreateProfile';

const EditProfile = ({ profile:{profile,loading},createProfile,getCurrentProfile}) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    company: '',
    website: '',
    location: '',
    bio: '',
    status: '',
    githubusername: '',
    skills: '',
    youtube: '',
    facebook: '',
    twitter: '',
    instagram: '',
    linkedin: ''
  });

useEffect(() => {
  getCurrentProfile();
}, [getCurrentProfile]);

  const [displaySocialInputs, toggleSocialInputs] = useState(false);
 // 🔹 Populate form when profile loads
useEffect(() => {
  if (!loading && profile) {
    setFormData({
      company: profile.company || '',
      website: profile.website || '',
      location: profile.location || '',
      bio: profile.bio || '',
      status: profile.status || '',
      githubusername: profile.githubusername || '',
      skills: profile.skills ? profile.skills.join(', ') : '',
      youtube: profile.social?.youtube || '',
      facebook: profile.social?.facebook || '',
      twitter: profile.social?.twitter || '',
      instagram: profile.social?.instagram || '',
      linkedin: profile.social?.linkedin || ''
    });
  }
}, [loading,profile]);

  const {
    company,
    website,
    location,
    bio,
    status,
    githubusername,
    skills,
    youtube,
    facebook,
    twitter,
    instagram,
    linkedin
  } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    createProfile(formData, navigate,true);
  };

  return (
    <Fragment>
      <h1 className="large text-primary">Create Your Profile</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Let's get some information to make your
        profile stand out
      </p>
      <small>* = required field</small>

      <form className="form" onSubmit={onSubmit}>
        <div className="form-group">
          <select name="status" value={status} onChange={onChange}>
            <option value="0">* Select Professional Status</option>
            <option value="Developer">Developer</option>
            <option value="Junior Developer">Junior Developer</option>
            <option value="Senior Developer">Senior Developer</option>
            <option value="Manager">Manager</option>
            <option value="Student or Learning">Student or Learning</option>
            <option value="Instructor">Instructor or Teacher</option>
            <option value="Intern">Intern</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <input type="text" placeholder="Company" name="company" value={company} onChange={onChange} />
        </div>

        <div className="form-group">
          <input type="text" placeholder="Website" name="website" value={website} onChange={onChange} />
        </div>

        <div className="form-group">
          <input type="text" placeholder="Location" name="location" value={location} onChange={onChange} />
        </div>

        <div className="form-group">
          <input type="text" placeholder="* Skills" name="skills" value={skills} onChange={onChange} />
        </div>

        <div className="form-group">
          <input type="text" placeholder="Github Username" name="githubusername" value={githubusername} onChange={onChange} />
        </div>

        <div className="form-group">
          <textarea placeholder="A short bio of yourself" name="bio" value={bio} onChange={onChange}></textarea>
        </div>

        <div className="my-2">
          <button
            type="button"
            className="btn btn-light"
            onClick={() => toggleSocialInputs(!displaySocialInputs)}
          >
            Add Social Network Links
          </button>
          <span> Optional</span>
        </div>

       {displaySocialInputs && (
  <Fragment>
    <div className="form-group social-input">
      <i className="fab fa-twitter fa-2x"></i>
      <input
        type="text"
        placeholder="Twitter URL"
        name="twitter"
        value={twitter}
        onChange={onChange}
      />
    </div>

    <div className="form-group social-input">
      <i className="fab fa-facebook fa-2x"></i>
      <input
        type="text"
        placeholder="Facebook URL"
        name="facebook"
        value={facebook}
        onChange={onChange}
      />
    </div>

    <div className="form-group social-input">
      <i className="fab fa-youtube fa-2x"></i>
      <input
        type="text"
        placeholder="YouTube URL"
        name="youtube"
        value={youtube}
        onChange={onChange}
      />
    </div>

    <div className="form-group social-input">
      <i className="fab fa-linkedin fa-2x"></i>
      <input
        type="text"
        placeholder="LinkedIn URL"
        name="linkedin"
        value={linkedin}
        onChange={onChange}
      />
    </div>

    <div className="form-group social-input">
      <i className="fab fa-instagram fa-2x"></i>
      <input
        type="text"
        placeholder="Instagram URL"
        name="instagram"
        value={instagram}
        onChange={onChange}
      />
    </div>
  </Fragment>
)}

        <input type="submit" className="btn btn-primary my-1" />
        <Link className="btn btn-light my-1" to="/dashboard">Go Back</Link>
      </form>
    </Fragment>
  );
};

EditProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile:PropTypes.func.isRequired,
  profile:PropTypes.object.isRequired,
};
const mapStateToProps = state => ({
  profile: state.profile,
  loading: state.profile
});

export default connect(mapStateToProps, { createProfile,getCurrentProfile })(EditProfile);
