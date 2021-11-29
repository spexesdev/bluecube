const SummaryItems = (props) => {

    const { searchResults } = props;

    return (
        <div className="item">
            <div className="image-container">
                <img src={searchResults.urls.thumb} alt="" />
                <h3>{ searchResults.user.first_name }</h3>
                <span><i className="icofont-location-pin"></i> {searchResults.user.location || "-"}</span>
                
            </div>
            <div className="details">
                <h3>{ searchResults.user.first_name }</h3>
                <span><i className="icofont-location-pin"></i> {searchResults.user.location || "-"}</span>
                <div className="buttons">
                    <button className="btn btn-like"><i className="icofont-thumbs-up"> { searchResults.likes }</i></button>
                    <button className="btn btn-dislike"><i className="icofont-thumbs-down"></i></button>
                </div>
            </div>
        </div>
    );
}

export default SummaryItems;
