import { useState, useEffect } from 'react';
import { ApiKey } from '../data/ApiKey';
import SearchBy from './search-by';

const TopBar = (props) => {

    const { setMainClass, setSearchResults } = props;

    const [txtSearch, setTxtSearch] = useState("");
    const [onToggleMenu, setOnToggleMenu] = useState(sessionStorage.getItem("menu_state"));
    const [toggleState, setToggleState] = useState(sessionStorage.getItem("toggle_state"));

    useEffect(() => {
        if (toggleState === "toggle") {
            setMainClass("main");
        } else {
            setMainClass("main active");
        }
    }, [])

    const handleToggle = () => {
        if (toggleState === "toggle") {
            setOnToggleMenu(false);
            setToggleState("toggle active");

            //Other parameters;
            setMainClass("main active");
            sessionStorage.setItem("menu_state", `closed ${onToggleMenu}`);
            sessionStorage.setItem("toggle_state", "toggle active");

        } else {
            setOnToggleMenu(true);
            setToggleState("toggle");

            //Other parameters;
            setMainClass("main");
            sessionStorage.setItem("menu_state", `open ${onToggleMenu}`);
            sessionStorage.setItem("toggle_state", "toggle");

        }
    }

    const fetchSearchItems = () => {
        //Make the API call
        const options = {
            method: "GET",
        }

        fetch(`https://api.unsplash.com/photos?query=${txtSearch}&client_id=${ApiKey}&page=1&per_page=20&orientation=portrait`, options)
            .then(response => {
                return response.json()
            })
            .then(response => {
                if (response) {
                    setSearchResults(response.filter(item => item.height > item.width))
                } else {
                    alert("Error occured. Please try again after some time.");
                }
            })
            .catch(error => {
                alert(error.message);
            })
    }

    const searchForItems = e => {
        if (e.key === "Enter") {
            fetchSearchItems()
        }
    }

    return (
        <>
            <div className="topbar">
                <div id="onToggleMenu"
                    className={toggleState}
                    onClick={handleToggle}>
                </div>
                <div className="search">
                    <input
                        type="text"
                        className="form-control"
                        id="txtSearch"
                        name="txtSearch"
                        value={txtSearch}
                        placeholder="Find something"
                        onKeyDown={searchForItems}
                        onChange={e => setTxtSearch(e.target.value)}
                    />
                    <i className="icofont-search" onClick={fetchSearchItems}></i>
                </div>
                <div className="user">
                    <i className="icofont-bell-alt"></i>
                </div>
            </div>
            <SearchBy />

        </>
    );
}

export default TopBar;
