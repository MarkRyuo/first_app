import { Fragment } from "react/jsx-runtime";


function ListGroup() {
    const items = [
        'Batangas',
        'Cavite',
        'Laguna',
        'Quezon'
    ] ;

    items.map(item => <li>{item}</li>)

    return (
    <Fragment> 
        { 
        // Fragment for use another element, to comment use curly braces
        } 
        <h1>This is a List group</h1>
        <ul className="list-group">
           {items.map(item => <li>{item}</li>)}
        </ul>
    </Fragment>
    );
}

export default ListGroup;