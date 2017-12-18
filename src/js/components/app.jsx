import React from 'react';

import {Header} from './header.jsx';
import {About}  from './about.jsx';
import {Footer} from './footer.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);

    }

    render(){
        return(
            <div className="global">
                <Header />
                <About />
                <Footer />
            </div>
        )
    }
}

export {App}
