/*
    Order
    <Order />
 */

import React from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import helpers from '../helpers';

var Order = React.createClass({
    renderOrder : function(key){
        var fish = this.props.fishes[key];
        var count = this.props.order[key];
        var removeButton = <button onClick={this.props.removeFromOrder.bind(null, key)}>&times;</button>
        if(!fish){
            return <li key={key}>Sorry, no longer available</li>
                    {removeButton}
        }
        return (
            <li key={key}>
                <CSSTransitionGroup component="span"
                    transitionName="count"
                    transitionEnterTimeout={250}
                    transitionLeaveTimeout={250}>
                    <span key={count}>{count}</span>
                </CSSTransitionGroup>
                lbs {fish.name} {removeButton}
                <span className="price">{helpers.formatPrice(count * fish.price)}</span>
            </li>)
    },
    render : function () {
        var orderIds = Object.keys(this.props.order);
        var total = orderIds.reduce((prevTotal, key) => {
            var fish = this.props.fishes[key];
            var count = this.props.order[key];
            var isAvailable = fish && fish.status === "available";

            if(fish && isAvailable){
                return prevTotal + (count * parseInt(fish.price) || 0)
            }
            return prevTotal
        }, 0);
        return (
            <div classNam="order-wrap">
                <h2 className="order-title">Your Order</h2>

                <CSSTransitionGroup className="order" component="ul"
                    transitionName="order"
                    transitionEnterTimeOut={500}
                    transitionLeaveTimeOut={500}>
                    {orderIds.map(this.renderOrder)}
                    <li className="total"><strong>Total: </strong>
                    {helpers.formatPrice(total)}
                    </li>
                </CSSTransitionGroup>
            </div>
        )
    },
    propTypes : {
        removeFromOrder : React.PropTypes.func.isRequired,
        fishes : React.PropTypes.object.isRequired,
        order : React.PropTypes.object.isRequired
    }
});

export default Order;