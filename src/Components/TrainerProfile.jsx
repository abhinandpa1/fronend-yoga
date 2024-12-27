import React, { useState } from 'react';

const TrainerProfile = ({ trainer }) => {
  const [profile, setProfile] = useState(trainer);
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleSave = () => {
    console.log('Saved Profile:', profile);
    setIsEditing(false);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto', backgroundColor: '#f9f9f9', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      {isEditing ? (
        <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label style={{ fontWeight: 'bold', marginBottom: '5px' }}>Name:</label>
            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleChange}
              style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '14px' }}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label style={{ fontWeight: 'bold', marginBottom: '5px' }}>Email:</label>
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
              style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '14px' }}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label style={{ fontWeight: 'bold', marginBottom: '5px' }}>Specialization:</label>
            <input
              type="text"
              name="specialization"
              value={profile.specialization}
              onChange={handleChange}
              style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '14px' }}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label style={{ fontWeight: 'bold', marginBottom: '5px' }}>Bio:</label>
            <textarea
              name="bio"
              value={profile.bio}
              onChange={handleChange}
              style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '14px', height: '100px' }}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label style={{ fontWeight: 'bold', marginBottom: '5px' }}>Certifications:</label>
            <input
              type="text"
              name="certifications"
              value={profile.certifications || ''}
              onChange={handleChange}
              style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '14px' }}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label style={{ fontWeight: 'bold', marginBottom: '5px' }}>Years of Experience:</label>
            <input
              type="number"
              name="yearsOfExperience"
              value={profile.yearsOfExperience || ''}
              onChange={handleChange}
              style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '14px' }}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label style={{ fontWeight: 'bold', marginBottom: '5px' }}>Languages Spoken:</label>
            <input
              type="text"
              name="languages"
              value={profile.languages || ''}
              onChange={handleChange}
              style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '14px' }}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label style={{ fontWeight: 'bold', marginBottom: '5px' }}>Availability:</label>
            <input
              type="text"
              name="availability"
              value={profile.availability || ''}
              onChange={handleChange}
              style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '14px' }}
            />
          </div>
          <button type="button" onClick={handleSave} style={{ padding: '10px 20px', backgroundColor: '#007BFF', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '16px', marginTop: '10px' }}>
            Save
          </button>
        </form>
      ) : (
        <div>
          <p><strong>Name:</strong> {profile.name}</p>
          <p><strong>Email:</strong> {profile.email}</p>
          <p><strong>Specialization:</strong> {profile.specialization}</p>
          <p><strong>Bio:</strong> {profile.bio}</p>
          <p><strong>Certifications:</strong> {profile.certifications || "Not provided"}</p>
          <p><strong>Years of Experience:</strong> {profile.yearsOfExperience || "Not provided"}</p>
          <p><strong>Languages Spoken:</strong> {profile.languages || "Not provided"}</p>
          <p><strong>Availability:</strong> {profile.availability || "Not provided"}</p>
          <button onClick={() => setIsEditing(true)} style={{ padding: '10px 20px', backgroundColor: '#007BFF', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '16px', marginTop: '10px' }}>
            Edit Profile
          </button>
        </div>
      )}
    </div>
  );
};

export default TrainerProfile;







