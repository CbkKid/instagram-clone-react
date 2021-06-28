import configureStore from 'redux-mock-store';

export default (initialState,middlewares) => {

    const mockStore = middlewares ? configureStore(middlewares) : configureStore();
    const store = mockStore(initialState);
    const origDispatch = store.dispatch
    store.dispatch = jest.fn(origDispatch);

    return store;

}
