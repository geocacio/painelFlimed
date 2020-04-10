import React from "react";
import { Bar } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

const ChartBar = ({data, options}) => {


    return (
        <Bar 
            data={data}
            options={options}
        />
    );

}

export default ChartBar;