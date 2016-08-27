var AnalyticsApplication = React.createClass({

  getInitialState: function(){
    return {data: []};
  },

  componentDidMount: function(){
    this.fetchTableData();
  },

  fetchTableData: function(){
    $.ajax({
      url: '/data/get_bio_print_data',
      type: "GET",
      context: this,
      error: function(){
        this.throwError('Something went wrong, please try again later.');
      },
      success: function(response){
        if (response.error) {
          this.throwError(response.message);
        } else {
          this.setState({data: response.message});
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
        <Table data={this.state.data}/>
      </div>
    );
  }
});