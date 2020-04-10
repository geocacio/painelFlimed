import React from 'react';
import { MDBDataTable } from 'mdbreact';

const DataTable = ({data}) => {

  return (
    <MDBDataTable responsive
      striped
      bordered
      small
      data={data}
    />
  );
}

export default DataTable;