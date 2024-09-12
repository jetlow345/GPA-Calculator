// src/components/Content/Content.jsx
import React from 'react';
import { useUserContext } from '../UserContext/UserContext';
import { Button, Modal, Form } from 'react-bootstrap';
import './content.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export function Content() {
    const { userData } = useUserContext(); // Access user data from context
    const [cards, setCards] = React.useState([]);
    const [showModal, setShowModal] = React.useState(false);
    const [newSubject, setNewSubject] = React.useState('');
    const [newScore, setNewScore] = React.useState('');

    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => {
        setNewSubject('');
        setNewScore('');
        setShowModal(false);
    };

    const addCard = () => {
        if (newSubject.trim() && newScore.trim() && !isNaN(newScore)) {
            setCards([...cards, { subject: newSubject, score: parseFloat(newScore) }]);
            handleCloseModal();
        } else {
            alert('Please enter a valid subject and score.');
        }
    };

    const deleteCard = (index) => {
        setCards(cards.filter((_, i) => i !== index));
    };

    const handleClick = (cardNumber) => {
        alert(`Button ${cardNumber} clicked!`);
    };

    return (
        <div className="content">
            <div className="welcome-message">
                <h1>Welcome, {userData.name}!</h1>
                <p>Your GPA calculator that helps you ace your studies</p>
                <p>Location: {userData.location}</p>
                <p>Age: {userData.age}</p>
                <p>Objective: {userData.objective}</p>
                <p>University: {userData.university}</p>
                <p>Degree: {userData.degree}</p>
                <p>Scoring Goal: {userData.scoreGoal}</p>
            </div>

            <div className="card-container">
                {cards.map((card, index) => (
                    <div className="card" key={index}>
                        <div className="card-body">
                            <h5 className="card-title">{card.subject || `Card ${index + 1}`}</h5>
                            <p className="card-text">Predicted Score: {card.score !== undefined ? card.score.toFixed(2) : 'No score'}</p>
                            <button className="btn btn-primary" onClick={() => handleClick(index + 1)}>Click Me</button>
                            <button className="btn btn-danger ms-2" onClick={() => deleteCard(index)}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>

            <Button className="btn btn-secondary mt-3" onClick={handleShowModal}>
                Add Card
            </Button>

            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Enter Subject and Predicted Score</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formSubject">
                            <Form.Label>Subject</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter subject"
                                value={newSubject}
                                onChange={(e) => setNewSubject(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="formPredictedScore" className="mt-3">
                            <Form.Label>Predicted Score</Form.Label>
                            <Form.Control
                                type="number"
                                step="1"
                                placeholder="Enter predicted score"
                                value={newScore}
                                onChange={(e) => setNewScore(e.target.value)}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={addCard}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}