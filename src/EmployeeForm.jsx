   
import React, { useState } from 'react';

function EmployeeForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [position, setPosition] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        alert(
            `Employee Registered!\n\nName: ${name}\nEmail: ${email}\nPosition: ${position}`
        );

        setName('');
        setEmail('');
        setPosition('');
    };

    return (
        <div>
            <h2>Employee Registration Form</h2>

            <form onSubmit={handleSubmit}>

                <label>Employee Name:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />

                <br /><br />

                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <br /><br />

                <label>Position:</label>
                <input
                    type="text"
                    value={position}
                    onChange={(e) => setPosition(e.target.value)}
                    required
                />

                <br /><br />

                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default EmployeeForm;
