import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { FacebookIcon, TwitterIcon } from './icons';
import Login from './login';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.less';

function ShareButtons() {
  // We're not using the official sharing snippets because they inject third party Javascript
  return (
    <div className="share-buttons">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="//www.facebook.com/sharer.php?u=https://fitnesswallet.app/"
        className="social-sharing__link"
        title="Share on Facebook"
      >
        <FacebookIcon />
        <span aria-hidden="true">Share</span>
        <span className="visually-hidden">Share on Facebook</span>
      </a>
      {' '}
      <a
        target="_blank"
        href="//twitter.com/share?text=Check out this app for adding your Fitness SF Membership to Apple Wallet&url=https://fitnesswallet.app/"
        className="social-sharing__link"
        title="Tweet on Twitter"
        rel="noopener noreferrer"
      >
        <TwitterIcon />
        <span aria-hidden="true">Tweet</span>
        <span className="visually-hidden">Tweet on Twitter</span>
      </a>
    </div>
  );
}

function Layout({ children }: { children: React.ReactNode }) {
  const author = <a href="https://twitter.com/AlexKlarfeld">Alex Klarfeld</a>;

  return (
    <>
      <div className="content">
        <div>
          <div className="header">
            <h1 className="thing">Fitness SF Membership</h1>
            <h1>&rarr;</h1>
            <h1 className="thing">Apple Wallet</h1>
          </div>
          {children}
        </div>
      </div>
      <Login />
      <ShareButtons />

      <div className="footer">
        <div className="footer-inner">
          <p>
            This tool operates entirely on your device— your credentials are never
            transmitted to any server.
            {' '}
          </p>
          <p>
            This tool is not affiliated with FitnessSF or any staff.
          </p>
          <div>
            <p>
              Created by
              {' '}
              {author}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

async function main() {
  ReactDOM.render(<Layout><div /></Layout>, document.getElementById('root'));
}

main().catch((err) => alert(err));
