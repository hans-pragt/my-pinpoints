// #region Imports

/* React */
import { HTMLAttributes } from 'react';

/* Classnames */
import classnames from 'classnames';
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
        className = 'w-full p-3 rounded-lg bg-[#AFDDFF]'
        type      = 'text'
      />

      <SearchIcon
        className='text-white text-5xl absolute right-2 top-1/2 -translate-y-1/2'
        size={32}
      />

    </div>
  );
}