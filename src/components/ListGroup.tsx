import { Fragment } from "react/jsx-runtime";


function ListGroup() {
    return (
    <Fragment> 
        { 
        // Fragment for use another element, to comment use curly braces 
        } 
        <h1>This is a List group</h1>
        <ul className="list-group">
            <li className="list-group-item">An item</li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
            <li className="list-group-item">A fourth item</li>
            <li className="list-group-item">And a fifth one</li>
        </ul>
    </Fragment>
    );
}

export default ListGroup;