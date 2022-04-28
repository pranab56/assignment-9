const { useState, useEffect } = require("react")

const UseReview=()=>{
    const [review,setreview]=useState([])
    useEffect(()=>{
        fetch('Customars.json')
        .then(res=>res.json())
        .then(data=>setreview(data))
    },[])


    return [review,setreview];
}
export default UseReview;
