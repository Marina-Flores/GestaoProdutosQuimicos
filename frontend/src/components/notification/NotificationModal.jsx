import React from 'react';

const NotificationModal = ({ message, success }) => {
  const modalStyle = {
    position: 'fixed',
    top: '20px',
    right: '20px',
    padding: '15px',
    borderRadius: '5px',
    color: 'white',
    zIndex: 1000,
    opacity: 0.9,
  };

  const successStyle = {
    backgroundColor: 'green',
  };

  const errorStyle = {
    backgroundColor: 'red',
  };

  const getStyle = success ? successStyle : errorStyle;

  return (
    <div style={{ ...modalStyle, ...getStyle }}>
      {message}
    </div>
  );
};

export default NotificationModal;
