// #region Imports

/* MPJ */
import { Button } from '@common-components';

// #endregion Imports

// #region Component

export function PinsToolbar() {

  return (
    <>
      <div className='bg-[#FFECDB] flex flex-row p-4'>

        <div className='flex-1' />

        {/* Add New Pin */}
        <Button
          label       = 'Add Pin'
        />

      </div>
    </>
  )
}

// #endregion Component