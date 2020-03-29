import React from 'react';
import common from "../../commons";


class Detail extends React.Component{
    constructor() {
        super(...arguments);
    }
    render(){
        return <div>
            <p>{common()}</p>
            <input type="text"/>
            </div>

    }
}

export default Detail
