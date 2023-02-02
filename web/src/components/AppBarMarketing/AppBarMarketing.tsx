import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { fade, Theme } from '@material-ui/core/styles';
import Link from 'next/link';
import { useRouter } from 'next/router';
import clsx from 'clsx';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import Divider from '@material-ui/core/Divider';
import LogoBlock from '@rssapp/storybook/lab/DataDisplay/LogoBlock/LogoBlock';
import Cross from '@rssapp/storybook/icons/Cross';
import Button from '@rssapp/storybook/components/Inputs/Button/Button';
import Typography from '@rssapp/storybook/components/DataDisplay/Typography/Typography';
import AppBarLite from '@rssapp/storybook/lab/Surfaces/AppBarLite/AppBarLite';
import Avatar from '@rssapp/storybook/lab/DataDisplay/Avatar/Avatar';

const useStyles = makeStyles<Theme, {}>(
  (theme) => ({
    appBar: {
      fontFamily: 'Open Sans',
    },
    appBarContained: {
      background: '#00438B',
      boxShadow: 'none',
      '&& $signInBtn': {
        color: '#ffffff',
        borderColor: '#ffffff',

        '&.MuiButton-root:hover': {
          backgroundColor: `${fade('#ffffff', 0.15)} !important`,
        },
      },
      '& $link': {
        color: '#ffffff',
      },
      '& $linkSelected': {
        borderBottomColor: 'transparent',
      },
      '& $menu': {
        color: '#ffffff',
      },
      '& $avatar': {
        color: '#ffffff',
      },
    },
    withoutUser: {
      display: 'flex',
      alignItems: 'center',
      paddingTop: 10,
    },
    link: {
      padding: '16px 10px 16px 10px',
      marginRight: 20,
      textDecoration: 'none',
      color: '#424242',
      fontSize: 15,
      fontWeight: 600,
      fontFamily: 'Open Sans',
      '&:last-child': {
        marginRight: 0,
      },
    },
    linkSelected: {
      padding: '16px 10px 14px 10px',
      borderBottom: 'solid 2px #FF7C33',
    },
    signInBtn: {
      borderRadius: 4,
      '& > .MuiButton-label > .MuiTypography-root': {
        fontSize: 15,
        fontWeight: 600,
        fontFamily: 'Open Sans',
      },
      '&.MuiButton-sizeSmall': {
        padding: '3px 9px',
      },
    },
    logo: {
      paddingTop: 10,
      [theme.breakpoints.down('xs')]: {
        paddingTop: 0,
      },
    },
    logoWhite: {
      '& .MuiTypography-root': {
        color: '#ffffff',
      },
    },
    mobileSidebar: {
      '& > .MuiPaper-root': {
        background: '#00438B',
      },
    },
    mobileSidebarToolbar: {
      padding: '0 20px',
      justifyContent: 'space-between',
      borderBottom: '0.5px solid #FFFFFF',
    },
    mobileSidebarContent: {
      paddingTop: 20,
      height: 245,

      '& $divider': {
        display: 'block',
      },
      '& $withoutUser': {
        paddingTop: 0,
        flexDirection: 'column',

        '& $link': {
          color: '#ffffff',
          marginRight: 0,
          padding: '20px 10px',
        },
        '& $linkSelected': {
          borderBottom: 'none',
          padding: '20px 10px',
        },
        '& $signInBtn': {
          marginTop: 20,
          color: '#ffffff',
          borderColor: '#ffffff',

          '&.MuiButton-root:hover': {
            backgroundColor: `${fade('#ffffff', 0.15)} !important`,
          },
        },
      },
    },
    divider: {
      backgroundColor: '#ffffff',
      width: 24,
      display: 'none',
    },
    menu: {
      marginRight: -10,
      color: '#000000',
    },
    avatar: {
      width: 30,
      height: 30,
      margin: '-4px 0px',
      marginLeft: 10,
      color: '#424242',

      [theme.breakpoints.down('xs')]: {
        display: 'none',
      },
    },
  }),
  { name: 'AppBarMarketing' }
);

export interface AppBarMarketingProps {
  user?: boolean;
  userAvatar?: string;
  variant?: 'contained';
}

