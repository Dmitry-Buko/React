import React, { useState, useEffect } from "react";
import ImagesComponent from "./ImagesComponent";
import InputComponent from "./InputComponent";

const DogGallery = () => {
  const [quantity, setQuantity] = useState(3);//кол-во имг
  const [images, setImages] = useState([]);//img
  const [loading, setLoading] = useState(true);//флаг
  const [updateCount, setUpdateCount] = useState(0);//счетчик обновлений
  const [breeds, setBreeds] = useState([])//породы
  const [selectBreeds, setSelectBreeds] = useState('')//выбор поролы

  const fetchImages = () => {
    setLoading(true);
    let url = `https://dog.ceo/api/breeds/image/random/${quantity}`
    if(selectBreeds) {
      url = `https://dog.ceo/api/breed/${selectBreeds}/images/random/${quantity}`
    }
    fetch(url)
      .then((r) => r.json())
      .then((data) => {
        if (data.status === "success") {
          setImages(data.message);
        } else {
          setImages([]);
        }
      })
      .catch((error) => {
        console.error("Изображения не загрузились", error);
        setImages([]);
      })
      .finally(() => setLoading(false));
  };//колбэк загрузка имг

  useEffect(()=>{
    fetch(`https://dog.ceo/api/breeds/list/all`)
      .then((r) => r.json())
      .then((data) => {
        if (data.status === "success") {
          setBreeds(Object.keys(data.message));
        } else {
          setImages([]);
        }
      })
      .catch((error) => {
        console.error("Породы собак не загрузились", error);
        setImages([]);
      })
  },[]);//загрузка списка пород

  useEffect(() => {
    fetchImages();
  }, []);//загрузка имг

  useEffect(()=>{
    fetchImages()
  }, [selectBreeds])//после выбора породы

  const handleRefresh = () => {
    setUpdateCount((prev) => prev + 1);
    fetchImages();
  };

  return (
    <div className="container">
      <h2>Галлерея собак</h2>
      <p>Картинки обновлены {updateCount} раз(а)</p>
      <InputComponent
        quantity={quantity}
        setQuantity={setQuantity}
        onRefresh={handleRefresh}
        loading={loading}
        breeds={breeds}
        selectBreeds={selectBreeds}
        setSelectBreeds={setSelectBreeds}
      />
      <ImagesComponent images={images} loading={loading} />
    </div>
  );
};

export default DogGallery;