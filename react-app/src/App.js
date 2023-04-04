import './App.css';

import FilterableProductTable from './components/FilterableProductTable';

function App() {
  return (
    <div className="App">
      {/* 1 */}
      <h3> React 홈페이지의 React로 사고하기 참고 </h3>
      <a href='https://ko.reactjs.org/docs/thinking-in-react.html#step-1-break-the-ui-into-a-component-hierarchy'>
        홈페이지 이동
      </a>
      
      {/* 2 */}
      <FilterableProductTable />
    </div>
  );
}

export default App;
