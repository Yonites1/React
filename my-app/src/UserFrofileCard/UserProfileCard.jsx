import React from 'react';
import PropTypes from 'prop-types';

const UserProfileCard = ({ name, age, email }) => {
  return (
    <div style={styles.UserProfileCardcard}>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
    </div>
  );
};

UserProfileCard.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
};

const styles = {
  UserProfileCardcard: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    maxWidth: '300px',
    margin: '16px auto',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
 },
}

export default UserProfileCard;
