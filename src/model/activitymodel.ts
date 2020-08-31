import { ParticipantModel } from './participantmodel';
export class ActivityModel {
    public activityId: number;
    public activityName: string;
    public startDate: Date;
    public participant: Map<number, ParticipantModel>;
}
