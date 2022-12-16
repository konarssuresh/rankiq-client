import { connect } from 'react-redux';
import Layout from './components/Layout/Layout';
import './index.css';

function App() {
  return <Layout />;
}

const mapStateToProps = (state) => {
  return { testProp: state.domain.test.test };
};

const TestApp = connect(mapStateToProps, null)(App);

function WrappedApp() {
  return <TestApp />;
}

export default WrappedApp;
