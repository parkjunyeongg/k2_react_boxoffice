import { useState , useEffect, useRef } from "react";
import "./Box.css"
import BoxofficeList from "./BoxofficeList";

const Boxoffice = () => {
    //상영일 선택
    const [targetDt, setTargetDt] = useState() ;

    //input 제어
    const mvdr = useRef() ;

    //처음 랜더링
    useEffect(() =>{
        mvdr.current.focus() ;
    }, []);

    //targetDt변경시 
    useEffect(() => {
        console.log("targetDt" , targetDt)
    }, [targetDt]) ;

    //input 이벤트
    const handleMv = () => {
        //console.log(mvdr.current.value)
        setTargetDt(mvdr.current.value.replaceAll('-','')) ;
    }

    return(
        <>
            <div className="mvh">
                <h1>박스오피스</h1>
                <form>
                    <input type="date" name="mvd" ref={mvdr} onChange={handleMv} />
                </form>
            </div>
            <div className="mvmain">
                <BoxofficeList tDt={targetDt}/>
            </div>
        </>
    );
}

export default Boxoffice ;
    