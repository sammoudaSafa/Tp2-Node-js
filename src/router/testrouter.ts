import { Router } from 'express';
import { ParticipantModel } from '../model/participantmodel';
import { wrap } from '../util';


const testRouter = Router();
const participantsMap = new Map<number, ParticipantModel>();
participantsMap.set(1, { participantId: 1, participantName: 'yazid' });
participantsMap.set(2, { participantId: 2, participantName: 'yomna' });
participantsMap.set(3, { participantId: 3, participantName: 'faiez' });

testRouter.get('/', wrap(async (_req, res) => {
    const participants = Array.from(participantsMap.values());
    return res.send(participants);
}));

testRouter.post('/', wrap(async (req, res) => {
    const receivedData: { text: string, searchString: string; } = req.body;
    const stringExists = receivedData.text.includes(receivedData.searchString);
    return res.send({ valid: stringExists });
}));

export { testRouter };
