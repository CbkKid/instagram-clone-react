import React from 'react';
import './AppLayout.css';

export default function AppLayout({header,body,footer}){
    return(
        <div className="appLayout">
            <div className="appHeader" data-test-id="test-example">{header}</div>
            <div className="appBody">{body}</div>
            <div className="appFooter">{footer}</div>
        </div>
    );
}
