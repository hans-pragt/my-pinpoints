// #region Imports

/* React */
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

/* Tailwind */
import './styles/tailwind.css';

// #endregion Imports

// #region Application Root

ReactDOM
  .createRoot(document.getElementById('root')!)
  .render(
    <StrictMode>
      <div className="text-red-500">Hello, World</div>
    </StrictMode>
  );

// #endreion Application root