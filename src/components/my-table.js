import React from "react";
import { Table } from 'reactstrap';

export class MyTable extends React.Component {


    render() {
        return <Table {...this.props}>
            <thead>
                <tr>
                    {this.props.tableHeadersRenderer()}
                </tr>
                
            </thead>
            <tbody>
                {
                    this.props.items.map((item, i)=>{
                        return <tr>
                            {this.props.tableRowRenderer(item, i)}
                        </tr>
                    })
                }
            </tbody>
        </Table>
    }
}