import { Search } from "../search/Search"
export const Gallery=()=>{
    return(
        <div >
           <h1 style={{display: "flex", fontSize:"50px", gap:"5px", fontFamily:"-moz-initial", alignContent:"center",justifyContent:"center"}}> <img src="logo.png" alt="Elora Photo Gallery logo" style={{height:"60px",  borderRadius:"30px"}}/>
          Elora Photo Gallery</h1> 
          <Search/>
         
        </div>
    )
}