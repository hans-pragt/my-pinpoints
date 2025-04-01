// #region Imports

/* Pin Atlas */
import { ApplicationHeader } from './components/ApplicationHeader';

// #endregion Imports

export function Application() {
  return (
    <div className='w-full h-screen pt-8 bg-slate-500'>
      <div className='container mx-auto h-full rounded-t-xl flex flex-col bg-slate-300'>

        <ApplicationHeader />

      </div>
    </div>
  );
}