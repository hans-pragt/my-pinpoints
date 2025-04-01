// #region Imports

/* React */
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

/* Tailwind */
import './styles/tailwind.css';

/* Pin Atlas */
import { Application } from './views/application/Application';

// #endregion Imports

// #region Application Root

ReactDOM
  .createRoot(document.getElementById('root')!)
  .render(
    <StrictMode>
      <Application />
    </StrictMode>
  );

// #endreion Application root