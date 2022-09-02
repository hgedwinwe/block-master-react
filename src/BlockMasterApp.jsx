import { Provider } from 'react-redux';
import { AppRouter } from './router/AppRouter';
import { store } from './store';
import { ModalPage, ModalSearch } from './ui';

export const BlockMasterApp = () => {
  return (
    <Provider store={store}>
      <AppRouter />
      <ModalPage />
      <ModalSearch />
    </Provider>
  );
};
