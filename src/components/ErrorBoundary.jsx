
import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div 
          role="alert"
          style={{
            padding: '20px',
            textAlign: 'center',
            color: 'var(--text-color)',
            backgroundColor: 'var(--header-bg-color)'
          }}
        >
          <h2>Something went wrong</h2>
          <button
            onClick={() => {
              this.setState({ hasError: false });
              window.location.reload();
            }}
            style={{
              backgroundColor: 'var(--brand-color)',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '4px',
              color: '#fff',
              cursor: 'pointer'
            }}
          >
            Reload page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
