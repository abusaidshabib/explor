import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Dashboard = () => {
  return (
    <div className="h-full w-full flex">
      <Sidebar/>
      <div className="min-h-screen h-full w-full bg-light-100 dark:!bg-dark-100">
        <main className="">
          <Navbar/>
          <div className="h-full w-full px-8">
            <Outlet></Outlet>
          </div>
          <div>
            <Footer/>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;