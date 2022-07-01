import dbConnect from "../../../utilities/dbConnect";
import MeetingTopic from "../../../models/meetingTopic";

export default async function handler (req,res) {
    const {method} = req;

    dbConnect();

    if (method === 'GET') {
        try {
            // find all meetings
            const meetingTopic = await MeetingTopic.find({});
            res.status(200).json({message: 'Success', data: meetingTopic})
        } catch(error) {
            console.log(error);
            res.status(400).json({message: 'GET request failed'})
        }
    } else if (method === 'POST') {
        try {
            // create meeting
            const meeting = await MeetingTopic.create(req.body);
            res.status(201).json({message: 'Meeting has been created', data: meeting});
        } catch (error) {
            console.log(error);
            res.status(400).json({message: 'POST request failed'})
        }
    }
    else {
        res.status(400).json({message: 'Request failed'})
    }
}