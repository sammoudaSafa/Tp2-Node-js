import { ParticipantModel } from './participantmodel';
export interface ActivityModel {

    activityId: number;
    activityName: string;
    startDate: Date;
    participants?: Map<number, ParticipantModel>;

}
