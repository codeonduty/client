// Message.js --- React component for message

// Libraries:

import React from 'react';
import { Alert } from 'react-bootstrap';

// Modules:

// None

// Code:

const Message = ({ variant, children }) => {
  return <Alert variant={variant}>{children}</Alert>;
};

Message.defaultProps = {
  variant: 'info',
};

export default Message;

// Message.js ends here
