import React,{Component} from 'react';
import { filterpnl,tabelPnl,tableFrameComp } from './Constants/FilterPnlConstants';

class FilterPanel extends Component {

    constructor(props) {
        super();
        this.state={};
    }

    render() {
        return (
        <div style= {filterpnl}>
             <table style={tabelPnl}>
                { 
                tableFrameComp.map((value, i) => <><tr >{value.label}</tr><td></td></> )
                }
                </table>
        </div>
        );
    }

}

export default FilterPanel;