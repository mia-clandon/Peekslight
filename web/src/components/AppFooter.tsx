import Link from 'next/link';
import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const icon = require('../../../../../public/static/img/icons/feed-icon-28x28.png');

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
}));

function AppFooter(props: any) {
  const { className, ...other } = props;
  const classes = useStyles();

  return (
    <footer {...other} className={clsx('footer', classes.root, className)}>
      <Container style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <span className="text-muted">
            © 2021{' '}
            <a href="/" className="text-muted">
              RSS.app
            </a>
            <Link href="/terms">
              <a
                href="/terms"
                className="text-muted"
                style={{
                  float: 'none',
                  marginLeft: '40px',
                }}
              >
                Terms & Conditions
              </a>
            </Link>
            <Link href="/privacy">
              <a
                href="/privacy"
                className="text-muted"
                style={{
                  float: 'none',
                  marginLeft: '40px',
                }}
              >
                Privacy
              </a>
            </Link>
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Link href="/blog">
            <a href="/blog" className="text-muted">
              Blog
            </a>
          </Link>
          <a
            href="https://rss.app/feeds/1ReVxo5Q39E4GQ8k.xml"
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginLeft: '6px', marginTop: 3 }}
          >
            <img width="14" height="14" src={icon} alt="blog-rss-feed" />
          </a>
        </div>
      </Container>
    </footer>
  );
}

export default AppFooter;
