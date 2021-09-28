import { InputSection } from '../../components/InputSection';
import logout from '../../img/logout.svg';

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
            <section className='favoritesSection'>favoritesSection</section>
          </section>
          <section className='mainContent'>mainContent</section>
        </section>
      </main>
    </>
  );
}

export { AuthenticatedScreenView };