import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import axios from "axios";
import { IKContext, IKUpload } from "imagekitio-react";
import React, { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  // const [loading, setLoading] = useState(false);
  // const [progress, setProgress] = useState(0);
  // const [videoFile, setVideoFile] = useState(null);
  // const [videoUrl, setVideoUrl] = useState(null);
  // const axiosSecure = useAxiosSecure();
  // const uploadRef = useRef();

  // const handleChange = (e) => {
  //   const file = e.target.files[0];
  //   setVideoFile(file);
  // };

  // const handleUpload = () => {
  //   if (uploadRef.current) {
  //     uploadRef.current.upload();
  //   }
  // };

  // const publicKey = import.meta.env.VITE_IMGKIT_PK;
  // const urlEndpoint = import.meta.env.VITE_IMGKIT_ENDPOINT;

  // const authenticator = async () => {
  //   try {
  //     const response = await axiosSecure.get("/api/imagekit-auth");
  //     const { signature, expire, token } = response.data;
  //     return { signature, expire, token };
  //   } catch (error) {
  //     toast.error("Authentication failed");
  //     throw new Error("ImageKit Auth failed");
  //   }
  // };

  // const handleFileChange = (e) => {
  //   setVideoFile(e.target.files[0]);
  //   setVideoUrl(null);
  //   setProgress(0);
  // };

  // useEffect(() => {
  //   if (progress === 100) {
  //     toast.success("Upload successful");
  //   }
  // }, [progress]);

  return (
    <div className="max-w-lg mx-auto p-4 space-y-4">
      {/* <p className="text-sm text-muted-foreground">
        To use this functionality, please ensure your backend signature route is
        working.
      </p>
      {/* <input
        type="file"
        accept="video/*"
        onChange={handleFileChange}
        className="block w-full text-sm file:text-sm file:bg-primary file:text-white file:rounded file:px-4 file:py-1"
      /> */}

      {/* <IKContext
        publicKey={publicKey}
        urlEndpoint={urlEndpoint}
        authenticator={authenticator}
      >
        <input type="file" accept="video/*" onChange={handleChange} />

        <IKUpload
          ref={uploadRef}
          file={videoFile}
          fileName={videoFile?.name || "video.mp4"}
          useUniqueFileName={true}
          tags={["react-video"]}
          onSuccess={(res) => {
            console.log("Upload success", res.url);
          }}
          onError={(err) => {
            console.error("Upload error", err);
          }}
          onUploadProgress={(progressEvent) => {
            const percentage = Math.round(
              (progressEvent.loaded / progressEvent.total) * 100
            );
            setProgress(percentage);
          }}
          onUploadStart={() => {
            setLoading(true);
            toast("Uploading started...");
          }}
          className="hidden"
        />
      </IKContext>

      <Button
        className={"w-fit"}
        onClick={() => uploadRef.current.upload()}
        disabled={!videoFile}
      >
        Upload
      </Button> */}

      {/* {progress > 0 && <Progress value={progress} />}
      {videoUrl && (
        <video
          src={videoUrl}
          controls
          className="w-full rounded-lg mt-4 border"
        />
      )}  */}

      <p>Contact me!!</p>
    </div>
  );
};

export default Contact;
