import { Component } from 'react';
import Error from '../Error';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state to show the fallback UI when an error occurs
    // console.warn(error);
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can log the error or send it to an error reporting service like sentry
    // console.error(error, errorInfo);
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      // Render fallback UI when an error occurs
      return <Error onClick={() => this.setState({ hasError: false })} />;
    }

    // Render the children components normally
    return children;
  }
}

export default ErrorBoundary;
