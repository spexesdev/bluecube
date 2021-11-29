import MenuBar from "./menu-bar";
import TopBar from "./topbar";
import { useState } from "react";
import HomeDetails from "../form-details/home-details"

const Home = () => {
    const [mainClass, setMainClass] = useState("main");
    const [searchResults, setSearchResults] = useState([]);

    //Set some variables at first
    sessionStorage.setItem("toggle_state", "toggle");
    sessionStorage.setItem("menu_state", "false");

    return (
        <div className="cont-ainer">
            <MenuBar />
            <div className={mainClass}>
                <TopBar
                    setMainClass={value => setMainClass(value)}
                    setSearchResults={ value => setSearchResults(value) }
                />
                <HomeDetails
                    searchResults={searchResults}
                />
            </div>
        </div>

    );
}

export default Home;
