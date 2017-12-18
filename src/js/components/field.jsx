import React from 'react';

class Field extends React.Component{

    constructor(){
        super();

        this.state={

        }
    }

    getColorsJson(){

        
    }

    render(){

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
}

export {Field}
