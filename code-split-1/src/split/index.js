import React from 'react';
import ReactDOM from 'react-dom';

class Split extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            text: null,
            test: null
        }
    }
    getComponent() {
        return import(/* webpackChunkName: "lodash" */ 'lodash').then(({ default: _ }) => {
            const element = document.createElement('div');
            element.innerHTML = _.join(['Hello', 'webpack'], ' ');
            return element;
      }).catch(error => 'An error occurred while loading the component');
    }

    // 通过onClick事件触发懒加载
    loadComponent(fileName) {
        const path =  `${fileName}.js`;
        import(/* webpackChunkName: "[request]" */ /* webpackExclude: /\.json$/ */`../code/${path}`).then((result) => {
            if(fileName === 'test') {
                this.setState({ test: result[fileName] })
            }else{
                this.setState({ text: result[fileName] })
            }
        })
    }

    loadNpm() {
        this.getComponent().then(component => {
                    document.body.appendChild(component);
                })
    }

    render() {
        const { text } = this.state;
        const { test } = this.state;

        return <div>
            <p onClick={() => this.loadComponent('text')}>text: dynamic import text</p>
            <p onClick={() => this.loadComponent('test')}>test: dynamic import test</p>
            <p onClick={() => this.loadNpm()}>lodash: dynamic import lodash</p>
            <p>{text ? text : null }</p>
            <p>{test ? test : null }</p>
        </div>
    }
}

ReactDOM.render(
    <Split />,
    document.getElementById('root')
);
