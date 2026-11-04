import { useState } from "react";
import { Search } from "../search/Search";
import { usePhotos } from "../../context/PhotoContext";

export const Gallery = () => {
  const { photos, loading, error } = usePhotos();

  const [search, setSearch] = useState("");

  //filters photo by tile 
const filteredPhotos = photos.filter((photo)=>
  photo.title.toLowerCase().includes(search.toLowerCase())
);
  return (
    <div className="main">
       <div className="gallery-container">

      <Search search={search} setSearch={setSearch} />

      {
        loading && <h2>Loading photos...</h2>
      }
      {
        error && <h2 className="Error">{error}</h2>
      }
      {
        !loading &&  !error && (
          <>
          <p className="photo-count">Showing {filteredPhotos.length} photos</p>
          <div className="photo-grid">
            {
              filteredPhotos.map((photo)=>(
                <div className="photo-card">
                  <img src={photo.thumbnailUrl} alt={photo.title} />
                  <h3>{photo.title}</h3>
                </div>
              ))
            }
          </div>
          {
            filteredPhotos.length ===0  && <h2>No photos found</h2>
          }
          </>
        )
      }
    </div> 
    </div>
  );
};
