import './App.css';
import CountComp from './components'


function App() {
  return (
    <div className="App">
      {/* props을 사용하는 클래스컴포넌트 */}
      <PropsComp color="red">props값을 받아와서 글자색을 바꿉니다</PropsComp>
      {/* state을 사용하는 클래스컴포넌트
        버튼을 클릭할 때마다 10씩 증가하는 컴포넌트 */}
      <CountComp />
      {/* props, state을 사용하는 클래스컴포넌트
        props의 num값을 가져와서 버튼을 클릭할 때마다 num씩 증가*/}
      <CountPropsComp num={5} />
    </div>
  );
}

export default App;
