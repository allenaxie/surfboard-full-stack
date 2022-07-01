import classes from './NewMeetingTopicForm.module.scss';
import { Form, Input, InputNumber } from 'antd';
import {useRouter} from 'next/router';

const NewMeetingTopicForm = ({setIsModalVisible}) => {
    const router = useRouter();
    const [form] = Form.useForm();

    const onFinish = async (values) => {
        console.log(values);
        // add to meetings
        createMeetingTopic(values);
        // close modal
        setIsModalVisible(false);
        form.resetFields();
    }

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const createMeetingTopic = async (values) => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/meetingTopics`, {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(values)
        })
        // redirect to home page
        router.push('/');
    }

    return (
        <Form
            name="New Meeting"
            form={form}
            layout='vertical'
            labelCol={{
                span: 22,
            }}
            wrapperCol={{
                span: 22,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label="Title"
                name="title"
                rules={[
                    {
                        required: true,
                        message: 'Please input a title!',
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Duration of topic (minutes)"
                name="timeEstimate"
                rules={[
                    {
                        required: true,
                        message: 'Please input an estimated meeting duration!',
                    },
                ]}
            >
                <InputNumber min={1} max={9999} step={5}/>
            </Form.Item>
            <Form.Item
                label="Description"
                name="description"
                rules={[
                    {
                        required: true,
                        message: 'Please input a description for your meeting!',
                    },
                ]}
            >
                <Input.TextArea />
            </Form.Item>
            <Form.Item>
            <button type="submit">
                Add meeting
            </button>

            </Form.Item>
        </Form>
    )
}

export default NewMeetingTopicForm;