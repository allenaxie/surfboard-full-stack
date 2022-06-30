import classes from './NewMeetingForm.module.scss';
import { Form, Input, InputNumber } from 'antd';

const NewMeetingForm = () => {

    const onFinish = (values) => {
        console.log(values);
    }

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

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
                name="meetingDuration"
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