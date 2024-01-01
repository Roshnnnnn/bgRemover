import { useState } from "react";
import Image from "../assets/radhaKrishna.jpg";
import Image1 from "../assets/bg.png";

export default function RemoveBG() {
  const [image, setImage] = useState(null);
  const [bgRemove, setBgRemove] = useState(null);

  const handleRemoveBG = async () => {
    const apiKey = "Rx9SFrNchZ3yGD3evDe265Lq";
    const apiUrl = "https://api.remove.bg/v1.0/removebg";

    const formData = new FormData();
    formData.append("image_file", image, image.name);
    formData.append("size", "auto");

    try {
      const res = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "X-Api-Key": apiKey,
        },
        body: formData,
      });

      const data = await res.blob();

      const reader = new FileReader();
      reader.onloadend = () => setBgRemove(reader.result);
      reader.readAsDataURL(data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(image);

  return (
    <div className="flex justify-center">
      <div className="max-w-xl w-full p-4">
        {/* Input */}
        <div className="mb-5">
          {/* Input Tag */}
          <div className="input border border-gray-700 px-2 py-2 rounded-lg bg-gray-950 mb-5">
            <input
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
              className="text-sm text-gray-500 file:py-1 file:px-3 file:text-xs file:font-medium file:border-0 file:rounded-md file:bg-gray-800 file:text-gray-500 hover:file:cursor-pointer hover:file:bg-blue-50 hover:file:text-blue-700 w-full"
            />
          </div>

          {/* Remove Background Button */}
          <div className="flex justify-center">
            <button
              type="button"
              onClick={handleRemoveBG}
              className="text-black bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-full"
            >
              Remove Background
            </button>
          </div>
        </div>

        {/* Output */}
        <div className="flex flex-col gap-4 md:flex-row md:gap-8 mb-5">
          {image && (
            <div className="border-2 border-gray-500 rounded-lg border-dashed flex justify-center p-2 w-full md:w-1/2">
              <img
                className="w-full h-48 md:h-80 object-cover"
                src={image ? URL.createObjectURL(image) : ""}
                alt=""
              />
            </div>
          )}

          {bgRemove && (
            <div className="border-2 border-gray-500 rounded-lg border-dashed flex justify-center p-2 w-full md:w-1/2">
              <img
                className="w-full h-48 md:h-80 object-cover"
                src={bgRemove}
                alt="img"
              />
            </div>
          )}
        </div>

        {bgRemove && (
          <div className="flex justify-center">
            <a className="w-full" href={bgRemove} download={"save.png"}>
              <button className=" bg-gray-800 text-white w-full py-2 px-3 rounded-lg border border-gray-600">
                Download
              </button>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
