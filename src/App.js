import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './AppRoutes';
import { HelmetProvider } from 'react-helmet-async';
import { ScrollToTop, PageLoadProgressBar } from './components';
import {Provider} from 'react-redux'
import {store} from './redux/store'

function App() {
  return (
    <HelmetProvider>
      <Provider store={store}>
        <BrowserRouter>
          <PageLoadProgressBar />
          {/* <ScrollToTop /> */}
          <AppRoutes />
        </BrowserRouter>
      </Provider>
    </HelmetProvider>
  );
}

export default App;
