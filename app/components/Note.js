var React = require('react');

var Note = React.createClass({
    getInitialState: function () {
        return {
            editon: false
        }
    },
    deleteNote: function () {
        var k = this.props.index;
        console.log("delete the note ", k)
        this.props.ondelete(k);
    },
    editNote: function () {
        this.setState({
            editon : true
        })
    },
    saveEditedNote : function(){
        console.log("save")
        this.props.onedit(this.inputval.value,this.props.index);
        this.setState({editon:false})
    },
    renderForm: function(){
        return (
                // <form className="list-group-item" onSubmit={this.saveEditedNote}>
                    <div className="list-group-item">
                        <input type='text' ref={(i) => this.inputval = i} defaultValue={this.props.text}  />

                        <button className="btn btn-default" onClick={this.saveEditedNote}>Save</button>
                    </div>
                // </form>
            );
    },
    renderEdit: function(){
        return (
                <div className="list-group-item">
                    <p>{this.props.text}</p>
                    <button className="btn btn-default btn-primary" onClick={this.deleteNote}>Delete</button>
                    <button className="btn btn-default btn-primary" onClick={this.editNote}>Edit</button>
                </div>
            );
    },
    render: function () {
        return (this.state.editon) ? this.renderForm() : this.renderEdit();
    }
});
module.exports = Note;