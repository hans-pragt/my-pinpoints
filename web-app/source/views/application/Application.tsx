// #region Imports

/* React */
import { RouterProvider } from 'react-router-dom';

/* PinPoints */
import { ApplicationHeader } from './components/ApplicationHeader';
import { router } from '@routes';

// #endregion Imports

// #region Component

/**
 * Contains the application.
 */
export function Application() {
  return (
    <div className='w-full h-screen pt-8 bg-[#60B5FF]'>
      <div className='container mx-auto h-full rounded-t-xl flex flex-col bg-white drop-shadow-md'>
        <ApplicationHeader />
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

// #endregion Component