import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes/build/cjs/status-codes';

interface UserInterface {
  name: string;
  email: string;
  password: string;
  function_id: string;
}

export const createUser = (req: Request, res: Response) => {
  const data: UserInterface = req.body;

  try {
    return res.status(StatusCodes.CREATED).json(data);
  } catch (error) {
    return res.status(StatusCodes.BAD_REQUEST).json({message: 'Erro interno do servidor'});
  }
};
