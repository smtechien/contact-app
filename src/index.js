import React from 'react';
import ContactApp from './components/ContactApp';
import { createRoot } from 'react-dom/client';

// styling

import './styles/style.css';

const root = createRoot(document.getElementById('root'));
root.render(<ContactApp />);