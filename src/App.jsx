/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect } from 'react';
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict';

import './reset.css';
import './App.css';

function App() {
  const home = 0;
  const construction = window.innerHeight;
  const what = window.innerHeight * 2;
  const contact = window.innerHeight * 3;

  const [isBlack, setIsBlack] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const [isUnderline, setIsUnderline] = useState('home');

  const scrollListener = () => {
    if (window.scrollY >= contact) {
      setIsBlack(true);
      setIsVisible(true);
      setIsUnderline('contact');
    } else if (window.scrollY >= what && window.scrollY < contact) {
      setIsBlack(false);
      setIsVisible(true);
      setIsUnderline('what');
    } else if (window.scrollY >= construction && window.scrollY < what) {
      setIsBlack(false);
      setIsVisible(true);
      setIsUnderline('construction');
    } else if (window.scrollY < construction) {
      setIsBlack(false);
      setIsVisible(false);
      setIsUnderline('home');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollListener);

    return () => window.removeEventListener('scroll', scrollListener);
  });

  // eslint-disable-next-line no-unused-vars
  const [time, setTime] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => setTime(Date.now()), 1000);
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div className="app">
      <header className="header" style={isBlack ? { color: '#000000' } : { color: '#f6f7f9' }}>
        <div className="header-logo">LANA</div>
        <nav className="menu">
          <ul className="menu-list">
            <li
              className={isUnderline === 'home' ? 'menu-underline' : ''}
              style={isBlack ? { '--bcolor': '#000000' } : { '--bcolor': '#f6f7f9' }}
              onClick={() => window.scrollTo(0, home)}>
              Home
            </li>
            <li
              className={isUnderline === 'construction' ? 'menu-underline' : ''}
              style={isBlack ? { '--bcolor': '#000000' } : { '--bcolor': '#f6f7f9' }}
              onClick={() => window.scrollTo(0, construction)}>
              Construction
            </li>
            <li
              className={isUnderline === 'what' ? 'menu-underline' : ''}
              style={isBlack ? { '--bcolor': '#000000' } : { '--bcolor': '#f6f7f9' }}
              onClick={() => window.scrollTo(0, what)}>
              What we Do
            </li>
            <li
              className={isUnderline === 'contact' ? 'menu-underline' : ''}
              style={isBlack ? { '--bcolor': '#000000' } : { '--bcolor': '#f6f7f9' }}
              onClick={() => window.scrollTo(0, contact)}>
              Contact
            </li>
          </ul>
        </nav>
      </header>
      <main className="main">
        <div
          className="social"
          style={isBlack ? { borderColor: '#000000' } : { borderColor: '#f6f7f9' }}>
          <a
            className="social-link"
            href="#"
            style={isBlack ? { color: '#000000' } : { color: '#f6f7f9' }}>
            <svg className="social-icon" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z"
              />
            </svg>
          </a>
          <a
            className="social-link"
            href="#"
            style={isBlack ? { color: '#000000' } : { color: '#f6f7f9' }}>
            <svg className="social-icon" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z"
              />
            </svg>
          </a>
          <a
            className="social-link"
            href="#"
            style={isBlack ? { color: '#000000' } : { color: '#f6f7f9' }}>
            <svg className="social-icon" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"
              />
            </svg>
          </a>
          <a
            className="social-link"
            href="#"
            style={isBlack ? { color: '#000000' } : { color: '#f6f7f9' }}>
            <svg className="social-icon" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M9.04,21.54C10,21.83 10.97,22 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2A10,10 0 0,0 2,12C2,16.25 4.67,19.9 8.44,21.34C8.35,20.56 8.26,19.27 8.44,18.38L9.59,13.44C9.59,13.44 9.3,12.86 9.3,11.94C9.3,10.56 10.16,9.53 11.14,9.53C12,9.53 12.4,10.16 12.4,10.97C12.4,11.83 11.83,13.06 11.54,14.24C11.37,15.22 12.06,16.08 13.06,16.08C14.84,16.08 16.22,14.18 16.22,11.5C16.22,9.1 14.5,7.46 12.03,7.46C9.21,7.46 7.55,9.56 7.55,11.77C7.55,12.63 7.83,13.5 8.29,14.07C8.38,14.13 8.38,14.21 8.35,14.36L8.06,15.45C8.06,15.62 7.95,15.68 7.78,15.56C6.5,15 5.76,13.18 5.76,11.71C5.76,8.55 8,5.68 12.32,5.68C15.76,5.68 18.44,8.15 18.44,11.43C18.44,14.87 16.31,17.63 13.26,17.63C12.29,17.63 11.34,17.11 11,16.5L10.33,18.87C10.1,19.73 9.47,20.88 9.04,21.57V21.54Z"
              />
            </svg>
          </a>
        </div>
        <div
          className="toTop"
          style={isBlack ? { borderColor: '#000000' } : { borderColor: '#f6f7f9' }}>
          <a
            href="#"
            className="toTop-link"
            style={
              isVisible
                ? isBlack
                  ? { color: '#000000', visibility: 'visible', opacity: 1 }
                  : { color: '#f6f7f9', visibility: 'visible', opacity: 1 }
                : { visibility: 'hidden', opacity: 0 }
            }
            onClick={() => window.scrollTo(0, 0)}>
            <i className="toTop-arrow">&rsaquo;</i>
            <p className="toTop-text">Back to Top</p>
          </a>
        </div>
        <section className="home">
          <div className="home-text">
            <h1>We build brands and beautiful digital experiences.</h1>
            <button className="home-button">Learn more</button>
          </div>
          <div className="credits">&copy; 2018 Lana - All Rights Reserved</div>
        </section>
        <section className="timer">
          <div className="timer-time">
            <div className="timer-time-container">
              <div className="timer-time-container-date">
                {formatDistanceToNowStrict(new Date(2022, 6, 8), {
                  unit: 'day',
                  roundingMethod: 'floor',
                }).replace(/\D/g, '')}
              </div>
              <p className="timer-time-container-text">Days</p>
            </div>
            <div className="timer-time-container">
              <div className="timer-time-container-date">
                {formatDistanceToNowStrict(
                  new Date(
                    new Date().getFullYear(),
                    new Date().getMonth(),
                    new Date().getDate() + 1,
                  ),
                  { unit: 'hour', roundingMethod: 'floor' },
                ).replace(/\D/g, '')}
              </div>
              <p className="timer-time-container-text">Hours</p>
            </div>
            <div className="timer-time-container">
              <div className="timer-time-container-date">
                {formatDistanceToNowStrict(
                  new Date(
                    new Date().getFullYear(),
                    new Date().getMonth(),
                    new Date().getDate(),
                    new Date().getHours() + 1,
                  ),
                  { unit: 'minute', roundingMethod: 'floor' },
                ).replace(/\D/g, '')}
              </div>
              <p className="timer-time-container-text">Minutes</p>
            </div>
            <div className="timer-time-container">
              <div className="timer-time-container-date">
                {formatDistanceToNowStrict(
                  new Date(
                    new Date().getFullYear(),
                    new Date().getMonth(),
                    new Date().getDate(),
                    new Date().getHours(),
                    new Date().getMinutes() + 1,
                  ),
                  { unit: 'second', roundingMethod: 'floor' },
                ).replace(/\D/g, '')}
              </div>
              <p className="timer-time-container-text">Seconds</p>
            </div>
          </div>
          <h3 className="timer-text">
            Our website is under construction. We'll be here soon with our new awesome site.
          </h3>
          <button className="timer-button">Learn more</button>
        </section>
        <section className="whatWeDo">
          <article className="whatWeDo-text">
            <h2 className="whatWeDo-text-header">What we Do</h2>
            <p className="whatWeDo-text-paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero dolor eligendi quia
              necessitatibus cum, quam impedit recusandae corrupti nam quae perspiciatis. Obcaecati
              earum aliquid, atque repellat ullam minus itaque, quod quia reiciendis assumenda neque
              in voluptates ut maxime hic? Omnis!
            </p>
          </article>
          <article className="whatWeDo-iconContainer">
            <div className="whatWeDo-iconContainer-icons">
              <svg className="whatWeDo-iconContainer-icons-image" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M12,20A7,7 0 0,1 5,13A7,7 0 0,1 12,6A7,7 0 0,1 19,13A7,7 0 0,1 12,20M12,4A9,9 0 0,0 3,13A9,9 0 0,0 12,22A9,9 0 0,0 21,13A9,9 0 0,0 12,4M12.5,8H11V14L15.75,16.85L16.5,15.62L12.5,13.25V8M7.88,3.39L6.6,1.86L2,5.71L3.29,7.24L7.88,3.39M22,5.72L17.4,1.86L16.11,3.39L20.71,7.25L22,5.72Z"
                />
              </svg>
              <h4 className="whatWeDo-iconContainer-icons-name">Launch Quickly</h4>
            </div>
            <div className="whatWeDo-iconContainer-icons">
              <svg className="whatWeDo-iconContainer-icons-image" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M19.36,2.72L20.78,4.14L15.06,9.85C16.13,11.39 16.28,13.24 15.38,14.44L9.06,8.12C10.26,7.22 12.11,7.37 13.65,8.44L19.36,2.72M5.93,17.57C3.92,15.56 2.69,13.16 2.35,10.92L7.23,8.83L14.67,16.27L12.58,21.15C10.34,20.81 7.94,19.58 5.93,17.57Z"
                />
              </svg>
              <h4 className="whatWeDo-iconContainer-icons-name">Stylish Design</h4>
            </div>
            <div className="whatWeDo-iconContainer-icons">
              <svg className="whatWeDo-iconContainer-icons-image" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M21,5C19.89,4.65 18.67,4.5 17.5,4.5C15.55,4.5 13.45,4.9 12,6C10.55,4.9 8.45,4.5 6.5,4.5C4.55,4.5 2.45,4.9 1,6V20.65C1,20.9 1.25,21.15 1.5,21.15C1.6,21.15 1.65,21.1 1.75,21.1C3.1,20.45 5.05,20 6.5,20C8.45,20 10.55,20.4 12,21.5C13.35,20.65 15.8,20 17.5,20C19.15,20 20.85,20.3 22.25,21.05C22.35,21.1 22.4,21.1 22.5,21.1C22.75,21.1 23,20.85 23,20.6V6C22.4,5.55 21.75,5.25 21,5M21,18.5C19.9,18.15 18.7,18 17.5,18C15.8,18 13.35,18.65 12,19.5V8C13.35,7.15 15.8,6.5 17.5,6.5C18.7,6.5 19.9,6.65 21,7V18.5Z"
                />
              </svg>
              <h4 className="whatWeDo-iconContainer-icons-name">Well Documented</h4>
            </div>
            <div className="whatWeDo-iconContainer-icons">
              <svg className="whatWeDo-iconContainer-icons-image" viewBox="0 0 24 24">
                <path fill="currentColor" d="M2,2H16V16H2V2M22,8V22H8V18H18V8H22M4,4V14H14V4H4Z" />
              </svg>
              <h4 className="whatWeDo-iconContainer-icons-name">Multiple Styles</h4>
            </div>
            <div className="whatWeDo-iconContainer-icons">
              <svg className="whatWeDo-iconContainer-icons-image" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10M10,22C9.75,22 9.54,21.82 9.5,21.58L9.13,18.93C8.5,18.68 7.96,18.34 7.44,17.94L4.95,18.95C4.73,19.03 4.46,18.95 4.34,18.73L2.34,15.27C2.21,15.05 2.27,14.78 2.46,14.63L4.57,12.97L4.5,12L4.57,11L2.46,9.37C2.27,9.22 2.21,8.95 2.34,8.73L4.34,5.27C4.46,5.05 4.73,4.96 4.95,5.05L7.44,6.05C7.96,5.66 8.5,5.32 9.13,5.07L9.5,2.42C9.54,2.18 9.75,2 10,2H14C14.25,2 14.46,2.18 14.5,2.42L14.87,5.07C15.5,5.32 16.04,5.66 16.56,6.05L19.05,5.05C19.27,4.96 19.54,5.05 19.66,5.27L21.66,8.73C21.79,8.95 21.73,9.22 21.54,9.37L19.43,11L19.5,12L19.43,13L21.54,14.63C21.73,14.78 21.79,15.05 21.66,15.27L19.66,18.73C19.54,18.95 19.27,19.04 19.05,18.95L16.56,17.95C16.04,18.34 15.5,18.68 14.87,18.93L14.5,21.58C14.46,21.82 14.25,22 14,22H10M11.25,4L10.88,6.61C9.68,6.86 8.62,7.5 7.85,8.39L5.44,7.35L4.69,8.65L6.8,10.2C6.4,11.37 6.4,12.64 6.8,13.8L4.68,15.36L5.43,16.66L7.86,15.62C8.63,16.5 9.68,17.14 10.87,17.38L11.24,20H12.76L13.13,17.39C14.32,17.14 15.37,16.5 16.14,15.62L18.57,16.66L19.32,15.36L17.2,13.81C17.6,12.64 17.6,11.37 17.2,10.2L19.31,8.65L18.56,7.35L16.15,8.39C15.38,7.5 14.32,6.86 13.12,6.62L12.75,4H11.25Z"
                />
              </svg>
              <h4 className="whatWeDo-iconContainer-icons-name">Fully Customizable</h4>
            </div>
            <div className="whatWeDo-iconContainer-icons">
              <svg className="whatWeDo-iconContainer-icons-image" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M18.72,14.76C19.07,13.91 19.26,13 19.26,12C19.26,11.28 19.15,10.59 18.96,9.95C18.31,10.1 17.63,10.18 16.92,10.18C13.86,10.18 11.15,8.67 9.5,6.34C8.61,8.5 6.91,10.26 4.77,11.22C4.73,11.47 4.73,11.74 4.73,12A7.27,7.27 0 0,0 12,19.27C13.05,19.27 14.06,19.04 14.97,18.63C15.54,19.72 15.8,20.26 15.78,20.26C14.14,20.81 12.87,21.08 12,21.08C9.58,21.08 7.27,20.13 5.57,18.42C4.53,17.38 3.76,16.11 3.33,14.73H2V10.18H3.09C3.93,6.04 7.6,2.92 12,2.92C14.4,2.92 16.71,3.87 18.42,5.58C19.69,6.84 20.54,8.45 20.89,10.18H22V14.67H22V14.69L22,14.73H21.94L18.38,18L13.08,17.4V15.73H17.91L18.72,14.76M9.27,11.77C9.57,11.77 9.86,11.89 10.07,12.11C10.28,12.32 10.4,12.61 10.4,12.91C10.4,13.21 10.28,13.5 10.07,13.71C9.86,13.92 9.57,14.04 9.27,14.04C8.64,14.04 8.13,13.54 8.13,12.91C8.13,12.28 8.64,11.77 9.27,11.77M14.72,11.77C15.35,11.77 15.85,12.28 15.85,12.91C15.85,13.54 15.35,14.04 14.72,14.04C14.09,14.04 13.58,13.54 13.58,12.91A1.14,1.14 0 0,1 14.72,11.77Z"
                />
              </svg>
              <h4 className="whatWeDo-iconContainer-icons-name">Friendly Support</h4>
            </div>
          </article>
        </section>
        <section className="contact">
          <article className="contact-text">
            <h2 className="contact-text-header">Contact Us</h2>
            <p className="contact-text-paragraph">
              Want to say hello? Want to know more about us? Give us a call or drop us an email and
              we will get back to you as soon as we can.
            </p>
          </article>
          <div className="contact-container">
            <article className="contact-icons">
              <div className="contact-icons-container">
                <svg className="contact-icons-container-image" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M17,19H7V5H17M17,1H7C5.89,1 5,1.89 5,3V21A2,2 0 0,0 7,23H17A2,2 0 0,0 19,21V3C19,1.89 18.1,1 17,1Z"
                  />
                </svg>
                <p className="contact-icons-container-text">+1 (234) 111-2233</p>
                <p className="contact-icons-container-text">+1 (234) 222-4455</p>
              </div>
              <div className="contact-icons-container">
                <svg className="contact-icons-container-image" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5M12,2A7,7 0 0,1 19,9C19,14.25 12,22 12,22C12,22 5,14.25 5,9A7,7 0 0,1 12,2M12,4A5,5 0 0,0 7,9C7,10 7,12 12,18.71C17,12 17,10 17,9A5,5 0 0,0 12,4Z"
                  />
                </svg>
                <p className="contact-icons-container-text">
                  69 Halsey st, New York, NY 10002, United States
                </p>
              </div>
              <div className="contact-icons-container">
                <svg className="contact-icons-container-image" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6M20 6L12 11L4 6H20M20 18H4V8L12 13L20 8V18Z"
                  />
                </svg>
                <p className="contact-icons-container-text">support@domain.com</p>
                <p className="contact-icons-container-text">hello@domain.com</p>
              </div>
            </article>
            <form className="contact-form" action="#" method="post">
              <input type="text" name="name" id="name" placeholder="Enter your name" required />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email address"
                required
              />
              <input type="text" name="subject" id="subject" placeholder="Subject (Optional)" />
              <textarea name="message" id="message" placeholder="Here goes your message" required />
              <button className="contact-form-submit" type="submit">
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;