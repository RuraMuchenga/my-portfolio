import React, { useState } from 'react';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add form validation and submission logic here
        console.log('Form submitted:', { name, email, message });
    };

    return (
        <section id="contact">
            <div className="container">
                <h2>Contact Me</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Name:</label>
                        <input 
                            type="text" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                            required 
                        />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input 
                            type="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required 
                        />
                    </div>
                    <div>
                        <label>Message:</label>
                        <textarea 
                            value={message} 
                            onChange={(e) => setMessage(e.target.value)} 
                            required 
                        ></textarea>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;
