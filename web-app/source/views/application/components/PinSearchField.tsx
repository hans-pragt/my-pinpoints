// #region Imports

/* React */
import { HTMLAttributes } from 'react';

/* Classnames */
import classnames from 'classnames';

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

      <input
        className = 'w-full p-3 rounded-lg bg-[#AFDDFF]'
        type      = 'text'
      />
    </div>
  );
}