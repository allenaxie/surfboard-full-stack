import dbConnect from "../../../utilities/dbConnect";
import MeetingTopic from "../../../models/meetingTopic";

export default async function handler(req, res) {
    const {
        query: { id },
        method
    } = req;

    dbConnect();

    if (method === 'PUT') {
        try {
            // find and update the meeting topic
            const meetingTopic = await MeetingTopic.findByIdAndUpdate(id, req.body, {
                new: true,
                runValidators: true,
            })
            // if topic not found
            if (!meetingTopic) {
                res.status(400).json({ message: 'Meeting topic does not exist.' });
            }
            // if successful
            res.status(200).json({ message: 'Meeting topic updated', data: meetingTopic })
        } catch (error) {
            console.log(error);
            res.status(400).json({ message: 'PUT request failed' })
        }
    } else if (method === 'DELETE') {
        try {
            // find topic
            const deletedTopic = await MeetingTopic.findByIdAndDelete({ _id: id });
            // if no topic
            if (!deletedTopic) {
                res.status(400).json({ message: 'No meeting topic found.' })
            }
            // if successful
            res.status(200).json({ message: `Meeting ${id} deleted`, data: deletedTopic })
        } catch (error) {
            console.log(error);
            res.status(400).json({ message: 'DELETE request failed' })
        }
    } else {
        res.status(400).json({ message: 'Request failed' });
    }

}