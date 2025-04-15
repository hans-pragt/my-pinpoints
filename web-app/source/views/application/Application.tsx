// #region Imports

/* React */
import { RouterProvider } from 'react-router-dom';

/* Classnames */
import classnames from 'classnames';

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
    <div 
      className={classnames(
        'w-full h-screen', 
        'sm:pt-8', 
        'bg-linear-to-b from-[var(--primary-dark)] to-[var(--primary-light)]'
      )}
    >
      <div className='container mx-auto h-full rounded-t-xl flex flex-col bg-white drop-shadow-md'>
        <ApplicationHeader />
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

// #endregion Component