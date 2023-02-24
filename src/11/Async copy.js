const Async = () => {

    const fucA = () => {
        console.log("함수 명령")
    }

    console.log("명령1");
    console.log("명령2");
    

    setTimeout(()=>{
        console.log("타임아웃1")
        setTimeout(()=>{
            console.log("타임아웃2")
            setTimeout(()=>{
                console.log("타임아웃3")
            }, 100);
        }, 500);
    }, 1000);


    return (
        <>
            
        </>
    );
    
    }
    export default Async;
    