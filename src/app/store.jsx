import { configureStore } from '@reduxjs/toolkit';
import checkboxSlice from '../features/input/checkboxSlice';

const store = configureStore({
    devTools: true,
    reducer: {
        checkInput: checkboxSlice,
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
})

export default store;