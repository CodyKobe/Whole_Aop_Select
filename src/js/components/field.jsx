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

//***********************************

class Field extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            colorsArr : [],
            currentColor : 'chartreuse'
        }
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

    render() {
        let colorOptions = this.state.colorsArr.map( (item, i) => {
            return(
                <Option key={i} value={i} data-hex={item.hex} colorName={item.name} />
            )
        });

        let colorSelect = (
            <datalist id="colorSelectable">
                {colorOptions}
            </datalist>
        );

        let colorButton = <input type='button' onClick={this.setBackground} value='Accept' />;

        return(
            <div>
                <label htmlFor='inputWithColors'>Select color:</label>
                <input list="colorSelectable" name="inputWithColors" id="inputWithColors" />
                {colorSelect}
                {colorButton}

                <div style={{
                    backgroundColor: this.state.currentColor,
                    border: '1rem solid burlywood',
                    backgroundSize: '500%',
                    height: '160px',
                    width: '160px',
                    backgroundPositionX: '0px',
                    backgroundPositionY: '0px',
                    }}>
                </div>
            </div>
        )
    }

    setBackground = (e) => {
        e.preventDefault();

        let newColor = document.getElementById("inputWithColors").value;
        this.state.colorsArr.forEach( item => {
            if( item.name === newColor ) {
                this.setState({
                    currentColor : '#'+item.hex
                })
            }
        })
    };

    componentDidMount() {
        this.getColorsJson()
    }

}

export {Field}
