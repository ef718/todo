var Item = React.createClass({
    getInitialState() {
        return {editable: false}
    },

    handleEdit() {
        if(this.state.editable) {
            var description = this.refs.description.value;
            var due = this.refs.due.value;
            var person = this.refs.person.value;
            var id = this.props.item.id;
            var item = {id: id , description: description , due: due , person: person};
            this.props.handleUpdate(item);
        }
        this.setState({ editable: !this.state.editable })
    },

    render() {
        var description = this.state.editable ? <input type='type' ref='description' defaultValue={this.props.item.description} /> : <p><b>Item {this.props.item.id}:</b> {this.props.item.description}</p>;
        var due = this.state.editable ? <input type='type' ref='due' defaultValue={this.props.item.due} /> : <span><b>Due by:</b> {this.props.item.due} &nbsp;</span>;
        var person = this.state.editable ? <input type='type' ref='person' defaultValue={this.props.item.person} /> : <span><b>Assignee:</b> {this.props.item.person} &nbsp;</span>;
        return (
            <div>
                {description}
                {due}
                {person}
                <button onClick={this.props.handleDelete} >Delete</button>
                &nbsp;
                <button onClick={this.handleEdit}> {this.state.editable ? 'Submit' : 'Edit' } </button>
            </div>
        )
    }
});