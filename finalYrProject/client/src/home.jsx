import React, { createElement, useState } from "react";
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import "./styles.scss";
import toast,{Toaster} from "react-hot-toast"
import axios from "axios";

export default function Home() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [photoS, setphotoS] = useState();
  const [completeStatus, setCompleteStatus] = useState(false);
  const [downloadurl, setDownloadurll] = useState();
  const [loading,setLoading] = useState(false);

  const handleFileInput = async (event) => {

    const file = event.target.files[0];
    if (file.type === "image/jpeg" || file.type === "image/png" || file.type === "image/bmp" || file.type === "image/gif" ||file.type === "image/jpg") {
      setSelectedFile(event.target.files[0]);
      console.log(event.target.files[0].name);
      
    }else{
      alert("Please Upload An Image");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!selectedFile) {
      alert("Please select a Image file");
      return;
    }

    const formData = new FormData();
    formData.append("image", selectedFile);
    setLoading(true);
    axios
      .post("http://127.0.0.1:8085/upload", formData, { responseType: "blob" })
      .then((response) => {

        const reader = new FileReader();
        reader.readAsDataURL(response.data);
        reader.onloadend = () => {
          const base64data = reader.result;
          setLoading(false);
          setphotoS(base64data);
          setCompleteStatus(true);
          toast.success("Detection Completed")
        };
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleAnotherCheck = () => {
    setCompleteStatus(false);
    console.log(completeStatus)
  }

  const handleDownload = () => {
    const link = document.createElement('a');
    console.log(photoS);
    link.href = photoS;
    link.download = 'detected_image.png';
    link.click();
  }
  return (
    <div className="homeContainer" id="home">
    <Toaster position="top-center" reverseOrder={false}></Toaster>
      {!completeStatus ? (
        <div className="homeDiv">
          <label htmlFor="ImageUpload">
            <div className="dropBox">
              <AddPhotoAlternateOutlinedIcon sx={'font-size:6em'}/>
              {!loading ? (
                <div>{selectedFile?.name}</div>
              ): (
                <span className="detectingText">Detecting</span>
              )}
            </div>
          </label>
          <form onSubmit={handleSubmit}>
            <input type="file" onChange={handleFileInput} name='ImageUpload' id="ImageUpload" accept="image/gif, image/jpeg, image/png, image/jpg, image/bmp" />
            <button type="submit">Send </button>
          </form>
        </div>
      ) : (
        <div className="checkedSuccess">
          <img src={photoS} alt="Uploaded image" id="imageId" />
          <div className="btns">
            <button onClick={() => handleDownload()}>Download Image</button>
            <button onClick={() => handleAnotherCheck()}>Check Another</button>
          </div>
        </div>
      )}
    </div>
  );
}
