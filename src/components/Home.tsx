// Import




function HomeScreen() {
    const Names = ["Jhon Mark", "Leomar", "Neil", "Laud"];

    // Names = [];

  // if(Names.length == 0 ) {
  //     return <p>No Value found</p> ;
  // }

  const Get_Message = () => {
    return Names.length == 0 ? <p>No Value found</p> : null;
  }

    return (
        <>
            {
            // * This is Comment
            }
                <div className="container-lg">
                    <nav className="container-sm">
                        <button type="button" className="btn btn-success">
                            Watch Video
                        </button>
                        <p className="H1">List</p>
                        {/* 
                            condition ? < expression if true> : < expression if false>
                        */}
                        {/* {Names.length == 0 ? <p>No Value found</p> : null} */}

                        {Get_Message()}

                        {Names.map((names) => (<p className="list-group-item" key={names}>{names}</p>))}
                    </nav>
                </div>
            </>
        );
}

export default HomeScreen;
