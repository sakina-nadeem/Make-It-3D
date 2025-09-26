// components/ProductForm.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProductForm({ product, onClose, onSave }) {
  const [title, setTitle] = useState('');
  const [categories, setCategories] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [originalPrice, setOriginalPrice] = useState('');
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (product) {
      setTitle(product.title);
      setCategories(product.categories.join(', '));
      setDescription(product.description);
      setPrice(product.price);
      setOriginalPrice(product.originalPrice);
      setImagePreview(product.imageUrl);
    }
  }, [product]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Check if file is an image
      if (!file.type.startsWith('image/')) {
        alert('Please select an image file');
        return;
      }
      
      // Check file size (10MB max)
      if (file.size > 10 * 1024 * 1024) {
        alert('Image size must be less than 10MB');
        return;
      }
      
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData();
    formData.append('title', title);
    formData.append('categories', categories);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('originalPrice', originalPrice || price);
    
    if (image) {
      formData.append('image', image);
    }

    try {
      // Add authentication header
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': 'Bearer admin123'
        }
      };

      if (product) {
        // Update existing product
        await axios.put(`http://localhost:5000/api/admin/products/${product._id}`, formData, config);
      } else {
        // Create new product
        await axios.post('http://localhost:5000/api/admin/products', formData, config);
      }
      
      onSave();
      onClose();
    } catch (error) {
      console.error('Error saving product:', error);
      if (error.response) {
        alert(`Error: ${error.response.data.error || error.response.data.message}`);
      } else {
        alert('Error saving product. Please try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000
    }}>
      <div style={{
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '8px',
        width: '90%',
        maxWidth: '500px',
        maxHeight: '90vh',
        overflowY: 'auto',
      }}>
        <h3>{product ? 'Edit Product' : 'Add New Product'}</h3>
        
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '15px' }}>
            <label>Title: *</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              style={{ width: '100%', padding: '8px' }}
              required
            />
          </div>
          
          <div style={{ marginBottom: '15px' }}>
            <label>Categories (comma separated):</label>
            <input
              type="text"
              value={categories}
              onChange={(e) => setCategories(e.target.value)}
              style={{ width: '100%', padding: '8px' }}
              placeholder="e.g., Home Decor, Gadgets, Art"
            />
          </div>
          
          <div style={{ marginBottom: '15px' }}>
            <label>Description:</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              style={{ width: '100%', padding: '8px', minHeight: '80px' }}
            />
          </div>
          
          <div style={{ marginBottom: '15px' }}>
            <label>Price: *</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              style={{ width: '100%', padding: '8px' }}
              min="0"
              step="0.01"
              required
            />
          </div>
          
          <div style={{ marginBottom: '15px' }}>
            <label>Original Price (if on sale):</label>
            <input
              type="number"
              value={originalPrice}
              onChange={(e) => setOriginalPrice(e.target.value)}
              style={{ width: '100%', padding: '8px' }}
              min="0"
              step="0.01"
            />
          </div>
          
          <div style={{ marginBottom: '15px' }}>
            <label>Image: {!product && '(optional)'}</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              style={{ width: '100%', padding: '8px' }}
            />
            {imagePreview && (
              <div style={{ marginTop: '10px' }}>
                <img 
                  src={imagePreview.startsWith('data:') || imagePreview.startsWith('http') 
                    ? imagePreview 
                    : `http://localhost:5000${imagePreview}`} 
                  alt="Preview" 
                  style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                />
                <p style={{ fontSize: '12px', marginTop: '5px' }}>Image Preview</p>
              </div>
            )}
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <button 
              type="button" 
              onClick={onClose}
              disabled={isSubmitting}
              style={{
                padding: '10px 15px',
                background: '#ccc',
                color: 'black',
                border: 'none',
                borderRadius: '4px',
                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                opacity: isSubmitting ? 0.6 : 1
              }}
            >
              Cancel
            </button>
            <button 
              type="submit"
              disabled={isSubmitting}
              style={{
                padding: '10px 15px',
                background: '#514F6E',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                opacity: isSubmitting ? 0.6 : 1
              }}
            >
              {isSubmitting ? 'Saving...' : (product ? 'Update' : 'Add') + ' Product'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProductForm;