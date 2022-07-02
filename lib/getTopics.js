import dbConnect from '../utilities/dbConnect';
import MeetingTopic from '../models/meetingTopic';

export async function loadTopics() {

    dbConnect();

    // find all meetings
    const meetingTopic = await MeetingTopic.find({});
    const data = JSON.parse(JSON.stringify(meetingTopic));

    return data;

  }