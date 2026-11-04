import { useState, useEffect } from "react";

export const ImageResults = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/photos"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch photos");
        }

        const data = await response.json();

        // Store only the first 20 photos
        setPhotos(data.slice(0, 20));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPhotos();
  }, []);

  if (loading) {
    return <h2>Loading photos...</h2>;
  }

  if (error) {
    return <h2>Error: {error}</h2>;
  }

  return (
    <div>
      <h1>Photo Gallery</h1>

      <div className="photo-container">
        {photos.map((photo) => (
          <div className="photo-card" key={photo.id}>
            <img
              src={photo.thumbnailUrl}
              alt={photo.title}
            />

            <h3>{photo.title}</h3>
            <p>Photo ID: {photo.id}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
