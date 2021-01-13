import React from 'react';

const PicturadesContext = React.createContext({
  toggleUserLoggedIn: () => {},
  isLoggedIn: false,
});

export default PicturadesContext;

