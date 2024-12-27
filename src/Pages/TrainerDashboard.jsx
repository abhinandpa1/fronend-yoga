import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap'; // Importing required components from react-bootstrap
import AddVideo from '../Components/AddVideo'; // Assuming AddVideo component is in the same directory
import TrainerProfile from '../Components/TrainerProfile'; // Trainer Profile Component
import ChatBox from '../Components/ChatBox'; // Assuming ChatBox component is available

function TrainerDashboard() {
  const [trainers, setTrainers] = useState([]);  // Assuming trainers data is fetched elsewhere
  const [chats, setChats] = useState([]); // Chat data
  const [reply, setReply] = useState(''); // To hold reply text
  const [selectedTrainer, setSelectedTrainer] = useState(null); // Selected trainer for profile view

  // Fetch trainer data when the component mounts (simulated here)
  useEffect(() => {
    // Fetch trainer data from an API or database
    const fetchedTrainers = [
      { id: 1, name: "Trainer 1", email: "trainer1@example.com", specialization: "Yoga" },
      { id: 2, name: "Trainer 2", email: "trainer2@example.com", specialization: "Pilates" },
    ];
    setTrainers(fetchedTrainers);
  }, []);

  const handleProfileClick = (trainer) => {
    setSelectedTrainer(trainer);
  };

  const handleReply = (event) => {
    event.preventDefault();
    console.log('Reply sent:', reply);
    setReply(''); // Clear reply input after submission
  };

  return (
    <div style={{ padding: '20px' }}>
     

      {/* Upload Video and Chat Sections - Aligned horizontally */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px' }}>
        {/* Upload Video Section */}
        <div style={{ flex: 1, marginRight: '20px' }}>
          <h2 style={{ marginBottom: '20px' }}>Upload Your Video</h2> <span><AddVideo /></span>
         
        </div>

        {/* Chat Section */}
        <div style={{ flex: 1 }}>
          <h3 style={{ marginBottom: '20px' }}>Chat Section</h3>
          <Button
            onClick={() => console.log('Open Chat Modal')} // Logic for opening chat goes here
            style={{
              padding: '10px 20px',
              backgroundColor: '#007BFF',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '16px',
            }}
          >
            Open Chat
          </Button>
        </div>
      </div>

      {/* Trainer Profile Section (View Profile Button Only) */}
      <section style={{ marginBottom: '30px' }}>
        <h3>Trainer Information</h3>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {trainers.map((trainer) => (
            <li key={trainer.id} style={{ marginBottom: '10px' }}>
              <div style={{ marginBottom: '10px' }}>
                <Button onClick={() => handleProfileClick(trainer)}>View Profile</Button>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Trainer Profile Section - Show Profile if selected */}
      {selectedTrainer && (
        <section style={{ marginBottom: '30px' }}>
          <TrainerProfile trainer={selectedTrainer} />
        </section>
      )}

      {/* Chat Information Section */}
      <section style={{ marginBottom: '30px' }}>
        <h3>Chat Information</h3>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {chats.map((chat) => (
            <li key={chat.id} style={{ marginBottom: '10px' }}>
              <h4>{chat.username}</h4>
              <p>{chat.message}</p>
              <form onSubmit={handleReply}>
                <input
                  type="text"
                  value={reply}
                  onChange={(event) => setReply(event.target.value)}
                  placeholder="Reply"
                  style={{
                    padding: '10px',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    fontSize: '14px',
                    marginBottom: '10px',
                    width: '80%',
                  }}
                />
                <button
                  type="submit"
                  style={{
                    padding: '10px 20px',
                    backgroundColor: '#007BFF',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '16px',
                  }}
                >
                  Send
                </button>
              </form>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default TrainerDashboard;













