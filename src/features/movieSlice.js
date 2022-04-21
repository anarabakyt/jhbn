import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'

export const callToAPI = createAsyncThunk('api/movies',async(obj,{state,error})=>{
    try{
          const req = await fetch('https://api.themoviedb.org/3/person/popular?api_key=df8b08ecb436696fee41a00f8d87a540&language=en')
          const res = await req.json()
          console.log(res)
          return res.results
        
    }catch(error){
        console.log(error)
        return []
    }
})





const movieSlice = createSlice({
    name:"movies",
    initialState:[],
    reducers:{},
    extraReducers:{
        [callToAPI.fulfilled]:(state,action)=>{
            return action.payload
        },
        [callToAPI.rejected]:(state,action)=>{
            return []
        }
    }
})

/* export const { addDataMovies } = movieSlice.actions */
export const actions = movieSlice.actions;

export default movieSlice.reducer