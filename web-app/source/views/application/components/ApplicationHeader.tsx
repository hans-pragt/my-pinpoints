// #region Imports

/* PinPoints */
import { Button } from '@common-components';
import { PinSearchField } from './PinSearchField';
import { UserIcon } from 'icons';

// #endregion Imports

// #region Component

export function ApplicationHeader() {
  return (
    <div 
      className='flex flex-row gap-4 p-4 rounded-t-lg bg-white'
    >

      {/* Application Icon */}

      {/* Search */}
      <PinSearchField 
        className   = 'flex-1'
      />

      {/* User */}
      <Button
        className = 'w-40'
        kind      = 'primary'
        label     = 'Sign In'
        icon      = {<UserIcon size={24} />}
      />

    </div>
  );
}

// #endregion Component