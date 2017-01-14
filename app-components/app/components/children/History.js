// Include React
var React = require("react");

// This is the History component. It will be used to show a log of  recent searches.
var History = React.createClass({
  // Here we describe this component's render method
  render: function() {
    return (
     <h6><center>ARE THERE MORE THAN 3 SPOTS AVAILABLE?</center></h6>
<div class="rowButtons">
  <div class="col-md-3"></div>

  <div class="col-md-3">
 <a href="#" class="btn btn-primary btn-lg" id=yesButton>YES</a></div>
  <div class="col-md-4">
  <a href="#" class="btn btn-warning btn-lg" id=noButton>NO</a></div>
</div>
  
  <div class="col-md-3"></div>

          {/* Here we use a map function to loop through an array in JSX */}
          {this.props.history.map(function(search, i) {
            return (
              <p key={i}>{search.location} - {search.date}</p>
            );
          })}
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = History;
