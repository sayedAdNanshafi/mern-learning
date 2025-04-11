// import AppNav from "../components/AppNav";
import Map from "../components/Map";
import Sidebar from "../components/SideBar";
import User from "../components/User";
import { useAuth } from "../contexts/FakeAuthContext";
import styles from './AppLayout.module.css'


export default function AppLayout(){
    return <div className={styles.app}>
       <Sidebar/>
       <Map/>
       <User/>
       
    </div>
}