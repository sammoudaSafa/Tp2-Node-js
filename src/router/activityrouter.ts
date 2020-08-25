import { Router } from 'express';
import { ActivityModel } from '../model/activitymodel';
import { wrap } from '../util';

const activityRouter = Router();
const activitiesMap = new Map<number, ActivityModel>();
activitiesMap.set(1, { activityId: 1, activityName: 'Coupe', startDate: new Date() });
activitiesMap.set(2, { activityId: 2, activityName: 'Tour', startDate: new Date() });
activitiesMap.set(3, { activityId: 3, activityName: 'Evennement', startDate: new Date() });

let nextActivityId = 4;
activityRouter.use('/:activityId', wrap(async (req, res, next) => {
    const activity = activitiesMap.get(parseInt(req.params.activityId));
    if (activity === undefined) { return res.sendStatus(404); }
    req.activity = activity;
    return next();
}));

activityRouter.get('/', wrap(async (_req, res) => {
    const activities = Array.from(activitiesMap.values());
    return res.send(activities);
}));

activityRouter.get('/:activityId', wrap(async (req, res) => {
    return res.send(req.activity);
}));

activityRouter.post('/', wrap(async (req, res) => {
    const activity: ActivityModel = req.body;
    activity.activityId = nextActivityId++;
    activitiesMap.set(activity.activityId, activity);
    return res.send(activity);
}));


activityRouter.delete('/:activityId', wrap(async (req, res) => {
    activitiesMap.delete(req.activity.activityId);
    return res.sendStatus(204);
}));


export { activityRouter };
