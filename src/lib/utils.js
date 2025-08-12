import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { formatDistanceToNow } from "date-fns";
import axios from "axios";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function getTime(time) {
  const formatedTime = formatDistanceToNow(new Date(time), {
    addSuffix: true,
  });

  return formatedTime;
}

export async function uploadImage(file) {
  const formData = new FormData();
  formData.append("image", file);

  try {
    const res = await axios.post(
      `https://api.imgbb.com/1/upload?key=${
        import.meta.env.VITE_IMGBB_API_KEY
      }`,
      formData
    );
    const photoURL = res.data.data.display_url;
    return photoURL;
  } catch (err) {
    console.log(err);
    return;
  }
}
