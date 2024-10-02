import React, { useState } from 'react';
import axios from 'axios';
import '../Styles/BookAppointment.css'; // Import the CSS file

const BookAppointment = () => {
  const [formData, setFormData] = useState({
    customerName: '',
    petName: '',
    petType: '',
    appointmentDate: '',
    appointmentTime: '',
    groomingService: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/appointments', { appointment: formData });
      setMessage(response.data.message);
      setFormData({
        customerName: '',
        petName: '',
        petType: '',
        appointmentDate: '',
        appointmentTime: '',
        groomingService: '',
      });
    } catch (error) {
      setMessage('Failed to book appointment. Please try again.');
    }
  };

  return (
    <div className="appointment-form-container">
      <h2 className="form-title">Book a Pet Grooming Appointment</h2>
      <form onSubmit={handleSubmit} className="appointment-form">
        <div className="form-group">
          <label>Customer Name:</label>
          <input
            type="text"
            name="customerName"
            value={formData.customerName}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label>Pet Name:</label>
          <input
            type="text"
            name="petName"
            value={formData.petName}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label>Pet Type:</label>
          <select
            name="petType"
            value={formData.petType}
            onChange={handleChange}
            required
            className="form-select"
          >
            <option value="">Select Pet Type</option>
            <option value="Dog">Dog</option>
            <option value="Cat">Cat</option>
            <option value="Bird">Bird</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label>Appointment Date:</label>
          <input
            type="date"
            name="appointmentDate"
            value={formData.appointmentDate}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label>Appointment Time:</label>
          <input
            type="time"
            name="appointmentTime"
            value={formData.appointmentTime}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label>Grooming Service:</label>
          <select
            name="groomingService"
            value={formData.groomingService}
            onChange={handleChange}
            required
            className="form-select"
          >
            <option value="">Select Service</option>
            <option value="Full Groom">Full Groom</option>
            <option value="Bath & Brush">Bath & Brush</option>
            <option value="Nail Trim">Nail Trim</option>
          </select>
        </div>

        <button type="submit" className="submit-btn">Book Appointment</button>
      </form>

      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default BookAppointment;
