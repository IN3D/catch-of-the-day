/*
StorePicker
 */

import React from 'react';
import { History } from 'react-router';
import helpers from '../helpers';

var StorePicker = React.createClass({
    mixins : [History],
    goToStore : function(event){
        event.preventDefault();
        //get the data from the input
        var storeId = this.refs.storeId.value;
        //transition from StorePicker to App
        this.history.pushState(null, '/store/' + storeId);
    },
    render : function(){
        var name = "name";
        return(
            <form className="store-selector" onSubmit={this.goToStore}>
            {/* example comment inside JSX */}
                <h2>Please Enter a store</h2>
                <input type="text" ref="storeId" defaultValue={helpers.getFunName()} required/>
                <input type="Submit" />
            </form>
        )
    }
});

export default StorePicker;