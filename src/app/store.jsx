import { configureStore } from '@reduxjs/toolkit';
import checkboxSlice from '../features/input/checkboxSlice';
import authSlice from '../features/auth/authSlice';

const store = configureStore({
    devTools: true,
    reducer: {
        checkInput: checkboxSlice,
        auth: authSlice,
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
})

export default store;