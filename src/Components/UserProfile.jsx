import React, { useState, useEffect } from "react";

const UserProfile = () => {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    yogaLevel: "",
    yogaStyle: "",
    healthGoals: "",
    medicalConditions: "",
    age: "",
  });
  const [isEditing, setIsEditing] = useState(false);

  // Load saved profile from localStorage
  useEffect(() => {
    const savedProfile = localStorage.getItem("userProfile");
    if (savedProfile) {
      setProfile(JSON.parse(savedProfile));
    }
  }, []);

  // Save profile to localStorage
  const saveProfile = () => {
    if (profile.name.trim() && profile.age.trim()) {
      localStorage.setItem("userProfile", JSON.stringify(profile));
      setIsEditing(false);
      console.log("Profile saved:", profile);
    } else {
      alert("Please fill in all fields before saving.");
    }
  };

  return (
    <div className="profile-section">
      <h3>Profile</h3>
      {isEditing ? (
        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={profile.name}
              onChange={(e) => setProfile({ ...profile, name: e.target.value })}
            />
          </div>
          <div>
            <label>Age:</label>
            <input
              type="text"
              placeholder="Enter your age"
              value={profile.age}
              onChange={(e) => setProfile({ ...profile, age: e.target.value })}
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={profile.email}
              onChange={(e) => setProfile({ ...profile, email: e.target.value })}
            />
          </div>
          <div>
            <label>Phone Number:</label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              value={profile.phone}
              onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
            />
          </div>
          <div>
            <label>Date of Birth:</label>
            <input
              type="date"
              value={profile.dob}
              onChange={(e) => setProfile({ ...profile, dob: e.target.value })}
            />
          </div>
          <div>
            <label>Gender:</label>
            <select
              value={profile.gender}
              onChange={(e) =>
                setProfile({ ...profile, gender: e.target.value })
              }
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="non-binary">Non-binary</option>
              <option value="prefer-not-to-say">Prefer not to say</option>
            </select>
          </div>
          <div>
            <label>Yoga Level:</label>
            <select
              value={profile.yogaLevel}
              onChange={(e) =>
                setProfile({ ...profile, yogaLevel: e.target.value })
              }
            >
              <option value="">Select Level</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>
          <div>
            <label>Preferred Yoga Style:</label>
            <input
              type="text"
              placeholder="Enter preferred yoga styles"
              value={profile.yogaStyle}
              onChange={(e) =>
                setProfile({ ...profile, yogaStyle: e.target.value })
              }
            />
          </div>
          <div>
            <label>Health Goals:</label>
            <textarea
              placeholder="Enter your health goals"
              value={profile.healthGoals}
              onChange={(e) =>
                setProfile({ ...profile, healthGoals: e.target.value })
              }
            />
          </div>
          <div>
            <label>Medical Conditions:</label>
            <textarea
              placeholder="Enter any medical conditions"
              value={profile.medicalConditions}
              onChange={(e) =>
                setProfile({ ...profile, medicalConditions: e.target.value })
              }
            />
          </div>
          <div>
            <button type="button" onClick={saveProfile}>
              Save
            </button>
          </div>
        </form>
      ) : (
        <div>
          <p>
            <strong>Name:</strong> {profile.name || "Not provided"}
          </p>
          <p>
            <strong>Age:</strong> {profile.age || "Not provided"}
          </p>
          <p>
            <strong>Email:</strong> {profile.email || "Not provided"}
          </p>
          <p>
            <strong>Phone Number:</strong> {profile.phone || "Not provided"}
          </p>
          <p>
            <strong>Date of Birth:</strong> {profile.dob || "Not provided"}
          </p>
          <p>
            <strong>Gender:</strong> {profile.gender || "Not provided"}
          </p>
          <p>
            <strong>Yoga Level:</strong> {profile.yogaLevel || "Not provided"}
          </p>
          <p>
            <strong>Preferred Yoga Style:</strong> {profile.yogaStyle || "Not provided"}
          </p>
          <p>
            <strong>Health Goals:</strong> {profile.healthGoals || "Not provided"}
          </p>
          <p>
            <strong>Medical Conditions:</strong> {profile.medicalConditions || "Not provided"}
          </p>
          <button onClick={() => setIsEditing(true)}>Edit Profile</button>
        </div>
      )}
    </div>
  );
};

export default UserProfile;



