import { Router } from 'express';
import { wrap } from '../util';

const testRouter = Router();

testRouter.get('/', wrap(async (_req, res) => {
    const objectToSend = { list: [1, 2, 3], text: 'random' };
    return res.send(objectToSend);
}));

testRouter.post('/', wrap(async (req, res) => {
    const receivedData: { text: string, searchString: string; } = req.body;
    const stringExists = receivedData.text.includes(receivedData.searchString);
    return res.send({ valid: stringExists });
}));

export { testRouter };
