import React from 'react';
import ReactDOM from 'react-dom';
import logo from './images/logo.png';
import './index.less';

class Search extends React.Component {
    render() {
        return <div className="search-text">
            <img src={ logo } />
            <p>IT知识查询</p>
        </div>;
    }
}

ReactDOM.render(
    <Search />,
    document.getElementById('root')
);
