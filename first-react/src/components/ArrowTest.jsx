const ArrowTest = (props) => {
    // 변수를 넣어서 사용 가능
    const {name, check, children} = props;
    return (
    <div>
        { check && <h3>{name}</h3> }
        <h3>{check ? name : ""}</h3>
        <p>{children}</p>
    </div>
    ); // 여러 줄을 적을 때는 괄호로 묶어서 사용
}

export default ArrowTest;
