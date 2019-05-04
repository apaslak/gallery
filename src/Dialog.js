import React from 'react';
import Modal from 'react-modal';

const Dialog = (props) => {
  const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

  if (props.isOpen) {
    return (
      <Modal
        isOpen={props.isOpen}
        style={customStyles}
        appElement={document.getElementById('root')}
      >
        {props.children}
      </Modal>
    );
  } else {
    return null;
  }
}

export default Dialog;
