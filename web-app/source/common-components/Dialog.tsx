// #region Imports

/* React */
import { ReactNode } from 'react';

/* Radix */
import * as RadixDialog from '@radix-ui/react-dialog'

/* Classnames */
import classnames from 'classnames';
import { CloseIcon } from 'icons';

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
            'grid gap-4 w-full max-w-lg',
            'bg-white shadow-lg sm:rounded-xl',
            'duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-top-[48%]'
          )}
        >

          {/* Close */}
          <RadixDialog.Close 
            className   = {classnames(
              'absolute right-5 top-5',
              'disabled:pointer-events-none focus:outline-none'
            )}
          >
            <CloseIcon 
              className = {classnames(
                'rounded-full p-1', 
                'text-[var(--secondary-light)]',
                'bg-[var(--secondary-dark)] hover:bg-[var(--secondary-dark)]/80 text-white'
              )}
              size={36} 
            />
          </RadixDialog.Close>

          {/* Header */}
          <RadixDialog.Title 
            className={classnames(
              'flex flex-col p-6', 
              'bg-[var(--secondary-light)] sm:rounded-t-xl',
              'text-center sm:text-left'
            )}
          >
            {title}
          </RadixDialog.Title>

          <div className='p-6'>
            {children}
          </div>

        </RadixDialog.Content>

      </RadixDialog.Portal>
    </RadixDialog.Root>
  );
};

Dialog.displayName = 'Dialog';

// #endregion Component