import { Provider } from 'react-redux';
import { AppRouter } from './router/AppRouter';
import { store } from './store';
import { ModalPage } from './ui';

export const BlockMasterApp = () => {
  return (
    <Provider store={store}>
      <AppRouter />
      <ModalPage />
    </Provider>
  );
};
