import React from 'react';

import { Link } from 'react-router-dom';

import Logo from '../../../public/assets/fox_library_logo.svg';
import StartPageStyle from './style';

const StartPage = () => {
  const classes = StartPageStyle();
  return (
    <div className={classes.wrapper}>
      <header className={classes.header}>
        <Link to='/'>
          <img src={Logo} alt='logo' />
        </Link>
        <label htmlFor='search'>
          <input
            type='text'
            id='search'
            placeholder='Search by author, title, name'
          />
        </label>

        <a href='#login'>Log in</a>
        <a href='#signin'>Sign up</a>
      </header>
      <main className={classes.main}>
        <div>BIld your library</div>
        <div>
          Over 400.000 books
          <br />
          from fiction to the
          <br />
          business literature
        </div>
        <button type='button'>Let`&apos`s start</button>
      </main>
    </div>
  );
};

export default StartPage;
