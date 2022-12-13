import { HashRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Layout from './components/Layout/Layout';

function App() {
  return <div>Rankiq hello</div>;
}

const mapStateToProps = (state) => {
  return { testProp: state.domain.test.test };
};

const TestApp = connect(mapStateToProps, null)(App);

function WrappedApp() {
  return (
    <HashRouter>
      <Layout />
      <TestApp />
    </HashRouter>
  );
}

export default WrappedApp;
