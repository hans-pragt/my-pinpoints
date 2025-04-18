// #region Imports

/* React */
import { ButtonHTMLAttributes, ReactNode } from 'react';

/* Classnames */
import classnames from 'classnames';

// #endregion Imports

// #region Properties

interface ButtonProperties extends ButtonHTMLAttributes<HTMLButtonElement> {

  // #region Properties

  /**
   * The text displayed inside the button.
   */
  label : string;

  /**
   * What colors the button will use.
   * 
   * @default 'primary'
   */
  kind : 'primary' | 'secondary';

  /**
   * An optional icon to display before the label.
   */
  icon? : ReactNode;

  // #endregion Properties

}

// #endregion Properties

// #region Component

export function Button(properties : ButtonProperties) {
  const {
    label,
    icon,
    kind = 'primary',

    className,
    ...buttonProperties
  } = properties;

  return (
    <button
      {...buttonProperties}
      className={classnames(
        'px-4 py-2 rounded-lg',
        'flex flex-row gap-2 items-center justify-center',
        'cursor-pointer',
        'font-(family-name:--serif-font)',
        kind === 'primary' ? 'text-white' : 'text-[var(--secondary-light)]',
        kind === 'primary' ? 'bg-[var(--primary-dark)]' : 'bg-[var(--secondary-dark)]',
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