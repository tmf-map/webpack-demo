import React from 'react';
import ReactDOM from 'react-dom';
import common from "../../commons";

class Resource extends React.Component{
    constructor() {
        super(...arguments);
    }

    render() {
        return <div>
            <p>{common()}</p>
            <p>resource extraction</p>
        </div>
    }
}

ReactDOM.render(
    <Resource />,
    document.getElementById('root')
);
