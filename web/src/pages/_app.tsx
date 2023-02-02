// import theme from "../theme";
// import {ThemeProvider} from "@material-ui/core";
//
// function MyApp({ Component, pageProps }: any) {
//   return (
//     <ThemeProvider theme={theme}>
//       {/*<CSSReset />*/}
//       <Component {...pageProps} />
//     </ThemeProvider>
//   );
// }
//
// export default MyApp;
import {ThemeProvider, unstable_createMuiStrictModeTheme} from '@material-ui/core/styles';

const theme = unstable_createMuiStrictModeTheme();

function MyApp({ Component, pageProps }: any) {
    return (
        <ThemeProvider theme={theme}>
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default MyApp;
