import React,{Component} from "react";
class MyForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
        checkbox1: false,
        checkbox2: false
      };
      this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
      this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }
  
    handleCheckboxChange(event) {
      const { name, checked } = event.target;
      this.setState({
        [name]: checked
      });
    }
  
    handleFormSubmit(event) {
      event.preventDefault();
      console.log('Checkbox 1:', this.state.checkbox1);
      console.log('Checkbox 2:', this.state.checkbox2);
    }
  
    render() {
      return (
        <form onSubmit={this.handleFormSubmit}>
          <label>
            Checkbox 1:
            <input
              type="checkbox"
              name="checkbox1"
              checked={this.state.checkbox1}
              onChange={this.handleCheckboxChange}
            />
          </label>
          <label>
            Checkbox 2:
            <input
              type="checkbox"
              name="checkbox2"
              checked={this.state.checkbox2}
              onChange={this.handleCheckboxChange}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      );
    }
  }
  
  export default MyForm;