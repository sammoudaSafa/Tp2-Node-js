import { Router } from 'express';
import { ActivityModel } from '../model/activitymodel';
import { wrap } from '../util';

const activitiesMap = new Map<number, ActivityModel>();
const activitiesRouter = Router();

activitiesRouter.get('/', wrap(async (_req, res) => {
    const objectToSend = { list: [1, 2, 3], text: 'randomText' };
    return res.send(objectToSend);
}));

activitiesRouter.post('/', wrap(async (req, res) => {
    const receivedData: { text: string, searchString: string; } = req.body;
    const stringExists = receivedData.text.includes(receivedData.searchString);
    return res.send({ valid: stringExists });
}));

export { activitiesRouter };
