// #region Imports

/* React */
import { createBrowserRouter, Navigate } from 'react-router-dom';

/* MPJ */
import { PinsView } from '../views/pins/PinsView';

// #endregion Imports

const router = createBrowserRouter([

  // Default Route
  {
    path: '/',
    element: <Navigate to="/pins" />
  },

  // #region Pins

  {
    path: '/pins',
    element: <PinsView />
  }

  // #endregion Pins

]);

export { router };