import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // Optionally hook into audit/monitoring here
    // console.error('Window error', { error, info, windowKey: this.props.windowKey });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-5 bg-white text-sm text-red-700 rounded">
          <p>Something went wrong loading this window.</p>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
