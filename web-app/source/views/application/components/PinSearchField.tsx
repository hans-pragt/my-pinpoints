// #region Imports

/* React */
import { HTMLAttributes } from 'react';

/* Classnames */
import classnames from 'classnames';

/* PinPoints */
import { SearchIcon } from 'icons';

// #endregion Imports

// #region Properties

interface PinSearchFieldProperties extends HTMLAttributes<HTMLDivElement> {

}

// #endregion Properties

// #region Component

export function PinSearchField(properties : PinSearchFieldProperties) {

  const {
    className,
    ...htmlDivProperties
  } = properties;

  return (
    <div 
      {...htmlDivProperties}
      className={classnames('relative', className)}
    >

      {/* Search */}
      <input
        className = 'w-full p-1 rounded-lg border-4 border-[var(--primary-dark)]'
        type      = 'text'
      />

      <SearchIcon
        className='text-[var(--primary-dark)] absolute right-4 top-1/2 -translate-y-1/2'
        size={24}
      />

    </div>
  );
}