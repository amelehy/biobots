var AnalyticsApplication = React.createClass({

  getInitialState: function(){
    return {
      table_data: [],
      metrics: {
        user_count: 'Loading...', 
        avg_layer_height: 'Loading...', 
        avg_layer_count: 'Loading...'
      }
    };
  },

  componentDidMount: function(){
    this.fetchTableData();
    this.fetchMetricData();
  },

  fetchTableData: function(){
    this.ajaxGet('/data/get_bio_print_data', function(response){
      this.setState({table_data: response.message});
    }.bind(this));
  },

  fetchMetricData: function(){
    this.ajaxGet('/data/get_bio_print_metric_average_data', function(response){
      this.setState({metrics: response.message});
    }.bind(this));
  },

  ajaxGet: function(url, callback){
    $.ajax({
      url: url,
      type: "GET",
      context: this,
      error: function(){
        this.throwError('Something went wrong, please try again later.');
      },
      success: function(response){
        if (response.error) {
          this.throwError(response.message);
        } else {
          callback(response);
        }
      }
    });
  },
 
  // TODO: make this method show a better alert experience
  throwError: function(){
    console.error(message);
    alert(message);
  },

  render: function() {
    return (
      <div>
        <Header/>
        <div id="metrics-container" className="row">
          <div className="col-md-10 col-centered" id="metrics-container-inner">
            <Metric label="Users" value={this.state.metrics.user_count}/>
            <Metric label="Avg. Layer Height (mm)" value={this.state.metrics.avg_layer_height}/>
            <Metric label="Avg. Layer Count" value={this.state.metrics.avg_layer_count}/>
          </div>
        </div>
        <Table data={this.state.table_data}/>
      </div>
    );
  }
});