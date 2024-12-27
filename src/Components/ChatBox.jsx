import React, { useState } from 'react';
import { MDBInput, MDBBtn, MDBCard, MDBCardBody, MDBCardHeader, MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';

const ChatBox = () => {
  const [messages, setMessages] = useState([]); // To hold the messages
  const [newMessage, setNewMessage] = useState(''); // To hold the current input message

  // Simulate the role of user or trainer
  const [isUser, setIsUser] = useState(true); // true = User, false = Trainer

  // Handle message send
  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const message = {
        id: messages.length + 1,
        text: newMessage,
        sender: isUser ? 'User' : 'Trainer',
      };

      setMessages((prevMessages) => [...prevMessages, message]);
      setNewMessage('');
      setIsUser(!isUser); // Toggle between user and trainer after each message
    }
  };

  return (
    <MDBCard>
      <MDBCardHeader className="text-center">
        <h5>Live Chat</h5>
      </MDBCardHeader>
      <MDBCardBody>
        {/* Chat message display */}
        <MDBListGroup flush>
          {messages.map((msg) => (
            <MDBListGroupItem
              key={msg.id}
              className={msg.sender === 'User' ? 'text-end' : 'text-start'}
              style={{ backgroundColor: msg.sender === 'User' ? '#e3f2fd' : '#fff3e0' }}
            >
              <strong>{msg.sender}:</strong> {msg.text}
            </MDBListGroupItem>
          ))}
        </MDBListGroup>

        {/* Message input field */}
        <MDBInput
          label="Type a message"
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          fullWidth
        />
        <div className="d-flex justify-content-end mt-3">
          <MDBBtn color="primary" onClick={handleSendMessage}>
            Send
          </MDBBtn>
        </div>
      </MDBCardBody>
    </MDBCard>
  );
};

export default ChatBox;
