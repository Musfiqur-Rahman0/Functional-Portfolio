import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { formatDistanceToNow } from "date-fns";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function getTime(time) {
  const formatedTime = formatDistanceToNow(new Date(time), {
    addSuffix: true,
  });

  return formatedTime;
}
