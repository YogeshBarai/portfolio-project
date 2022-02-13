import React, { useState } from 'react';

const ReachMe = () => {
    const [successMessage, toggleMessageSent] = useState();

    const handleSubmit = (e) => {
        e.preventDefault()
        const { name, mobile, email, message } = e.target.elements;

        console.log({ name, mobile, email, message })
        toggleMessageSent(true);
        e.target.name.value = ""
        e.target.mobile.value = ""
        e.target.email.value = ""
        e.target.message.value = ""
        return null;
    }
    return (
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    {!successMessage && <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label for="name" className="form-label">Name</label>
                            <input type="text" className="form-control" id="name" placeholder="Enter your name" />
                        </div>
                        <div className="mb-3">
                            <label for="mobile" className="form-label">Mobile #</label>
                            <input type="number" className="form-control" id="mobile" placeholder="Enter your mobile number" />
                        </div>
                        <div className="mb-3">
                            <label for="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" placeholder="Enter email address" />
                        </div>
                        <div className="mb-3">
                            <label for="message" className="form-label">Message</label>
                            <textarea className="form-control" id="message" rows="3"></textarea>
                        </div>
                        <div className="mb-3">
                            <button type="submit" className="btn btn-primary mb-3 float-end">Submit</button>
                        </div>
                    </form>}
                    {successMessage && <div className="mb-3 alert-primary" role="alert">Thank you for contacting me. I will get back as soon as possible!</div>}
                </div>
            </div>
        </div>
    );
}

export default ReachMe;