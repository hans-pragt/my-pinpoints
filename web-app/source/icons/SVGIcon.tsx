// #region Imports

/* React */
import { cloneElement, memo, JSX } from 'react';

// #endregion Imports

// #region Properties

export interface IconProperties {
  className? : string;
  size? : number;
}

interface SVGIconProperties extends IconProperties {
  children : JSX.Element;
}

// #endregion Properties

// #region Component

export const SVGIcon = memo((properties : SVGIconProperties) => {
  const {
    children,
    className,
    size = 24
  } = properties;

  // #region CSS

  const classes = `mpp-icon ${className}`;

  // #endregion CSS

  return (
    cloneElement(
      children,
      {
        className: classes,
        size
      }
    )
  );
});

// #endregion Component