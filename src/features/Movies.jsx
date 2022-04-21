import {useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {callToAPI} from './movieSlice'

function Movies(){
    const dispatch = useDispatch()
    const data = useSelector((state)=> state)
    useEffect(()=>{
        dispatch(callToAPI())
    },[dispatch])
    console.log(data)
    return(
        <>
            <h1>this is my movies</h1>
            {
                data.movie.map((item)=>{
                    return(
                        <>
                        <h1>{item.name}</h1>
                        </>
                    )
                })
            }
           
          
            
        </>
    )
}
export default Movies