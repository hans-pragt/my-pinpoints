// #region Imports

/* PinPoints */
import { PinsGrid } from './components/PinsGrid';
import { PinsToolbar } from './components/PinsToolbar';

// #endregion Imports

// #region Component

/**
 * This view will show all the pins of the user that is logged in, and allow that
 * user to add, edit, or remove pins that are part of their collection.
 */
export function MyPinsView() {

  return (
    <div className='flex flex-col'>

      {/* Toolbar */}
      <PinsToolbar />

      {/* Pins */}
      <PinsGrid />

    </div>
  );

};

MyPinsView.displayName = 'MyPinsView';

// #endregion Component