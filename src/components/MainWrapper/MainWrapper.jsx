import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navigation from '../Navigation/Navigation';

function MainWrapper() {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <Outlet />
      </main>
      <ToastContainer />
    </>
  );
}

export default MainWrapper;
