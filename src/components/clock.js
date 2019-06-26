import React, { Component } from 'react'

export default class Clock extends Component {

    state = {
        h:0,
        m:0,
        s:0
    }

    updateClock = () => {
        let d = new Date();
        this.setState({
            h: d.getHours(),
            m: d.getMinutes(),
            s: d.getSeconds()
        });
        console.log("updateClock()")
    }

    componentDidMount() {
        console.log("CLOCK: componentDidMount()")
        this.timerId = setInterval(this.updateClock, 200);
    }

    shouldComponentUpdate(nextProps, nextState) {
        
        if(nextState.s !== this.state.s) {
            //console.log("CLOCK: shouldComponentUpdate(): true")
            return true;
        }
        //console.log("CLOCK: shouldComponentUpdate(): false")
        return false;
    }

    render() {
        let {h,m,s}=this.state;
        console.log("CLOCK: render(): sec: %d", s);
        return (
            <div>
                {h}:{m}:{s}
            </div>
        )
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("DID Update")
    }

    componentWillUnmount() {
        console.log("WILL Unmount");

        clearInterval(this.timerId);
    }
}
