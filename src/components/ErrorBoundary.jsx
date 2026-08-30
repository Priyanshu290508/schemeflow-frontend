import React from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          padding: '40px 24px',
          textAlign: 'center',
          background: '#FFFFFF',
          borderRadius: 'var(--radius-xl)',
          margin: '20px auto',
          maxWidth: '600px',
          border: '1px solid var(--border-card)'
        }}>
          <AlertTriangle size={36} color="var(--warning)" style={{ margin: '0 auto 12px auto' }} />
          <h2 style={{ fontSize: '18px', color: 'var(--text-main)', marginBottom: '8px' }}>
            Something went wrong while rendering this section
          </h2>
          <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '16px' }}>
            {this.state.error?.message || 'An unexpected rendering error occurred.'}
          </p>
          <button
            onClick={() => {
              this.setState({ hasError: false, error: null });
              window.location.reload();
            }}
            className="btn btn-purple btn-sm"
          >
            <RefreshCw size={14} />
            <span>Reload Dashboard</span>
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
