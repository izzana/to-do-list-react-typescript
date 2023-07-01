import React, {FC} from "react";
import Header from "../components/atoms/header/Header";
import SubHeader from "../components/molecules/subHeader/SubHeader";
import NavBar from "../components/molecules/navBar/NavBar";
import ListTasks from "../components/molecules/listTasks/ListTasks";
import "./Home.css";

const Home: FC<any> = (params: any) => {
  return (
    <>
      <Header title="Today's Task"/>
      <SubHeader/>
      <NavBar />
      <ListTasks />
    </>
  )
}

export default Home;