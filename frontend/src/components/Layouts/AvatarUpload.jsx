import React, { useState } from 'react';

const AvatarUpload = ({ avatar, onAvatarChange }) => {
  const [preview, setPreview] = useState(avatar);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileURL = URL.createObjectURL(file);
      setPreview(fileURL);
      onAvatarChange(fileURL);  // Pass the file URL or blob to parent
    }
  };

  return (
    <div className="avatar-upload-container">
      <input
        type="file"
        id="avatarInput"
        accept="image/*"
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
      <label htmlFor="avatarInput" className="avatar-upload-label">
        <img
          src={preview || '/path/to/default-avatar.jpg'}
          alt="Avatar"
          className="avatar-preview"
        />
      </label>
    </div>
  );
};

export default AvatarUpload;
