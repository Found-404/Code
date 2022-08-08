import React, { Component } from 'react';
import hello from './index.module.css'

class Hello extends Component {
    render() {
        return (
            <div>
                <h1 className={hello.title}>Hello World</h1>
            </div>
        );
    }
}

export default Hello;

