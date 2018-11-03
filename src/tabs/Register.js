import React, {Component} from 'react'
import { Button, Divider, Form, TextArea } from 'semantic-ui-react'

export default class Register extends Component {
  constructor(props) {
    super(props)
  }
  render(){
    return(
      <React.Fragment>
        <div className="register">
          <h2>Jag vill anmäla mig!</h2>
          <p>Skriv i meddelandet eventuella allergier samt namn på alla i ert sällskap/familj som kommer</p>
       
          <Form size="large">
            <Form.Group inline>
            <Form.Field label='Ditt namn' control='input' placeholder='' required />
            <Form.Field  label='Email' control='input' placeholder='@'  required />
            </Form.Group>
            <Form.Field
              id='form-textarea-control-opinion'
              control={TextArea}
              label='Medelande'/>
            <Button type='submit'>Submit</Button>
            <Divider />
          </Form>
        </div>
     </React.Fragment>
    )
  }
}
