import React from 'react';

class Option extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {

        return (
            <option key={this.props.i} value={this.props.i} data-hex={this.props.colorHex}>
                {this.props.colorName}
            </option>
        )
    }

}

export {Option}
