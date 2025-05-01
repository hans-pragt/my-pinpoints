// #region Imports

/* React */
import { createBrowserRouter, Navigate } from 'react-router-dom';
import { MyPinsView } from 'views/my-pins/MyPinsView';

/* PinPoints */

// #endregion Imports

const router = createBrowserRouter([

  // Default Route
  {
    path: '/',
    element: <Navigate to="/my-pins" />
  },

  // #region Pins

  {
    path: '/my-pins',
    element: <MyPinsView />
  }

  // #endregion Pins

]);

export { router };