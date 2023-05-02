// 리액트 슬릭 라이브러리 CSS 추가
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// 작성하는 css 는 아래쪽에 두어서 수정가능하게 사용
import './App.css';

import SimpleSlider from "./components/SimpleSlider";
import IconComp from "./components/IconComp";

function App() {
  return (
    <div className="App">
      <SimpleSlider />
      <IconComp />
    </div>
  );
}

export default App;