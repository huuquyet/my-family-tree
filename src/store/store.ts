import { configureStore } from '@reduxjs/toolkit';

import counterSlice from '../features/counter/counter';

export const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
});

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
