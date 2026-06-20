import { Component } from 'react'

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center p-8 bg-gray-50 dark:bg-gray-900">
          <div className="card max-w-md text-center p-8">
            <div className="text-5xl mb-4">⚠️</div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Something went wrong</h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">
              An unexpected error occurred. Please try refreshing the page.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="btn-primary"
            >
              Refresh page
            </button>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}
