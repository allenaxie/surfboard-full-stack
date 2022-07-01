import classes from './NewMeetingForm.module.scss';
import { Form, Input, InputNumber } from 'antd';
import {useRouter} from 'next/router';

const NewMeetingForm = ({setIsModalVisible}) => {
    console.log(setIsModalVisible);
    const router = useRouter();

    const onFinish = async (values) => {
        console.log(values);
        // add to meetings
        createMeeting(values);
        // close modal
        setIsModalVisible(false);
    }

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const createMeeting = async (values) => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/meetings`, {
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
            layout='vertical'
            labelCol={{
                span: 22,
            }}
            wrapperCol={{
                span: 22,
            }}
            initialValues={{
                remember: true,
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
                label="Duration of Meeting (minutes)"
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

export default NewMeetingForm;