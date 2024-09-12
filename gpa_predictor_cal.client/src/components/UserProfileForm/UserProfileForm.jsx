// src/components/UserProfileForm/UserProfileForm.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../UserContext/UserContext';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function UserProfileForm() {
    const { setUserData } = useUserContext(); // Access context to set user data
    const [formData, setFormData] = useState({
        name: '',
        university: '',
        degree: '',
        scoreGoal: '',
        age: '',
        location: '',
        objective: '',
    });

    const navigate = useNavigate(); // Hook to navigate programmatically

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setUserData(formData); // Update the context with form data
        navigate('/content'); // Navigate to content page
    };

    return (
        <div className="container mt-4">
            <h2>Enter Your Details</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="formUniversity">
                    <Form.Label>University</Form.Label>
                    <Form.Control
                        type="text"
                        name="university"
                        value={formData.university}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group controlId="formDegree">
                    <Form.Label>Degree</Form.Label>
                    <Form.Control
                        type="text"
                        name="degree"
                        value={formData.degree}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group controlId="formScoreGoal">
                    <Form.Label>Scoring Goal</Form.Label>
                    <Form.Control
                        type="text"
                        name="scoreGoal"
                        value={formData.scoreGoal}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group controlId="formAge">
                    <Form.Label>Age</Form.Label>
                    <Form.Control
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group controlId="formLocation">
                    <Form.Label>Location</Form.Label>
                    <Form.Control
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group controlId="formObjective">
                    <Form.Label>Objective</Form.Label>
                    <Form.Control
                        as="textarea"
                        name="objective"
                        value={formData.objective}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Button variant="primary" type="submit" className="mt-3">
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default UserProfileForm;