const ArrowComponent = (props) => {
    // 변수를 넣어서 사용 가능
    const {text, children} = props;
    return (
    <div>
        <h3>함수형 컴포넌트입니다</h3>
        <p>하나의 부모태그로 전달</p>
        <p>text속성으로 가져온 props값 {props.text}, {text}</p>
        <p>{props.children}, {children}, {text}</p>
    </div>
    );  // 여러 줄을 적을 때는 괄호로 묶어서 사용
}

export default ArrowComponent;