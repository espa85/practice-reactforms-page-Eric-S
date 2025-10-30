import React, { useState } from "react";

function FeedbackForm() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        feedback: "",
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        alert("Thanks for feedback");
    }

    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <div className="form-row">
                    <label>Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} />
                </div>
                <br />
                <div className="form-row">
                    <label>Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} />
                </div>
                <br />
                <div className="form-row">
                    <label>Feedback</label>
                    <textarea type="text" name="feedback" maxLength="200" value={formData.feedback} onChange={handleChange} />
                </div>
                <br />
                <button type="submit">
                    Submit
                </button>
            </form>

            <div className="preview" onChange={handleChange}>
                <h2>Preview</h2>
                <div>Name:{formData.name || "-"}</div>
                <div>Email:{formData.email || "-"}</div>
                <div>Feedback:{formData.feedback || "-"}</div>
            </div>

        </div>
    )


}


export default FeedbackForm