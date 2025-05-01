// #region Imports

/* PinPoints */
import { Button } from '@common-components';
import { AddIcon } from 'icons';

// #endregion Imports

// #region Component

export function PinsToolbar() {

  return (
    <>
      <div className='bg-[#FFECDB] flex flex-row p-4'>

        <div className='flex-1' />

        {/* Add New Pin */}
        <Button
          className   = 'text-sm'
          label       = 'Add Pin'
          icon        = {<AddIcon size={24}  />}
          kind        = 'secondary'
        />

      </div>
    </>
  );
};

PinsToolbar.displayName = 'PinsToolbar';

// #endregion Component