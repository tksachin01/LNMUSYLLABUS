/**
 * @file main.tsx
 * @description Application bootstrap entry point.
 * Mounts the root React component tree inside React StrictMode.
 */

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// ============================================================================
// React Root Initialization
// ============================================================================
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Failed to find root DOM element with id "root".');
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);


