// #region Imports

/* React */
import { ButtonHTMLAttributes, ReactNode } from 'react';

/* Classnames */
import classnames from 'classnames';

// #endregion Imports

// #region Properties

interface ButtonProperties extends ButtonHTMLAttributes<HTMLButtonElement> {

  label : string;

  // #region Icon

  /**
   * An optional icon to display before the label.
   */
  icon? : ReactNode;

  // #endregion Icon

}

// #endregion Properties

// #region Component

export function Button(properties : ButtonProperties) {
  const {
    label,
    icon,

    className,
    ...buttonProperties
  } = properties;

  return (
    <button
      {...buttonProperties}
      className={classnames(
        'flex flex-row gap-2 items-center',
        'px-4 py-2 rounded-lg',
        'font-medium text-[#FFECDB]',
        'bg-[#FF9149] hover:bg-blue-400',
        className
      )}
    >
      {icon}
      {label}
    </button>
  );
}

Button.displayName = 'Button';

// #endregion Component