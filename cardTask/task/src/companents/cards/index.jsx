import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
export default function Cards(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.images} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.desc}</Card.Text>
        <Button variant="primary">{props.buttonTitle}</Button>
      </Card.Body>
    </Card>
  );
}
