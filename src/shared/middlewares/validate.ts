import { Request, Response, NextFunction } from 'express';
import { ObjectSchema } from 'joi';
import { StatusCodes } from 'http-status-codes';

export const validateRequestBody = (bodySchema: ObjectSchema) => async (req: Request, res: Response, next: NextFunction) => {
  try {
    await bodySchema.validateAsync(req.body);
    next(); 
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({ error: 'Erro de validação do corpo da solicitação' });
  }
};
