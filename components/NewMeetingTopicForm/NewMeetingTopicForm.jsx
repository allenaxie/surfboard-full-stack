import classes from './NewMeetingTopicForm.module.scss';
import { Form, Input, InputNumber, Select } from 'antd';
import { useRouter } from 'next/router';

const NewMeetingTopicForm = ({ setIsModalVisible, setAgendaSelected, topicsUpdated, setTopicsUpdated }) => {
    const router = useRouter();
    const [form] = Form.useForm();

    const onFinish = async (values) => {
        // add to meetings
        createMeetingTopic(values);
        // close modal
        setIsModalVisible(false);
        // close right col
        setAgendaSelected(false);
        // get new data
        setTopicsUpdated(topicsUpdated * -1);
        // reset form
        form.resetFields();
        // back to home page
        router.push('/');
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

    const handleOptionChange = (value) => {
        console.log(value);
    }

    return (
        <Form
            name="New Meeting"
            form={form}
            layout='vertical'
            labelCol={{
                span: 16,
            }}
            wrapperCol={{
                span: 16,
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
                <InputNumber min={1} max={9999} step={5} />
            </Form.Item>
            <Form.Item
                label="Owner"
                name="owner"
            >
                <Select
                    onChange={handleOptionChange}
                >
                    <Select.Option value="CEO">CEO</Select.Option>
                    <Select.Option value="CTO">CTO</Select.Option>
                    <Select.Option value="Stephen Durry">Stephen Durry</Select.Option>
                    <Select.Option value="Harry Patter">Harry Patter</Select.Option>
                    <Select.Option value="Developer Strange">Developer Strange</Select.Option>
                    <Select.Option value="Cosmos">Cosmos</Select.Option>
                    <Select.Option value="伍六七">伍六七</Select.Option>
                </Select>
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
                <button type="submit" className="button">
                    Add meeting topic
                </button>

            </Form.Item>
        </Form>
    )
}

export default NewMeetingTopicForm;