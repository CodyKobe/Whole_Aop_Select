import React from 'react';

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
            .then( resp => resp.json() )
            .then(data => {
                console.log( data );
                this.setState({
                    // full JSON
                    colorsArr: data
                })
            });
    }

    render() {

        let select = (
            <select name="colorSelectable" id="colorSelectable">
                <option value="1">opcje</option>
                <option value="2">więcej opcji</option>
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
