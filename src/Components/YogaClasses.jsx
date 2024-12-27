import React, { useState } from 'react';
import { Modal, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';  // Import useNavigate for redirection


const YogaClasses = () => {
  const navigate = useNavigate(); // Hook for redirection
  const [show, setShow] = useState(false);
  const [selectedClass, setSelectedClass] = useState(null);
  
  // Maintain the user's payment status for advanced classes
  const [paymentStatus, setPaymentStatus] = useState(false);  // false means no payment made yet
  
  const [classes, setClasses] = useState({
    basicYoga: [
      {
        id: 1,
        title: 'Basic Yoga 1',
        description: 'Start your yoga journey with basic postures.',
        unlocked: true,
        videoLink: 'https://www.youtube.com/embed/Ppo3oPo4NYw',
        imageUrl: 'https://www.verywellfit.com/thmb/u_vQKupnmmijQcCb-46r3wO4MNw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Verywell-20-4023748-Cobra02-1739-5be4c972c9e77c0026e5b68e.jpg',
      },
      {
        id: 2,
        title: 'Basic Yoga 2',
        description: 'Beginner yoga for flexibility and relaxation.',
        unlocked: true,
        videoLink: 'https://www.youtube.com/embed/xyz-link-2',
        imageUrl: 'https://i.pinimg.com/originals/3c/2f/7d/3c2f7d1401016a1937138d1d21068812.jpg',
      },
    ],
    advancedYoga: [
      {
        id: 3,
        title: 'Advanced Yoga 1',
        description: 'Increase flexibility with advanced poses.',
        unlocked: false,
        videoLink: 'https://www.youtube.com/embed/xyz-link-3',
        imageUrl: 'https://www.thescottishsun.co.uk/wp-content/uploads/sites/2/2019/06/NINTCHDBPICT000471965716.jpg?strip=all&quality=100&w=1200&h=800&crop=1',
      },
      {
        id: 4,
        title: 'Advanced Yoga 2',
        description: 'Challenge your body and mind with intense yoga.',
        unlocked: false,
        videoLink: 'https://www.youtube.com/embed/xyz-link-4',
        imageUrl: 'https://github.com/WebDesignMastery/Yogalax_23-08-23/blob/main/assets/classes-2.jpg?raw=true',
      },
    ],
  });

  const handleClose = () => setShow(false);

  const handleShow = (yogaClass) => {
    setSelectedClass(yogaClass);
    setShow(true);
  };

  const handleUnlockPayment = (id, isAdvanced) => {
    // Redirect to payment page
    navigate('/paymentpage');
    // After payment is done, update the paymentStatus and unlock the advanced classes
    // In a real-world scenario, this would happen after the payment is confirmed.
    setPaymentStatus(true); // For now, we simulate payment completion
    unlockAdvancedClasses(id, isAdvanced); // Unlock the advanced class after payment
  };

  const unlockAdvancedClasses = (id, isAdvanced) => {
    if (isAdvanced) {
      setClasses((prevClasses) => ({
        ...prevClasses,
        advancedYoga: prevClasses.advancedYoga.map((cls) =>
          cls.id === id ? { ...cls, unlocked: true } : cls
        ),
      }));
    }
  };

  return (
    <div className="classes-section">
      <h3>Yoga Classes</h3>

      {/* Basic Yoga Section */}
      <h4>Basic Yoga</h4>
      <div className="row">
        {classes.basicYoga.map((cls) => (
          <div className="col-md-4 mb-4" key={cls.id}>
            <Card
              onClick={() => handleShow(cls)}
              style={{ width: '18rem' }}
              className="m-2"
            >
              <Card.Img
                variant="top"
                src={cls.imageUrl}
                alt={cls.title}
                style={{ objectFit: 'cover', height: '200px', width: '100%' }}
              />
              <Card.Body>
                <Card.Title>{cls.title}</Card.Title>
                <Card.Text>{cls.description}</Card.Text>
                {cls.unlocked ? (
                  <button onClick={() => handleShow(cls)}>Watch Now</button>
                ) : (
                  <button>Locked</button>
                )}
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>

      {/* Advanced Yoga Section */}
      <h4>Advanced Yoga</h4>
      <div className="row">
        {classes.advancedYoga.map((cls) => (
          <div className="col-md-4 mb-4" key={cls.id}>
            <Card
              onClick={() => handleShow(cls)}
              style={{ width: '18rem' }}
              className="m-2"
            >
              <Card.Img
                variant="top"
                src={cls.imageUrl}
                alt={cls.title}
                style={{ objectFit: 'cover', height: '200px', width: '100%' }}
              />
              <Card.Body>
                <Card.Title>{cls.title}</Card.Title>
                <Card.Text>{cls.description}</Card.Text>
                {cls.unlocked || paymentStatus ? (
                  <button onClick={() => handleShow(cls)}>Watch Now</button>
                ) : (
                  <button onClick={() => handleUnlockPayment(cls.id, true)}>
                    Unlock with Payment
                  </button>
                )}
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>

      {/* Modal for video */}
      {show && selectedClass && (
        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>{selectedClass.title || 'Yoga Class'}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="d-flex justify-content-center">
            <iframe
              width="560"
              height="315"
              src={selectedClass.videoLink}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="success" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default YogaClasses;




