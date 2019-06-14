import React from 'react';

class Table extends React.Component {
    constructor() {
        super();
        this.state = { items: [] };
    }

    render() {
        var contents = this.props.content.map(data => {
            return (
                <tr>
                  <td>{data}</td>
                </tr>
            )
        })
        return (
            <table class="table">
                {contents}
            </table>
        )
    }
}

export default Table;