import { ActivityModel } from '../src/model/activitymodel';
import { ParticipantModel } from '../src/model/participantmodel';
declare global {
    module Express {
        interface Request {
            activity: ActivityModel;
        }
        interface Request {
            participant: ParticipantModel;
        }
    }
}
