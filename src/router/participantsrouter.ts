import { Router } from 'express';
import { ParticipantModel } from '../model/participantmodel';
import { wrap } from '../util';


const participantsRouter = Router();

let nextParticipantId = 4;
participantsRouter.get('/', wrap(async (req, res) => {
    const participantList = Array.from(req.activity.participant.values());
    return res.send(participantList);
}));
participantsRouter.get('/:participantId', wrap(async (req, res) => {
    const participantId = parseInt(req.params.participantId);
    const participant = req.activity.participant.get(participantId);
    if (participant === undefined) {
        return res.sendStatus(404);
    }
    return res.send(participant);
}));
participantsRouter.post('/', wrap(async (req, res) => {
    const newparticipant: ParticipantModel = req.body;
    newparticipant.participantId = nextParticipantId++;
    newparticipant.participantName = (newparticipant.participantName);
    req.activity.participant.set(newparticipant.participantId, newparticipant);
    return res.send({ newparticipant });
}));


// participantsRouter.put('/:participantId', wrap(async (req, res) => {
//     const updatedparticipant: ParticipantModel = req.body;
//     req.activity.participant.set(updatedparticipant.participantId, updatedparticipant);
//     return res.send({ updatedparticipant });
// }));

// participantsRouter.put('/:participantId', wrap(async (req, res) => {
//     const participe: ParticipantModel = req.body;
//     if (!participantsMap.has(participe.participantId)) {
//         return res.sendStatus(404);
//     }
//     participantsMap.set(participe.participantId, participe);
//     return res.send(participantsMap.get(participe.participantId));
// }));


export { participantsRouter };
