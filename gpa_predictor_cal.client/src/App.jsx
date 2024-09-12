import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Topbar } from './components/Topbar/topbar';
import { Content } from './components/Content/content';
import { Footer } from './components/Footer/footer';
import UserProfileForm from './components/UserProfileForm/UserProfileForm'; // Import the UserProfileForm component
import { UserProvider } from './components/UserContext/UserContext'; // Import UserContext to manage shared state

function App() {
    return (
        <UserProvider> {/* Wrap with UserProvider to manage shared state */}
            <Router>
                <Topbar />
                {/* Define routes for the different pages */}
                <Routes>
                    {/* Route for user profile form */}
                    <Route path="/" element={<UserProfileForm />} />

                    {/* Route for content after user enters information */}
                    <Route path="/content" element={<Content />} />

                    {/* Redirect any undefined routes back to the user profile form */}
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
                <Footer />
            </Router>
        </UserProvider>
    );
}

export default App;