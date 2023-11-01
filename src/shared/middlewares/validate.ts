import { Request, Response, NextFunction } from 'express';
import { ObjectSchema } from 'joi';

export const validateRequestBody = (bodySchema: ObjectSchema) => async (req: Request, res: Response, next: NextFunction) => {
  try {
    await bodySchema.validateAsync(req.body);
    next(); 
  } catch (error) {
    res.status(400).json({ error: 'Erro de validação do corpo da solicitação' });
  }
};
