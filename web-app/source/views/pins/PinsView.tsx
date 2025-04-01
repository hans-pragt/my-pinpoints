// #region Imports

/* MPJ */
import { PinsToolbar } from './components/PinsToolbar';

// #endregion Imports

export function PinsView() {

  return (
    <div className='flex flex-col'>

      <PinsToolbar />

      {/* Pins */}
      <div className='flex-1 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 p-8'>

      </div>
    </div>
  );
}