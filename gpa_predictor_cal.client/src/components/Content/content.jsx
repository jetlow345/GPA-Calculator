import React, { useState } from 'react';
import './content.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button, Form } from 'react-bootstrap';

export default function Content() {
    // State to manage cards, modal visibility, and the new subject and score
    const [cards, setCards] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [newSubject, setNewSubject] = useState('');
    const [newScore, setNewScore] = useState('');

    // Function to handle showing the modal
    const handleShowModal = () => setShowModal(true);

    // Function to handle hiding the modal
    const handleCloseModal = () => {
        setNewSubject('');
        setNewScore('');
        setShowModal(false);
    };

    // Function to handle adding a new card with a subject and predicted score
    const addCard = () => {
        if (newSubject.trim() && newScore.trim() && !isNaN(newScore)) {
            setCards([...cards, { subject: newSubject, score: parseFloat(newScore) }]);
            handleCloseModal();
        } else {
            alert('Please enter a valid subject and score.');
        }
    };

    // Function to handle deleting a card
    const deleteCard = (index) => {
        setCards(cards.filter((_, i) => i !== index));
    };

    // Function to handle button click
    const handleClick = (cardNumber) => {
        alert(`Button ${cardNumber} clicked!`);
    };

    return (
        <div className="content">
            <div className="welcome-message">
                <h1>Welcome James!</h1>
                <p>Your GPA calculator that ace</p>
            </div>
            <div className="card-container">
                {cards.map((card, index) => (
                    <div className="card" key={index}>
                        <div className="card-body">
                            <h5 className="card-title">{card.subject || `Card ${index + 1}`}</h5>
                            <p className="card-text">Predicted Score: {card.score !== undefined ? card.score.toFixed(2) : 'No score'}</p>
                            <button
                                className="btn btn-primary"
                                onClick={() => handleClick(index + 1)}
                            >
                                Click Me
                            </button>
                            <button
                                className="btn btn-danger ms-2"
                                onClick={() => deleteCard(index)}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <Button className="btn btn-secondary mt-3" onClick={handleShowModal}>
                Add Card
            </Button>

            {/* Modal for entering subject and predicted score */}
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
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={addCard}>
                        Add Card
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}