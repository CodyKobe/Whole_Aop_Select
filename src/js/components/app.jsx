import React from 'react';

import {Header} from './header.jsx';
import {Field}  from './field.jsx';
import {Footer} from './footer.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);

    }

    render(){
        return(
            <div className="global">
                <Header />
                <Field />
                <Footer />
            </div>
        )
    }
}

export {App}
