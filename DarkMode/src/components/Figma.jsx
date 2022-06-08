import { Switch,useColorMode,Button } from "@chakra-ui/react";
import React from "react";
import Styles from "./Figma.module.css";
const Figma = () => {
    const {colorMode,toggleColorMode}=useColorMode();
  return (
    <div className={Styles.container}>
      <Button onClick={()=>toggleColorMode()}>Toogle</Button>  
      <div className={Styles.top}>
        <div className={Styles.dashboard}>My Dashboard</div>
        <div className={Styles.dark}>
          <p>Dark Mode</p>
        </div>
        {/* <FormControl display="flex" alignItems="center"> */}
        <Switch id="email-alerts" />
        {/* </FormControl> */}
      </div>
      <div className={Styles.subcontainer}>
        <p>Active Users</p>
        <p>for August 2022</p>
      </div>
      <div className={Styles.sidebar}>
          <div className={Styles.sideimg}>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVDaNCpbUcK0a9kCgIkU4U_7dD0bOu-19ajA&usqp=CAU" alt="" />
          </div>
      </div>
    </div>
  );
};

export default Figma;
