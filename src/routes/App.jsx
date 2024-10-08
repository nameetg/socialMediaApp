import Header from "../components/Header";
import CreatePost from "../components/CreatePost";
import Footer from "../components/footer";
import Sidebar from "../components/Sidebar";
import PostList from "../components/PostList";
import PostListContextProvider from "../store/post-list-store";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Outlet } from "react-router-dom";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  return (
    <PostListContextProvider>
      <div className="appContainer">
        <Sidebar
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        ></Sidebar>
        <div className="content">
          <Header></Header>
          <Outlet />
          <Footer></Footer>
        </div>
      </div>
    </PostListContextProvider>
  );
}

export default App;
