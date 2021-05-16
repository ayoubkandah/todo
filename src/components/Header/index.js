import {Nav} from "react-bootstrap"

export default function  Header (){
    return(
        <Nav variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
                <Nav.Link href="/home">Home</Nav.Link>
            </Nav.Item>

        </Nav>
    )
}