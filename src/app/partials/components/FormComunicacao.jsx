import React from 'react'
import { Button, Form, InputGroup, Col } from "react-bootstrap";
import Editor from './Editor';

const FormComunicacao = () => {
    return (
      <Form>
        <Form.Row>
          <Form.Group as={Col} xs="12" controlId="validationCustom01">
            <Form.Label>Lorem Ipsum</Form.Label>
            <Form.Control as="select">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
          </Form.Control>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} xs="12"  controlId="validationCustom02">
            <Form.Label>Lorem Ipsum</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Lorem Ipsum"
              defaultValue="Mark"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} xs="12"  controlId="validationCustom02">
            <Form.Label>Lorem Ipsum</Form.Label>
            <Editor />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

        <Button type="cancel" className="btn-danger">Cancelar</Button>
        <Button type="submit" className="btn-success">Enviar</Button>

          
        </Form.Row>

      </Form>
      );
}

export default FormComunicacao
