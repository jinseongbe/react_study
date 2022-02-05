import { useState, useEffect } from "react";

function Hello(){
    useEffect(() => {
        console.log("created")
        return () => console.log("destroyed") // 해당 component가 destory 될때 이 함수가 실행됨. - 이것이 cleanUp function임
    }, [])
// ----------------------------------------- 
    // 아래는 함수 코드 작성 비교를 위해 보기위한 코드
    // 원래 정석으로 쓰는 방법
    useEffect(function() {
        console.log("hi");
        return function() {
            console.log("bye");
        }
    }, []);
    // 실제 실무에서 사람들이 사용하는 방법
    useEffect(() => {
        console.log("hi");
        return () => console.log("bye");
    }, [])
// ----------------------------------------- 
    

    return <div>Hello</div>
}

function Cleanup() {
    const [showing, setShowing] = useState(false);
    const onClick = () => setShowing((prev) => !prev)

    return (
        <div>
            <h1>Cleanup</h1>
            {showing ? <Hello /> : null}
            <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
        </div>
    );
}

export default Cleanup