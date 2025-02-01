import Header from "@/components/header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  
  return (
    <div>
      <main className="main-screen container" style={{backgroundColor : "white"}}>
        <Header />
        <div style={{height: "calc(100% - 180px)", overflowY: "scroll", paddingBottom: "20px"}} className="content"><Outlet /></div>
        <div style={{position: "absolute", bottom: "0px",overflowX: "hidden", left: "0px",right: "0px",  height: "80px", backgroundColor: "black", width: '100%', color: "white", display: "flex", justifyContent: "center", alignItems: "center"}}>Made by Rahul</div>
      </main>
    </div>
  );
};

export default AppLayout;
