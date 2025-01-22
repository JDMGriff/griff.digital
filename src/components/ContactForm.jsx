import { useState } from 'react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

const ContactForm = () => {
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');    
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        message: '',
        honeypot: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.honeypot) {
            return; // Silently ignore the submission
        }

        if (!formData.firstname || !formData.lastname || !formData.email || !formData.phone) {
            setErrorMessage('Please fill out all required fields.');
            setSuccessMessage('');
            return;
        }

        const response = await fetch('https://formspree.io/f/xyzzqokd', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
    
        if (response.ok) {
            setSuccessMessage('Email sent successfully');
            setErrorMessage('');
        } else {
            setErrorMessage('Failed to send email');
            setSuccessMessage('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className='flex items-center justify-between'>
                {successMessage && <p className="text-green-500 mb-4 p-4 border border-green-500 w-full text-center">{successMessage}</p>}
                {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
            </div>
            <h2 className='text-2xl uppercase font-semibold mb-6'>Get in Touch</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input name="firstname" type="text" placeholder="First Name" value={formData.firstname} onChange={handleChange} required/>
                <Input name="lastname" type="text" placeholder="Last Name" value={formData.lastname} onChange={handleChange} required/>
                <Input name="email" type="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required/>
                <Input name="phone" type="tel" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required/>
                {/* Honeypot */}
                <input type="text" name="honeypot" style={{ display: 'none' }} value={formData.honeypot} onChange={handleChange} />
            </div>
            <Textarea
                name="message"
                className="h-[200px] mt-6"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
            />
            <button className='bg-[--accent] text-[--background] font-semibold mt-8 py-4 px-12 rounded' type="submit">Send</button>
        </form>
    );
};

export default ContactForm;