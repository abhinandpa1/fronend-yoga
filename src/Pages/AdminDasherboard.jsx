import React, { useState } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Importing Link from React Router

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard py-5">
      <Container>
        <h2 className="text-center mb-4">Admin Dashboard</h2>

        <Row className="justify-content-center">
          <Col sm={12} md={6} lg={4} className="mb-3">
            {/* Link to Trainer Dashboard page */}
            <Link to="/trainer-dashboard">
              <Button 
                variant="primary" 
                size="lg" 
                block>
                View Trainer Dashboard
              </Button>
            </Link>
          </Col>
          <Col sm={12} md={6} lg={4} className="mb-3">
            {/* Link to User Dashboard page */}
            <Link to="/user-dashboard">
              <Button 
                variant="success" 
                size="lg" 
                block>
                View User Dashboard
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AdminDashboard;


