import React from 'react';

import {Option} from './option.jsx';

class ColorSelect extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {

        let colorOptions = this.props.colorsSubArr.map( (item, i) => {
            return(
                <Option key={i} value={i} data-hex={item.hex} colorName={item.name} />
            )
        });

        return (
            <datalist id="colorSelectable">
                {colorOptions}
            </datalist>
        )
    }

}

export {ColorSelect}
