//============Before===========

// import { createStore } from 'redux';
// import { devToolsEnhancer } from '@redux-devtools/extension';
// import { rootReducer } from './reducer/reducer';

// const enhancer = devToolsEnhancer();

// export const store = createStore(rootReducer, enhancer);

//============After===========

import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './slice/contactsSlice';
import { filterReducer } from './slice/filterSplice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
