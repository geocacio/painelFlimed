import React from 'react'
import { Button, Form, InputGroup, Col } from "react-bootstrap";
import Editor from './Editor';
import DatePicker from './DatePicker';

const FormTermos = () => {
    return (
      <Form>
        <Form.Row>
          <Form.Group as={Col} xs="12"  controlId="validationCustom02">
            <Form.Label>Descrição</Form.Label>
            <Editor />
          </Form.Group>

        <Button type="submit" className="btn-success">Salvar</Button>

          
        </Form.Row>

      </Form>
      );
}

export default FormTermos
