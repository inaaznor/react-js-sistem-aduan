import React, { useState } from 'react';

const BorangAduan: React.FC = () => {
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    aduan: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Aduan Submitted:', formData);
    alert('Aduan anda telah dihantar!');
    setFormData({ nama: '', email: '', aduan: '' });
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Borang Aduan</h1>
      <form onSubmit={handleSubmit} style={{ maxWidth: '500px', margin: '0 auto' }}>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="nama" style={{ display: 'block', marginBottom: '5px' }}>Nama:</label>
          <input
            type="text"
            id="nama"
            name="nama"
            value={formData.nama}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '5px' }}
            required
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '5px' }}
            required
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="aduan" style={{ display: 'block', marginBottom: '5px' }}>Aduan:</label>
          <textarea
            id="aduan"
            name="aduan"
            value={formData.aduan}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '5px' }}
            rows={5}
            required
          />
        </div>
        <button
          type="submit"
          style={{
            backgroundColor: '#007BFF',
            color: '#fff',
            padding: '10px 15px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Hantar Aduan
        </button>
      </form>
    </div>
  );
};

export default BorangAduan;