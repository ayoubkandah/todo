import {useState} from 'react';
import {Form,Col,Button} from "react-bootstrap"
import useForm from "../../Hooks/Form";
function FormF (props) {
    const textInput = useForm(handleInputChange,'text','text' );
    const diffInput = useForm(handleInputChange, 'range', "difficulty" );
    const assignee = useForm(handleInputChange, 'text', "assignee" );
    const [Item,setItem]=useState({})

  // console.log(Item)
  function handleInputChange (e)   {
// console.log(e.target.name)
    setItem(  {...Item, [e.target.name]:e.target.value } );
  };

  const handleSubmit = (e) => {
          e.preventDefault();
      // console.log()
      if(typeof Item.text==="undefined"){
alert("your item not entered ")
      }else{
          e.target.reset();
      props.handleSubmit(Item);
    const item = {};
   setItem(item);
      }
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
            {...textInput}
           />
  </Form.Label>
      <Form.Label>
   Difficulty Rating
      <Form.Control min="1" max="5" {...diffInput} />
       </Form.Label>

                      <Form.Label>
    <span>Assigned To</span>
      <Form.Control {...assignee} />
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
