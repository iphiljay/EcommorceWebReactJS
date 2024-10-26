import { Col, Row } from "react-bootstrap"
import { StoreItem } from "../components/StoreItem"

export function Store() {
    return <>
    <h1>Store</h1>
    <Row xs={1} md={2} lg={3} className="g-4">
        {StoreItem.map(item => {
            <Col key={item.id}><StoreItem {...item}/></Col>
        })}
    </Row>
    </>

}
