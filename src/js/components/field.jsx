import React from 'react';

class Option extends React.Component {

    constructor(props) {
        super(props);

    }
    render() {

        let option = <option key={this.props.i} value={this.props.i} data-hex={this.props.colorHex}>
            {this.props.colorName}
        </option>;

        return option;
    }


}
class Field extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            colorsArr: []
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

        let options = this.state.colorsArr.map( (item, i) => {
            return (
                <Option key={i} value={i} data-hex={item.hex} colorName={item.name} />
            )
        });

        let select = (
            <select name="colorSelectable" id="colorSelectable">
                {options}
            </select>
        );

        return <div>

            <label htmlFor="colorSelectable">Select color:</label>

            {select}

            <div style={{
                border: '1rem solid burlywood',
                backgroundSize: '500%',
                height: '160px',
                width: '160px',
                backgroundPositionX: '0px',
                backgroundPositionY: '0px',
            }}>
            </div>

        </div>;
    }

    componentDidMount() {
        this.getColorsJson()
    }

}
export {Field}
