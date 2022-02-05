import {useState, useEffect} from "react";

function Effect(){
    const [counter, setValue] = useState(0);
    const [keyword, setKeyword] = useState("")
    const onClick = () => setValue((prev) => prev + 1);
    const iRunOnlyOnce = () => {
        console.log("CALL ThE API");
    };
    const onChange = (event) => setKeyword(event.target.value)

    useEffect(iRunOnlyOnce, []); // 비워놓으면 처음에 딱 한번만 실행됨!

    useEffect(() => {
        console.log("counter changes :", counter);
    }, [counter])

    useEffect(() => {
        if (keyword !== "" && keyword.length > 5) {
            console.log("keyword changes :", keyword )
        }
    }, [keyword]) // if keyword가 변화할때만 코드를 실행해라~~~!!!!, counter가 변할때는 실행 되지 않음.

    useEffect(() => {
        console.log("keyword or counter changed", keyword, counter)
    }, [keyword, counter])

    return (
        <div>
            <input value={keyword} onChange={onChange} type="text" placeholder="Search here..." />
            <h1>{counter}</h1>
            <button onClick={onClick}>click me</button>
        </div>
    )
};

export default Effect