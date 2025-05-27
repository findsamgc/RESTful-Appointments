import { Response } from "express";
import fs from "fs";

export const generateName = () => {
  const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < 7; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  result += "-";
  for (let i = 0; i < 4; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  result += "-";
  for (let i = 0; i < 4; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  for (let i = 0; i < (Math.random() > 0.5 ? 2 : 3); i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};

export const download = async (res: Response, file: string) => {
  return new Promise<void>((resolve, reject) => {
    res.download(file, (err) => {
      if (err) return reject(err);
      resolve();
    });
  });
};

export const remove = async (file: string) => {
  return new Promise<void>((resolve, reject) => {
    fs.unlink(file, (err) => {
      if (err) return reject(err);
      resolve();
    });
  });
};
