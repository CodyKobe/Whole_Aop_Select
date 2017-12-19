import React from 'react';

import {Header} from './header.jsx';
import {Field}  from './field.jsx';
import {Footer} from './footer.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);

        // Bind the this context to the handler function
        this.handler = this.handler.bind(this);

        this.state = {
            background : 'limegreen'
        }
    }

    // This method will be sent to the child component
    handler = (colorFromChild) => {
        this.setState({
            background : this.hexToRGB(colorFromChild)
        })
    };

    render() {
        return(
            <div className="global"
                 style={{backgroundColor: this.state.background}} >
                <Header />
                {/*Render the child component and set the action property with the handler as value*/}
                <Field backgroundAction={this.handler} />
                <Footer />
            </div>
        )
    }

    hexToRGB(hex) {

        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);

        return `rgba(${r}, ${g}, ${b}, .5)`;
    }

}

export {App}
