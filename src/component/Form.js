import React from "react";
class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      destination: "",
      dietaryRestrictions: "",
      isVegan: false,
      isKosher: false,
      isLactoseFree: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, value, type, checked } = e.target;
    type === "checkbox"
      ? this.setState({
          [name]: checked,
        })
      : this.setState({
          [name]: value,
        });
  }
  

  render() {
    console.log("name", this.state.firstName)
    return (
      <main>
        <form>
          <input
            name="firstName"
            value={this.state.firstName}
            onChange={(value) => this.handleChange(value)}
            placeholder="First Name"
          />
          <br />

          <br />

          <input
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleChange}
            placeholder="Last Name"
          />

          <br />

          <input
            name="age"
            value={this.state.age}
            onChange={this.handleChange}
            placeholder="Age"
          />

          <br />
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={this.state.gender === "male"}
              onChange={this.handleChange}
            />{" "}
            Male
          </label>

          <br />

          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={this.state.gender === "female"}
              onChange={this.handleChange}
            />{" "}
            Female
          </label>

          <br />
          <select
            value={this.state.destination}
            name="destination"
            onChange={this.handleChange}
          >
            <option value="">-- Please choose a destination --</option>
            <option value="Germany">Germany</option>
            <option value="Norway">Norway</option>
            <option value="North Pole">North Pole</option>
            <option value="South Pole">South Pole</option>
          </select>

          <br />

          <label>
            <input
              type="checkbox"
              name="isVegan"
              onChange={this.handleChange}
              checked={this.state.isVegan}
            />{" "}
            Vegan?
          </label>

          <br />

          <label>
            <input
              type="checkbox"
              name="isKosher"
              onChange={this.handleChange}
              checked={this.state.isKosher}
            />{" "}
            Kosher?
          </label>

          <br />

          <label>
            <input
              type="checkbox"
              name="isLactoseFree"
              onChange={this.handleChange}
              checked={this.state.isLactoseFree}
            />{" "}
            Lactose Free?
          </label>

          <br />

          <hr style={{ width: "20%" }} />
          <h1>Entered Information</h1>

          <div>
            Your name:{this.state.firstName} {this.state.lastName}
          </div>
          <div>Your age:{this.state.age}</div>
          <div>Your gender:{this.state.gender}</div>
          <div>Your destination:{this.state.destination}</div>
          <div>
            Your dietoryRestriction:
            <div>Vegan:{this.state.isVegan ? "Yes" : "No"}</div>
            <div>Kosher:{this.state.isKosher ? "Yes" : "No"}</div>
            <div>Lactose Free:{this.state.isLactoseFree ? "Yes" : "No"}</div>
          </div>
        </form>
      </main>
    );
  }
}
export default Form;
