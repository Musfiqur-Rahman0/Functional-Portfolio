import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}


export const getReadAbleDate = (isoDate) => {
  const converted = new Date(isoDate);
  const options = {
    day : "2-digit",
    month : "long",
    year : "numeric",
    timeZone : "UTC"
  }
  const formatedDate = converted.toLocaleDateString("en-GB", options);
  return formatedDate;
}