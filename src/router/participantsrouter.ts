import { Router } from 'express';
import { ParticipantModel } from '../model/participantmodel';
import { wrap } from '../util';

const participantsRouter = Router();
const participantsMap = new Map<number, ParticipantModel>();
participantsMap.set(1, { participantId: 1, participantName: 'yazid' });
participantsMap.set(2, { participantId: 2, participantName: 'yomna' });
participantsMap.set(3, { participantId: 3, participantName: 'faiez' });

let nextParticipantId = 4;
// participantsRouter.use('/', wrap(async (_req, res) => {
//     return res.send('participants router');
// }));
participantsRouter.use('/:participantId', wrap(async (req, res, next) => {
    const participant = participantsMap.get(parseInt(req.params.participantId));
    if (participant === undefined) { return res.sendStatus(404); }
    req.participant = participant;
    return next();
}));
participantsRouter.get('/', wrap(async (_req, res) => {
    const participants = Array.from(participantsMap.values());
    return res.send(participants);
}));
// participantsRouter.get('/:participantId', wrap(async (req, res, next) => {
//     const activity = participantsMap.get(parseInt(req.params.participantId));
//     if (activity === undefined) { return res.sendStatus(404); }
//     req.activity = activity;
//     return next();
// }));



// participantsRouter.get('/:participantId', wrap(async (req, res) => {
//     return res.send(req.participant);
// }));

participantsRouter.post('/', wrap(async (req, res) => {
    const participant: ParticipantModel = req.body;
    participant.participantId = nextParticipantId++;
    participantsMap.set(participant.participantId, participant);
    return res.send(participant);
}));

export { participantsRouter };
// export { participantsMap };
