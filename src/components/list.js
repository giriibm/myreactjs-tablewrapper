import React, { Component } from 'react'

import "./list.css";

export default class List extends Component {

    state = {
        selectedIndex: -1
    }

    onItemClick = (item, index) => {
        //if(this.props.onSelect !== undefined && this.props.onSelect !== null)
         
        if(this.props.onSelect) {
             this.props.onSelect(item);
         }
         this.setState({
             selectedIndex: index
         });
    }

    renderItem = (item, index) => {
        let label = item;

        if(this.props.labelRenderer) {
            label = this.props.labelRenderer(item);
        }
        let listItmeClassName = "my-list-item";

        if(index === this.state.selectedIndex) {
            listItmeClassName += " selected";
        }

        return <div className={listItmeClassName} key={index}
        onClick={()=>this.onItemClick(item, index)}
        >{label}</div>
    }
    render() {
        let items = this.props.items;
        let myListClassName = "my-list";
        if(this.props.className) {
            myListClassName += " " + this.props.className;
        } 
        return (
            <div className={myListClassName}>
                {items.map(this.renderItem)}
            </div>
        )
    }
}
