import { Request, Response } from "express";
import userModel from "./userModel";

export const createUser = async (req: Request, res: Response) => {
    try {
      
        const { name } = req.body;
        const user = await userModel.create(
            name
        )

        return res.status(201).json({
            message: "User created successfully",
            data: user
        })

  } catch (error) {
    return res.status(404).json({
      message: "Erro creating user",
    });
  }
};

export const viewUser = async (req: Request, res: Response) => {
    try {
      
        const user = await userModel.find()

        return res.status(201).json({
            message: "Viewing User",
            data: user
        })

  } catch (error) {
    return res.status(404).json({
      message: "Erro creating user",
    });
  }
};
