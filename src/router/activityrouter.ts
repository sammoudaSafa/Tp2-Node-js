import { Router } from 'express';
import { activitiesMap } from '../datamap';
import { ActivityModel } from '../model/activitymodel';
import { ParticipantModel } from '../model/participantmodel';
import { wrap } from '../util';
import { participantsRouter } from './participantsrouter';
const activityRouter = Router();


activitiesMap.set(1, { activityId: 1, activityName: 'Coupe', startDate: new Date('2020-05-12'), participant: new Map<number, ParticipantModel>() });
const participantsactivite1 = activitiesMap.get(1)!.participant;
participantsactivite1.set(1, { participantId: 1, participantName: 'yazid' });
participantsactivite1.set(2, { participantId: 2, participantName: 'yomna' });
let nextActivityId = 4;

activityRouter.use('/:activityId', wrap(async (req, res, next) => {
    const activity = activitiesMap.get(parseInt(req.params.activityId));
    if (activity === undefined) { return res.sendStatus(404); }
    req.activity = activity;
    return next();
}));

activityRouter.get('/', wrap(async (_req, res) => {
    const activities = Array.from(activitiesMap.values());
    const affichedActivityList = activities.map(activityModel => {
        const copieActivityModel = { ...activityModel };
        return copieActivityModel;
    });
    for (let i: number = 0; activities.length > i; i++) {
        delete activities[i].participant;
    }
    return res.send(affichedActivityList);
}));

activityRouter.get('/:activityId', wrap(async (req, res) => {
    return res.send(req.activity);
}));

activityRouter.post('/', wrap(async (req, res) => {
    const activity: ActivityModel = req.body;
    activity.activityId = nextActivityId++;
    activity.startDate = new Date(activity.startDate);
    activitiesMap.set(activity.activityId, activity);
    return res.send({ activity });
}));

activityRouter.put('/:activityId', wrap(async (req, res) => {
    const updatedActivity: ActivityModel = req.body;
    req.activity.activityName = updatedActivity.activityName;
    req.activity.startDate = updatedActivity.startDate;
    return res.send(req.activity);
}));

activityRouter.delete('/:activityId', wrap(async (req, res) => {
    activitiesMap.delete(req.activity.activityId);
    return res.sendStatus(204);
}));

activityRouter.use('/:activityId/participant', participantsRouter);

export { activityRouter };
