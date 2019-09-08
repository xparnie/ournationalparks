import React from 'react'

import './deep-dive.styles.scss'

class DeepDivePage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    render() {
        return (
            <div className='container'>
                <div className='content'>
                    <h1 className='title'>Hello World</h1>
                </div>
            </div>
        )
    }
}

export default DeepDivePage