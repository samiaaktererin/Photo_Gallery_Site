import "./Search.css";
import { ImageResults } from "../imageResults/imageResults";
export const Search=()=>{
    return(
        <div className="Search-box">
            <p > 🔍 Search: </p>
            <input type="search" name="search" placeholder="Looking for something?" />
         <button type="submit" onClick={()=>{
             <ImageResults/>
         }}>Click</button>
        </div>
    )
}
