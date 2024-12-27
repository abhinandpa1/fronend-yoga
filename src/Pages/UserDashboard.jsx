import React, { useState } from 'react';
import { MDBBtn, MDBModal, MDBModalDialog, MDBModalContent, MDBModalFooter } from 'mdb-react-ui-kit';
import UserProfile from '../Components/UserProfile';
import YogaClasses from '../Components/YogaClasses';  
import ChatBox from '../Components/ChatBox';  // Import the ChatBox component

const UserDashboard = () => {
  const [basicModal, setBasicModal] = useState(false);  // Modal for User Profile
  const [chatModal, setChatModal] = useState(false);  // Modal for ChatBox

  const toggleProfileModal = () => setBasicModal(!basicModal);
  const toggleChatModal = () => setChatModal(!chatModal);

  return (
    <div className="user-dashboard">
      <YogaClasses /> 

      {/* Button to open the User Profile Modal */}
      <MDBBtn onClick={toggleProfileModal}>View Profile</MDBBtn>
      <MDBModal open={basicModal} onClose={() => setBasicModal(false)} tabIndex="-1">
        <MDBModalDialog>
          <MDBModalContent>
            <UserProfile />
            <MDBModalFooter>
              <MDBBtn color="secondary" onClick={toggleProfileModal}>
                Close
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>

      {/* Button to open the ChatBox Modal */}
      <MDBBtn onClick={toggleChatModal}>Open Chat</MDBBtn>
      <MDBModal open={chatModal} onClose={() => setChatModal(false)} tabIndex="-1">
        <MDBModalDialog>
          <MDBModalContent>
            <ChatBox /> {/* Display the ChatBox inside the modal */}
            <MDBModalFooter>
              <MDBBtn color="secondary" onClick={toggleChatModal}>
                Close
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </div>
  );
};

export default UserDashboard;









