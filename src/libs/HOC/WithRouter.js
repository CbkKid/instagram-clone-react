import { createMemoryHistory } from 'history';
import React from 'react'
import { Router } from 'react-router-dom'

export default function WithRouter(Component){
    const WrappedComponent = ({...props}) => {
        const history = createMemoryHistory();
        return(
            <Router history={history}>
                <Component { ...props } />
            </Router>
        );

    }

    return WrappedComponent;
}
