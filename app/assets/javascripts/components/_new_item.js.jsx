var NewItem = React.createClass({
    handleClick() {
        var description = this.refs.description.value;
        var due = this.refs.due.value;
        var person = this.refs.person.value;
        $.ajax({
            url: '/api/v1/items',
            type: 'POST',
            data: { item: { description: description, due: due, person: person } },
            success: (item) => {
                this.props.handleSubmit(item);
            }
        });
    },

    render() {
        return (
            <div>
                <input ref='description' placeholder='Enter a description' />
                <input ref='due' placeholder='Enter a due date' />
                <input ref='person' placeholder='Enter an assignee' />
                <button onClick={this.handleClick}>Submit</button>
            </div>
        )
    }
});