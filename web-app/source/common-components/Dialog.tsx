// #region Imports

/* React */
import { ReactNode } from 'react';

/* Radix */
import * as RadixDialog from '@radix-ui/react-dialog'

/* Classnames */
import classnames from 'classnames';

// #endregion Imports

// #region Properties

interface DialogProperties {

  /**
   * Whether or not this dialog window is visible.
   */
  open? : boolean;

  /**
   * Called when the open status of this dialog window changes.
   * 
   * @param open The next desired state of this dialog.
   */
  onOpenChange : (open : boolean) => void;

  // #region Dialog Content

  /**
   * Shown at the top of the dialog window.
   */
  title? : ReactNode;

  /**
   * The content of the dialog window.
   */
  children? : ReactNode;

  // #endregion Dialog Content

}

// #endregion Properties

// #region Component

/**
 * A overlay shown on top of the window's content.
 */
export function Dialog(properties : DialogProperties) {

  const {
    // Dialog State
    open,
    onOpenChange,

    // Dialog Content
    title,
    children
  } = properties;


  return (
    <RadixDialog.Root
      open          = {open}
      onOpenChange  = {onOpenChange}
    >
      <RadixDialog.Portal>

        {/* Overlay */}
        <RadixDialog.Overlay
          className   = {classnames(
            'fixed inset-0 z-50',
            'bg-black/80', 
            'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0'
          )}
        />

        {/* Content */}
        <RadixDialog.Content
          className   = {classnames(
            'fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-50',
            'grid gap-4 w-full max-w-lg p-6',
            'bg-white shado-lg sm:rounded-lg',
            'duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-top-[48%]  data-[state=open]:slide-in-from-top-[48%]'
          )}
        >

          {/* Close */}
          <RadixDialog.Close 
            className   = {classnames(
              'absolute right-4 top-4',
              'disabled:pointer-events-none focus:outline-none' 
            )}
          >
            <span>close</span>
          </RadixDialog.Close>

          {/* Header */}
          <RadixDialog.Title 
            className='flex flex-col space-y-1.5 text-center sm:text-left'
          >
            {title}
          </RadixDialog.Title>

          {children}

        </RadixDialog.Content>

      </RadixDialog.Portal>
    </RadixDialog.Root>
  );
};

Dialog.displayName = 'Dialog';

// #endregion Component