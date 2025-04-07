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
    <div className='w-full h-screen pt-8 bg-slate-500'>
      <div className='container mx-auto h-full rounded-t-xl flex flex-col bg-slate-300'>
        <ApplicationHeader />
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

// #endregion Component