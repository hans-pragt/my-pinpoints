// #region Imports

/* PinPoints */
import { PinSearchField } from './PinSearchField';

// #endregion Imports

// #region Component

export function ApplicationHeader() {
  return (
    <div className='flex flex-row p-4 drop-shadow-md rounded-t-lg bg-slate-100 '>

      {/* Application Icon */}

      {/* Search */}
      <PinSearchField 
        className   = 'flex-1'
      />

      {/* User */}

    </div>
  );
}

// #endregion Component