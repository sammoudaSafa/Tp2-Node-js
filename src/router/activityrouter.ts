import { Router } from 'express';
import { ActivityModel } from '../model/activitymodel';
import { wrap } from '../util';

const activityRouter = Router();
const activitiesMap = new Map<number, ActivityModel>();
activitiesMap.set(1, { activityId: 1, activityName: 'Copa', startDate: new Date() });
activitiesMap.set(2, { activityId: 2, activityName: 'Tour', startDate: new Date() });
activitiesMap.set(3, { activityId: 3, activityName: 'Evennement', startDate: new Date() });

activityRouter.get('/', wrap(async (_req, res) => {
    const activities = Array.from(activitiesMap.values());
    return res.send(activities);
}));

activityRouter.post('/', wrap(async (req, res) => {
    const receivedData: { text: string, searchString: string; } = req.body;
    const stringExists = receivedData.text.includes(receivedData.searchString);
    return res.send({ valid: stringExists });
}));

export { activityRouter };
