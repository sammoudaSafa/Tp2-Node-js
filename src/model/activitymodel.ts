import { Participant } from '../model/participantmodel';
export interface ActivityModel {

    activityId: number;
    activityName: string;
    startDate: Date;
    participants?: Map<number, Participant>;

}
