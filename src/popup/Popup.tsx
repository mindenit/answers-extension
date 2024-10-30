import React from 'react';
import styled from 'styled-components';
import HomeIcon from './component/HomeIcon';

const PopupContainer = styled.div`
  padding: 1rem;
  width: 200px;
  z-index: 9999;
  display: grid;
  gap: 0.625rem;
  grid-template-columns: 2fr auto;
  grid-template-areas:
    'title home'
    'content content'
    'links links';
  color: white;

  .home {
    grid-area: home;
    color: white;
    width: 50%;
    height: 50%;
  }

  h3 {
    margin: 0;
    grid-area: title;
  }

  p {
    margin: 0;
    grid-area: content;
  }

  a {
    color: white;
    text-decoration: none;
    width: 100%;
  }

  ul {
    grid-area: links;
    list-style: none;
    padding: 0;
    width: 100%;
  }

  li {
    display: flex;
    justify-content: center;
    margin: 0.5rem 0;
    width: 100%;
  }

  .button-link {
    display: inline-block;
    padding: 0.5rem 1rem;
    background-color: #111628;
    border: none;
    border-radius: 4px;
    text-align: center;
    text-decoration: none;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s;
    border: 1px solid #344050;
    width: 100%;

    &:hover {
      background-color: rgba(226, 230, 234, 0.5);
    }
  }
`;

export const Popup = () => {
  const link = 'https://answers.mindenit.org';

  return (
    <PopupContainer>
      <h3>Вітаємо вас у розширені Mindenit Answers!</h3>
      <p>Знаходьте відповіді ефективніше з нами! Зекономте час для більш важливих речей!❤️</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className="home">
        <HomeIcon />
      </a>

      <ul>
        <h3>Якщо маєте змогу нас підтримати, то будемо раді будь яким пожертвуванням😉</h3>
        <li>
          <a href="https://t.me/mindenit_support" className="button-link" target="_blank" rel="noopener noreferrer">
            Чат підтримки в телеграм 📨
          </a>
        </li>
        <li>
          <a href="https://send.monobank.ua/jar/2hMH9Gr7Dn" className="button-link" target="_blank" rel="noopener noreferrer">
            Монобанка 🐈
          </a>
        </li>
        <li>
          <a href="https://base.monobank.ua/DHfiSksgyjSYDT" className="button-link" target="_blank" rel="noopener noreferrer">
            Монобаза 💵
          </a>
        </li>
      </ul>
    </PopupContainer>
  );
};

export default Popup;