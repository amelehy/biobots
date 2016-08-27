var Table = React.createClass({

  render: function() {
    return (
      <div className="row" id="table-container">
        <div className="col-md-10 col-centered block">
          <BootstrapTable data={this.props.data} striped={true} hover={true} height="500" search={true}>
              <TableHeaderColumn isKey={true} dataField="username">User Email</TableHeaderColumn>
              <TableHeaderColumn dataField="serial">BioBot Serial Number</TableHeaderColumn>
              <TableHeaderColumn dataField="input_file">Input File Name</TableHeaderColumn>
              <TableHeaderColumn dataField="output_file">Output File Name</TableHeaderColumn>
              <TableHeaderColumn dataField="cl_enabled">Crosslinking Enabled</TableHeaderColumn>
              <TableHeaderColumn dataField="cl_duration">Crosslinking Duration (ms)</TableHeaderColumn>
              <TableHeaderColumn dataField="cl_intensity">Crosslinking Light Intensity</TableHeaderColumn>
              <TableHeaderColumn dataField="pressure_ex_1">Extruder 1 Pressure</TableHeaderColumn>
              <TableHeaderColumn dataField="pressure_ex_2">Extruder 2 Pressure</TableHeaderColumn>
              <TableHeaderColumn dataField="res_layer_height">Layer Height (mm)</TableHeaderColumn>
              <TableHeaderColumn dataField="res_layer_num">Print Layers</TableHeaderColumn>
              <TableHeaderColumn dataField="wellplate">Wellplate Type</TableHeaderColumn>
              <TableHeaderColumn dataField="live_percent">Live Print %</TableHeaderColumn>
              <TableHeaderColumn dataField="elasticity">Rigitity (kPa)</TableHeaderColumn>
              <TableHeaderColumn dataField="dead_percent">Dead Print %</TableHeaderColumn>
          </BootstrapTable>
        </div>
      </div>
    );
  }
});