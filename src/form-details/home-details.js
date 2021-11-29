import SummaryItems from "../components/summary-items";

const HomeDetails = (props) => {

    const output = props.searchResults.map((item, index) => {
        return (<SummaryItems
            key={index}
            searchResults={item}
        />)
    })
    return (
        <div className="branch-summaries">
            <div className="summaries">
                <div className="title">
                    <h3>Search Results</h3>
                </div>
                <div className="summaries-data">
                    {output}
                </div>
            </div>
        </div>
    );
}

export default HomeDetails;