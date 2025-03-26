// #region Imports

/* React */
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

// #endregion Imports

// #region Application Root

ReactDOM
  .createRoot(document.getElementById('root')!)
  .render(
    <StrictMode>
      <div>Hello, World</div>
    </StrictMode>
  );

// #endreion Application root