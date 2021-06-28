import App from './App';
import { renderWithState } from '../libs/TestUtils/renderWithState';
import initialState from './initialState';
import createMockStore from '../libs/TestUtils/createMockStore';
import WithRouter from '../libs/HOC/WithRouter';
import thunk from 'redux-thunk';

describe("App", () => {

    it("renders without crashing", () => {
        const middlewares = [thunk];
        const store = createMockStore(initialState,middlewares);
        const AppWithRouter = WithRouter(App);
        renderWithState(<AppWithRouter/>,{},store);
    });
    
})