import React, { useState } from 'react';
import { LuUpload } from "react-icons/lu"; // Assuming you're using 'react-icons' for the upload icon
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Swal from 'sweetalert2'; // For custom alerts

function AddVideo({ setVideoResp }) {
  const [show, setShow] = useState(false); // To control modal visibility
  const [videoDetails, setVideoDetails] = useState({
    caption: "",
    imgUrl: "",
    link: ""
  });

  // Show and Hide modal
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Convert YouTube video URL to an embedded link
  const getEmbedLink = (e) => {
    const { value } = e.target;
    let ycode = value.slice(-11); // YouTube video code is the last 11 characters of the URL
    let ylink = `https://www.youtube.com/embed/${ycode}`;
    setVideoDetails({ ...videoDetails, link: ylink });
  };

  // Handle form submission (no API call, just simple validation)
  const handleAdd = (e) => {
    e.preventDefault(); // Prevents the default form submission

    const { caption, imgUrl, link } = videoDetails;

    // Validation: Ensure all fields are filled
    if (!caption || !imgUrl || !link) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill in all fields!",
        footer: '<a href="#">Why do I have this issue?</a>'
      });
    } else {
      // You can add logic here to handle the video response if necessary
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Video uploaded successfully.",
      });
      handleClose(); // Close the modal after successful submission
      setVideoResp({ caption, imgUrl, link }); // Pass data back to parent component (if needed)
      setVideoDetails({
        caption: "",
        imgUrl: "",
        link: ""
      });
    }
  };

  return (
    <div>
      {/* Upload Button to open the Modal */}
      <LuUpload onClick={handleShow} className="fs-1 mt-1" />
      
      {/* Modal for Video Upload */}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        dialogClassName="glass-modal" // Optional, for custom modal styling
      >
        <Modal.Header closeButton>
          <Modal.Title className="text-light">Upload Your Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="text-light">Please fill in the following details:</p>
          <form onSubmit={handleAdd}>
            {/* Caption Input */}
            <input
              onChange={e => setVideoDetails({ ...videoDetails, caption: e.target.value })}
              value={videoDetails.caption}
              type="text"
              className="form-control m-2"
              placeholder="Enter video caption"
            />
            {/* Image URL Input */}
            <input
              onChange={e => setVideoDetails({ ...videoDetails, imgUrl: e.target.value })}
              value={videoDetails.imgUrl}
              type="text"
              className="form-control m-2"
              placeholder="Enter video image URL"
            />
            {/* YouTube Link Input */}
            <input
              onChange={getEmbedLink}
              value={videoDetails.link}
              type="text"
              className="form-control m-2"
              placeholder="Enter YouTube video URL"
            />
            <div className="d-flex justify-content-between mt-3">
              {/* Cancel and Submit Buttons */}
              <Button variant="secondary" onClick={handleClose}>Cancel</Button>
              <Button type="submit" variant="dark">Upload</Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

// Ensure this is exported as default
export default AddVideo;

