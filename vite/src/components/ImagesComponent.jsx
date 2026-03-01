import React from "react";

const ImagesComponent = ({images, loading}) => {
  return (
    <div className="images">
      {loading ? (
        <p>Загрузка...</p>
      ) : (
        images.map((url) => (
          <div className="img-wrap">
            <img src={url} alt="Nothing" loading="lazy" />
          </div>
        ))
      )}
    </div>
  );
};

export default ImagesComponent;
