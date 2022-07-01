import classes from './Navbar.module.scss';
import { useState } from 'react';
import { Avatar, Menu, Dropdown, Button } from 'antd';
import { AiOutlineUser } from 'react-icons/ai';
import { BsWallet2 } from 'react-icons/bs';
import { IoSettingsOutline } from 'react-icons/io5';
import { HiOutlineLogout } from 'react-icons/hi';
import NewMeetingForm from '../NewMeetingForm/NewMeetingForm';
import Link from 'next/link';

const Navbar = ({ }) => {

    // const [isModalVisible, setIsModalVisible] = useState(false);
    // console.log(setIsModalVisible)

    // const handleOk = () => {
    //     setIsModalVisible(false);
    // }

    // const handleCancel = () => {
    //     setIsModalVisible(false);
    // }

    return (
        <div className={classes.container}>
            <div
                className={classes.logo}
            >
                Surfboard Meetings
            </div>
            <div className={classes.userAvatar}>
                    <Dropdown
                        overlay={
                            <>
                                <Menu className={classes.menu}>
                                            <div className={classes.welcome}>
                                                <span >Welcome <span>Joe</span>!</span>
                                            </div>
                                            <Menu.Item key="profile" className={classes.userMenuItem}>
                                                <AiOutlineUser />
                                                <Link href="/profile">
                                                    Profile
                                                </Link>
                                            </Menu.Item>
                                            <Menu.Item key="settings" className={classes.userMenuItem}>
                                                <IoSettingsOutline/>
                                                <span>
                                                    Settings
                                                </span>
                                            </Menu.Item>
                                            <Menu.Item
                                                key="signOut"
                                                className={classes.userMenuItem}
                                            >
                                                <HiOutlineLogout/>
                                                <span>
                                                    Sign Out
                                                </span>
                                            </Menu.Item>
                                </Menu>
                            </>
                        }
                        placement="bottomRight"
                        arrow={true}
                    >
                        <Avatar src="https://joeschmoe.io/api/v1/random" />
                    </Dropdown>
                </div>


            {/* <div
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
            </Modal> */}
        </div>
    )
}

export default Navbar;