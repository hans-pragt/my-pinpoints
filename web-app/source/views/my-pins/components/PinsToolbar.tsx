// #region Imports

/* PinPoints */
import { Button } from '@common-components';
import { AddIcon } from 'icons';
import { useState } from 'react';
import { AddPinDialog } from './AddPinDialog';

// #endregion Imports

// #region Component

export function PinsToolbar() {

  const [pinDialogIsOpen, setPinDialogIsOpen] = useState<boolean>(false);

  return (
    <>
      <div className='bg-[#FFECDB] flex flex-row p-4'>

        <div className='flex-1' />

        {/* Add New Pin */}
        <Button
          label       = 'Add Pin'
          icon        = {<AddIcon size={24}  />}
          kind        = 'secondary'
          onClick     = {() => setPinDialogIsOpen(!pinDialogIsOpen)}
        />

      </div>

      <AddPinDialog
        open          = {pinDialogIsOpen}
        onOpenChange  = {open => setPinDialogIsOpen(open)}
      />
    </>
  );
};

PinsToolbar.displayName = 'PinsToolbar';

// #endregion Component