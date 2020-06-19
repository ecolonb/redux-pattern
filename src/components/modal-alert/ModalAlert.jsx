import React from 'react';
import './styles.css';

export default ({ message, show, setModalData }) => {
  if (!show) {
    return false;
  }
  return (
    <div className='modal-container'>
      <div className='form-modal'>
        <div className='close-section'>
          <button
            onClick={() => {
              setModalData({ message: 'Close', show: false });
            }}
          >
            Close
          </button>
        </div>
        <div className='modal-content'>{message && <p>{message}</p>}</div>
      </div>
    </div>
  );
};
