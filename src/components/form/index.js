import {useState} from 'react';
import {Form,Col,Button} from "react-bootstrap"
function FormF (props) {

  const [Item,setItem]=useState({})

  console.log(Item)
  const handleInputChange = e => {
    setItem(  {...Item, [e.target.name]: e.target.value } );
  };

  const handleSubmit = (e) => {
      console.log("dd")
          e.preventDefault();
          e.target.reset();
      props.handleSubmit(Item);
    const item = {};
   setItem(item);

  };


    return (
      <>

          <Form onSubmit={handleSubmit}>
              <fieldset>
                  <h3> Add Item</h3>

              <Form.Group >
                      <Col xs="auto">
              <Form.Label>
  <span>To Do Item</span>
        <Form.Control
      name="text"
      placeholder="Add To Do List Item"
         onChange={handleInputChange}
           />
  </Form.Label>
      <Form.Label>
   Difficulty Rating
      <Form.Control defaultValue="1" type="range" min="1" max="5" name="difficulty" onChange={handleInputChange} />
       </Form.Label>

                      <Form.Label>
    <span>Assigned To</span>
      <Form.Control type="text" name="assignee" placeholder="Assigned To" onChange={handleInputChange} />
       </Form.Label>
                          <Button type="submit" variant="outline-primary">Add Item</Button>
              </Col>

          </Form.Group>
              </fieldset>
  </Form>
    </>
    )
}

export default FormF;
