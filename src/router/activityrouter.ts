import { Router } from 'express';
import { wrap } from '../util';

const activityRouter = Router();

activityRouter.get('/', wrap(async (_req, res) => {
    const objectToSend = { list: [1, 2, 3, 4], text: 'Testrandom' };
    return res.send(objectToSend);
}));

activityRouter.post('/', wrap(async (req, res) => {
    const receivedData: { text: string, searchString: string; } = req.body;
    const stringExists = receivedData.text.includes(receivedData.searchString);
    return res.send({ valid: stringExists });
}));

export { activityRouter };
