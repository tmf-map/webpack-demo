import React from 'react';
import ReactDOM from 'react-dom';
import './search.css';
import './index.less';

class Search extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return <div className="search-div">
            <p className="search-text">CSS Loader</p>
        </div>
    }
}

ReactDOM.render(
    <Search />,
    document.getElementById('root')
);
