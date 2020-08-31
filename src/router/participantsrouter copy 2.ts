// import { Router } from 'express';
// import { ParticipantModel } from '../model/participantmodel';
// import { wrap } from '../util';

// const participantsRouter = Router();
// const participantsMap = new Map<number, ParticipantModel>();
// participantsMap.set(1, { participantId: 1, participantName: 'yazid' });
// participantsMap.set(2, { participantId: 2, participantName: 'yomna' });
// participantsMap.set(3, { participantId: 3, participantName: 'faiez' });

// let nextParticipantId = 4;
// participantsRouter.get('/', wrap(async (_req, res) => {
//     const participants = Array.from(participantsMap.values());
//     return res.send(participants);
// }));

// participantsRouter.post('/', wrap(async (req, res) => {
//     const participant: ParticipantModel = req.body;
//     participant.participantId = nextParticipantId++;
//     participantsMap.set(participant.participantId, participant);
//     return res.send({ participant });
// }));

// participantsRouter.get('/:participantId', wrap(async (req, res) => {
//     const participantId = parseInt(req.params.participantId);
//     if (!participantsMap.has(participantId)) {
//         return res.sendStatus(404);
//     }
//     return res.send(participantsMap.get(participantId));
// }));

// participantsRouter.put('/:participantId', wrap(async (req, res) => {
//     const participe: ParticipantModel = req.body;
//     if (!participantsMap.has(participe.participantId)) {
//         return res.sendStatus(404);
//     }
//     participantsMap.set(participe.participantId, participe);
//     return res.send(participantsMap.get(participe.participantId));
// }));

// participantsRouter.delete('/:participantId', wrap(async (req, res) => {
//     const participantId = parseInt(req.params.participantId);
//     participantsMap.delete(participantId);
//     return res.send();
// }));


// export { participantsRouter };
