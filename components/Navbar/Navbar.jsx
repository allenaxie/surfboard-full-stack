import classes from './Navbar.module.scss';
import { useState } from 'react';
import { Row, Col, Modal } from 'antd';
import NewMeetingForm from '../NewMeetingForm/NewMeetingForm';
import Link from 'next/link';

const Navbar = ({ }) => {

    const [isModalVisible, setIsModalVisible] = useState(false);
    console.log(setIsModalVisible)

    const handleOk = () => {
        setIsModalVisible(false);
    }

    const handleCancel = () => {
        setIsModalVisible(false);
    }

    return (
        <div className={classes.container}>
            <div
                className={classes.logo}
            >
                Surfboard Meetings
            </div>
            <div
                className={classes.navLinks}
            >
                <div><Link href="/">Home</Link></div>
                <button onClick={() => setIsModalVisible(true)}>Create Topic</button>
            </div>
            <Modal
                title="Basic Modal"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={null}
            >
                <NewMeetingForm />
            </Modal>
        </div>
    )
}

export default Navbar;