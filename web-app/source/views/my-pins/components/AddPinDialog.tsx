// #region Imports

/* PinPoint */
import { Dialog } from '@common-components';

// #endregion Imports

// #region Properties

interface AddPinDialogProperties {

  open? : boolean;

  onOpenChange : (open : boolean) => void;

}

// #endregion Properties

// #region Component

export function AddPinDialog(properties : AddPinDialogProperties) {

  const {
    open,
    onOpenChange
  } = properties;

  return (
    <Dialog
      open          = {open}
      onOpenChange  = {onOpenChange}

      title         = "Add a Pin"
    >
      <div className='flex flex-col gap-4'>

        {/* Photo */}

        {/* Name */}

        {/* Tags */}

      </div>
    </Dialog>
  );

}

// #endregion Componnet