import classes from './Navbar.module.scss';
import { Row, Col } from 'antd';
import Link from 'next/link';

const Navbar = () => {
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
                    <div>Create Topic</div>
                </div>
        </div>
    )
}

export default Navbar;