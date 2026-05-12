import { Component, type ErrorInfo, type ReactNode } from "react";

type MapErrorBoundaryProps = {
  children: ReactNode;
  fallback: ReactNode;
  resetKey?: string | null;
};

type MapErrorBoundaryState = {
  hasError: boolean;
};

export default class MapErrorBoundary extends Component<MapErrorBoundaryProps, MapErrorBoundaryState> {
  state: MapErrorBoundaryState = {
    hasError: false
  };

  static getDerivedStateFromError(): MapErrorBoundaryState {
    return { hasError: true };
  }

  componentDidUpdate(prevProps: MapErrorBoundaryProps) {
    if (this.state.hasError && prevProps.resetKey !== this.props.resetKey) {
      this.setState({ hasError: false });
    }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("3D map overlay failed to load", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}
