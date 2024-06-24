import { cva } from "class-variance-authority";
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function cv<T extends Record<string, string>>(...args: Parameters<typeof cva<Variants<T>>>) {
  return cva(...args)
}

type Variants<T extends Record<string, string>> = {
  [K in keyof T]: {
    [P in T[K]]: string;
  };
};