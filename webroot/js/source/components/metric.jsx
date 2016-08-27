var Metric = React.createClass({

  render: function() {
    return (
      <div className="block metric">
        <div className="value">{this.props.value}</div>
        <div className="label">{this.props.label}</div>
      </div>
    );
  }
});