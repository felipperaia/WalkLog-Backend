import { Request, Response } from 'express';
import Walk from '../models/Walk';

export const createWalk = async (req: Request, res: Response) => {
  try {
    const walk = await Walk.create(req.body);
    res.status(201).json(walk);
  } catch (error) {
    res.status(400).json({ message: 'Erro ao criar caminhada', error });
  }
};

export const getWalks = async (_req: Request, res: Response) => {
  try {
    const walks = await Walk.find().sort({ date: -1 });
    res.json(walks);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao obter histórico', error });
  }
};

export const getWalkById = async (req: Request, res: Response) => {
  try {
    const walk = await Walk.findById(req.params.id);
    if (!walk) return res.status(404).json({ message: 'Caminhada não encontrada' });
    res.json(walk);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao obter detalhes', error });
  }
};