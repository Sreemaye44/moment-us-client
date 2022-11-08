import { useEffect } from "react"

const useTitle= title=>{
    useEffect(()=>{
        document.title=`${title}-moment us`;
    },[title])
}

export default useTitle;