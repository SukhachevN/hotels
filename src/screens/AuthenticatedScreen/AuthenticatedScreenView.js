import { Favourite } from '../../components/Favourite';
import { InputSection } from '../../components/InputSection';
import { MainContent } from '../../components/MainContent';
import logout from '../../img/icons/logout.svg';

function AuthenticatedScreenView({ onClick }) {
  return (
    <>
      <header className='header'>
        <h1 className='headerH1'>Simple Hotel Check</h1>
        <nav>
          <button className='logoutButton' onClick={onClick}>
            <p>Выйти</p>
            <img src={logout} alt='logout' />
          </button>
        </nav>
      </header>
      <main>
        <section className='mainSection'>
          <section className='rightBar'>
            <section className='inputSection'>
              <InputSection />
            </section>
            <section className='favoritesSection'>
              <Favourite />
            </section>
          </section>
          <section className='mainContent'>
            <MainContent />
          </section>
        </section>
      </main>
    </>
  );
}

export { AuthenticatedScreenView };
