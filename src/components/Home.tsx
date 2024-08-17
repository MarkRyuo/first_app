

function HomeScreen() {
    let Names = [
        "Jhon Mark",
        "Leomar",
        "Neil",
        "Laud"
    ] ;

    Names = [] ;

    // if(Names.length == 0 ) {
    //     return <p>No Value found</p> ;
    // } 
    
    const Owner = "Moda" ;
    
    return (
        <> {
            // * This is Comment 
        }
            <div className="container-lg">
                <nav className="container-sm">
                    <button type="button" className="btn btn-success">Watch Video</button>
                    {Names.length ==  0? <p>No Value found</p>: null}
                    {Names.map(names => <p className="bg-warning">{names}</p>) }
                    <h1>{Owner}</h1>
                </nav>
            </div>
        </>
    ) ;
}
export default HomeScreen ;