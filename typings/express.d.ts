import { ActivityModel } from '../src/model/activitymodel';

declare global {
    module Express {
        interface Request {
            activity: ActivityModel;
        }
    }
}
