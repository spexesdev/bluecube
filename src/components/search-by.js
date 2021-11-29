const SearchBy = () => {

    const setActive = e => {
        const sortList = document.querySelector(".sort-list");
        sortList.childNodes.forEach(item => {
            item.classList.remove("active");
        })

        e.target.classList.add("active");

    }

    return (
        <ul className="sort-list">
            <li onClick={setActive}>All</li>
            <li onClick={setActive}>People</li>
            <li onClick={setActive}>Drinks</li>
            <li onClick={setActive}>Cities</li>
            <li onClick={setActive}>Nature</li>
            <li onClick={setActive}>Beverages</li>
            <li onClick={setActive}>Pets</li>
        </ul>
    );
}

export default SearchBy;
