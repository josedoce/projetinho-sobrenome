import 'bootstrap/dist/css/bootstrap.min.css'
import Routes from './routes';
import {Provider as ReduxProvider} from 'react-redux';
import store from './store';

function App() {
  return (
    <ReduxProvider store={store}>
      <Routes/>
    </ReduxProvider>
  );
}

export default App;
