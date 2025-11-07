import React, { useState } from 'react';
import './Contact.css';

function Contact() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        comments: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('form submitted:', formData);
        setSubmitted(true);
        setTimeout(() => {
            setFormData({ firstName: '', lastName: '', email: '', comments: '' });
            setSubmitted(false);
        }, 3000);
    };

    return (
        <div className="contact-page">
            <div className="contact-container">
                <h1>Get in touch</h1>

                {submitted ? (
                    <div className="success">
                        <h2>Message sent</h2>
                        <p>we'll get back to you soon.</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="contact-form">
                        <div className="form-row">
                            <div className="form-field">
                                <label>First Name</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-field">
                                <label>Last Name</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-field">
                            <label>Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-field">
                            <label>Comments</label>
                            <textarea
                                name="comments"
                                value={formData.comments}
                                onChange={handleChange}
                                rows="5"
                                required
                            />
                        </div>

                        <button type="submit" className="submit-btn">Send Message</button>
                    </form>
                )}
            </div>
        </div>
    );
}

export default Contact;