import Header from "@/components/header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  
  return (
    <div>
      <div className="grid-background"></div>
      <main className="main-screen container" style={{backgroundColor : "white"}}>
        <Header />
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