function AppBarMarketing(props: AppBarMarketingProps) {
  const { user, variant } = props;
  const router = useRouter();
  const classes = useStyles({});

  const { pathname } = router;

  const contained = variant === 'contained';
  const [openMobileSidebar, toggleMobileSidebar] = React.useState(false);

  const content = (
    <>
      {props.user ? (
        <div className={classes.withoutUser}>
          <Link href="/rss-feed">
            <Typography
              component="a"
              href="/rss-feed"
              variant="subtitle1"
              className={clsx(classes.link, { [classes.linkSelected]: pathname === '/new-rss-feed' })}
            >
              + NEW RSS
            </Typography>
          </Link>

          <Divider className={classes.divider} />

          <Link href="/myfeeds">
            <Typography
              component="a"
              href="/myfeeds"
              variant="subtitle1"
              className={clsx(classes.link, { [classes.linkSelected]: pathname === '/myfeeds' })}
              style={{ display: 'flex', alignItems: 'center', paddingRight: 0 }}
            >
              MY FEEDS
              <Avatar src={props.userAvatar} variant="circle" className={classes.avatar} />
            </Typography>
          </Link>
        </div>
      ) : (
        <div className={classes.withoutUser}>
          <Link href="/rss-feed">
            <Typography
              component="a"
              href="/rss-feed"
              variant="subtitle1"
              className={clsx(classes.link, { [classes.linkSelected]: pathname === '/rss-feed' })}
            >
              RSS FEEDS
            </Typography>
          </Link>

          {/*<Link href="/rss-widgets">*/}
          {/*  <Typography*/}
          {/*    component="a"*/}
          {/*    href="/rss-widgets"*/}
          {/*    variant="subtitle1"*/}
          {/*    className={clsx(classes.link, { [classes.linkSelected]: pathname === '/rss-widgets' })}*/}
          {/*  >*/}
          {/*    RSS WIDGETS*/}
          {/*  </Typography>*/}
          {/*</Link>*/}

          <Divider className={classes.divider} />

          <Link href="/blog">
            <Typography
              component="a"
              href="/blog"
              variant="subtitle1"
              className={clsx(classes.link, { [classes.linkSelected]: pathname === '/blog' })}
            >
              BLOG
            </Typography>
          </Link>

          <Divider className={classes.divider} />

          <Hidden smUp implementation="css">
            <Link href="/signin">
              <Button
                component="a"
                href="/signin"
                className={classes.signInBtn}
                size="small"
                variant="outlined"
                color="secondary"
              >
                <Typography variant="subtitle1">SIGN IN</Typography>
              </Button>
            </Link>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Link href="/signin">
              <Button
                component="a"
                href="/signin"
                className={classes.signInBtn}
                size="small"
                variant={contained ? 'outlined' : 'contained'}
                color="secondary"
              >
                <Typography variant="subtitle1">SIGN IN</Typography>
              </Button>
            </Link>
          </Hidden>
        </div>
      )}
    </>
  );

  return (
    <AppBarLite
      classes={{ logo: clsx(classes.logo, { [classes.logoWhite]: contained }) }}
      className={clsx(classes.appBar, { [classes.appBarContained]: contained })}
      user={user}
      right={
        <>
          <Hidden xsDown implementation="css">
            {content}
          </Hidden>
          <Hidden smUp implementation="css">
            <IconButton className={classes.menu} onClick={() => toggleMobileSidebar(true)}>
              <Menu />
            </IconButton>

            <Drawer
              className={classes.mobileSidebar}
              anchor="top"
              open={openMobileSidebar}
              onClose={() => toggleMobileSidebar(false)}
            >
              <Toolbar className={classes.mobileSidebarToolbar}>
                <LogoBlock disablePadding className={classes.logoWhite} />
                <IconButton onClick={() => toggleMobileSidebar(false)} style={{ marginRight: -10, padding: 9 }}>
                  <Cross style={{ fontSize: 32, color: '#ffffff' }} />
                </IconButton>
              </Toolbar>
              <div className={classes.mobileSidebarContent}>{content}</div>
            </Drawer>
          </Hidden>
        </>
      }
    />
  );
}

export default AppBarMarketing;
