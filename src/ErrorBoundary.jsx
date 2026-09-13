import { Component } from "react";
import { Link } from "@tanstack/react-router";

class ErrorBoundary extends Component {
  state = { hasError: false };
  static getDerivedSTateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.error("Error Boundary: ", error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <h2>Uh Oh!!</h2>
          <p>
            There was an error with this page.{" "}
            <Link to="/">Go back to homepage</Link>
          </p>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
