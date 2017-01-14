// Include React
var React = require("react");

// Creating the Form component
var Form = React.createClass({

  // Here we set a generic state associated with the text being searched for
 // getInitialState: function() {
 //   return { term: "" };
 // },

  // This function will respond to the user input
//  handleChange: function(event) {

 //   this.setState({ term: event.target.value });

 // },

  // When a user submits...
//  handleSubmit: function(event) {
    // prevent the HTML from trying to submit a form if the user hits "Enter" instead of
    // clicking the button
  //  event.preventDefault();

    // Set the parent to have the search term
    this.props.setTerm(this.state.term);
    this.setState({ term: "" });
  },
  // Here we describe this component's render method
  render: function() {
    return (
      <div class="rowResults">
  
  <div class="col-md-3"></div>
  <div class="col-md-6">
  <div class="well well-lg" id="mapWell">
  
</div></div>
  <div class="col-md-3"></div>
</div>

    );
  }
});

// Export the component back for use in other files
module.exports = Form;
