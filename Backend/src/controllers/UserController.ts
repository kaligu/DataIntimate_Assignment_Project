import express from "express";

export const loginUser = async (
  req: express.Request,
  res: express.Response
) => {
    console.log(req);
};

export const registerUser = async (
    req: express.Request,
    res: express.Response
  ) => {
      console.log(req.body.userData);
  };