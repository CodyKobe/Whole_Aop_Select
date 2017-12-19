import React from 'react';

class Option extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {

        return(
            <option key={this.props.i} value={this.props.i} data-hex={this.props.colorHex}>
                {this.props.colorName}
            </option>
        )
    }

}
//*****************************************

class ColorSelect extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }

    render() {

        let colorOptions = this.props.colorsArr.map( (item, i) => {
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
//***********************************

class Field extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            colorsArr : [],
            currentColor : 'chartreuse'
        }
    }

    render() {

        return(
            <div>
                <label htmlFor='inputWithColors'>Select color:</label>
                <input list="colorSelectable" name="inputWithColors" id="inputWithColors" />
                <ColorSelect colorsArr={this.state.colorsArr} />
                <input type='button' onClick={this.setBackground} value='Accept' />

                <div style={{
                    backgroundColor: this.state.currentColor,
                    border: '1rem solid burlywood',
                    height: '160px',
                    width: '160px'
                    }}>
                </div>

            </div>
        )
    }

    getColorsJson() {
        const url = 'http://www.mocky.io/v2/5a37a7403200000f10eb6a2d';
        fetch(url)
            .then( resp => {
                if( resp.ok )
                    return resp.json();
                else
                    throw new Error('Network error!');
            })
            .then( data => {
                console.log( data );
                this.setState({
                    // full JSON
                    colorsArr: data
                })
            })
            .catch( err  => {
                console.log( 'Authentication error!', err )
            });
    }

    componentDidMount() {
        this.getColorsJson()
    }

    setBackground = e => {
        e.preventDefault();

        let newColor = document.getElementById("inputWithColors").value;
        this.state.colorsArr.forEach( item => {
            if( item.name === newColor ) {
                this.setState({
                    currentColor : '#'+item.hex
                });
                this.props.backgroundAction('#'+item.hex);
                return 0;
            }
        })
    }
}

export {Field}
