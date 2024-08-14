

function HomeScreen() {
    const NAMES = [
        "Jhon Mark",
        "Leomar",
        "Neil",
        "Laud"
    ]

    
    return (
        <> {
            // This is Comment 
        }
            <div className="container-md">
                <nav className="container-sm">
                    <button type="button" className="btn btn-success">Watch Video</button>
                    {NAMES.map(names => <p className="bg-warning">{names}</p>) }
                </nav>
            </div>
        </>
    ) ;
}
export default HomeScreen ;