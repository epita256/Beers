
import { Provider } from 'react-redux';
import GlobalStyle from '../styles/globalStyles'
import createReduxStore from '../service/store';

const store = createReduxStore();

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <GlobalStyle/>
      <Component {...pageProps} />
    </Provider>
  )
}