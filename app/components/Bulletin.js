var React = require('react');
var Note = require('./Note');


var Bulletin = React.createClass({
    getInitialState: function () {
        return {
            // todo: '',
            todolist: []
        }
    },

    changetext: function (event) {
        this.setState({
            todo: event.target.value
        });
    },

    handledelete : function(key){

        var newArray = this.state.todolist;
        newArray.splice(key,1);
        //newArray = newArray.filter(item => item.key !== key);
        // delete new
        this.setState({
            todolist: newArray
        })
    },

    handleedit : function(text,key){
        var newArray = this.state.todolist;
        newArray[key].item = text;
        console.log(newArray)
        this.setState({
            todolist: newArray
        })
    },

    addtodo: function (e) {
        e.preventDefault();
        var newArray = this.state.todolist;
        newArray.push({
            key: Date.now(),
            item: this.inputval.value
        });

        this.setState({
            todolist: newArray
        })
        this.inputval.value = "";
    },
    // ToDo: take map function logic out html.
    render: function () {
        var self =this;
        return (
            <div>
            <div className="container jumbotron">
                <form onSubmit={this.addtodo}>
                    <div className="col-lg-8">
                        <input type="text" ref={(i) => this.inputval = i} placeholder="Add note" />

                        <button className="btn btn-default" type="submit" >Add</button>
                    </div>
                </form>
                </div>
                <div>
                    <ul className="list-group">
                        {
                            this.state.todolist.map(function (listValue,i) {
                                return <Note 
                                className="list-group-item" 
                                ind={listValue.key} 
                                index={i}
                                text={listValue.item} 
                                ondelete={self.handledelete}  
                                onedit={self.handleedit}  
                                />;
                            })
                        }
                    </ul>

                </div>
            </div>
        );
    }
});

module.exports = Bulletin;
