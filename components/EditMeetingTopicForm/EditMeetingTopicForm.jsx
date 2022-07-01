import classes from './EditMeetingTopicForm.module.scss';
import { Form, Input, InputNumber } from 'antd';
import {useRouter} from 'next/router';
import {AiOutlineClose} from 'react-icons/ai';

const EditMeetingForm = ({currentTopic, form, setAgendaSelected, topicsUpdated, setTopicsUpdated}) => {
    console.log('current topic:', currentTopic);
    const router = useRouter();

    const onFinish = async (values,e) => {
        // edit topic
        editMeetingTopic(values);
        // close right column
        setAgendaSelected(false);
        // get new data
        setTopicsUpdated(topicsUpdated * -1);
        router.push('/');
    }

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const editMeetingTopic = async (values) => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/meetingTopics/${currentTopic._id}`, {
            method: 'PUT',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(values)
        })
    }

    const handleDelete = async () => {
        try {
          // delete topic
          const deletedTopic = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/meetingTopics/${currentTopic._id}`, {
            method: 'DELETE',
          })
          // close right column
          setAgendaSelected(false);
          setTopicsUpdated(topicsUpdated * -1);
          router.push('/');
    
        } catch (error) {
          console.log(error);
        }
      }

    return (
        <div                 
            className={classes.formContainer}
        >
            <div className={classes.topActionBtns}>
                <button className={classes.closeIconBtn} onClick={() => setAgendaSelected(false)}>
                    <AiOutlineClose className={classes.closeSVG}/>
                </button>
                <div className={classes.deleteTopicBtn}>
                    <button onClick={handleDelete}>Delete</button>
                </div>
            </div>
            <Form
                name="New Meeting Topic"
                form={form}
                layout='vertical'
                labelCol={{
                    span: 22,
                }}
                wrapperCol={{
                    span: 22,
                }}
                onFinish={(e) => onFinish(e)}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Title:"
                    name="title"
                    rules={[
                        {
                            required: true,
                            message: 'Please input a title!',
                        },
                    ]}
                >
                    <Input 
                    placeholder={currentTopic.title}
                    />
                </Form.Item>
                <Form.Item
                    label="Duration of topic (minutes):"
                    name="timeEstimate"
                    rules={[
                        {
                            required: true,
                            message: 'Please input an estimated meeting duration!',
                        },
                    ]}
                    className={classes.timeEstimateContainer}
                >
                    <InputNumber min={1} max={9999} step={5} 
                    placeholder={currentTopic.timeEstimate}
                    />
                </Form.Item>
                <Form.Item
                    label="Description:"
                    name="description"
                    rules={[
                        {
                            required: true,
                            message: 'Please input a description for your meeting!',
                        },
                    ]}
                >
                    <Input.TextArea 
                    placeholder={currentTopic.description}
                    />
                </Form.Item>
                <Form.Item>
                <button type="submit">
                    Edit meeting
                </button>
                </Form.Item>
            </Form>
        </div>

    )
}

export default EditMeetingForm;