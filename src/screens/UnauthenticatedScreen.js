import { Dialog } from '../components/Dialog';

function UnauthenticatedScreen() {
  return (
    <main>
      <div className='authContainer'>
        <Dialog />
      </div>
    </main>
  );
}

export { UnauthenticatedScreen };
