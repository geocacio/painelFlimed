import React from 'react'
import { Button, Form, InputGroup, Col } from "react-bootstrap";
import Editor from './Editor';
import DatePicker from './DatePicker';

const FormNoticias = () => {
    return (
      <Form>
        <Form.Row>
          <Form.Group as={Col} xs="12"  controlId="validationCustom01">
            <Form.Label>Título</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Título"
              defaultValue="Mark"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} xs="12"  controlId="validationCustom02">
            <Form.Label>Lorem Ipsum</Form.Label>
            <Editor />
          </Form.Group>
          <Form.Group as={Col} md="6"  controlId="validationCustom02">
            <Form.Label>Lorem Ipsum</Form.Label>
            <DatePicker />
          </Form.Group>
          <Form.Group as={Col} md="6"  controlId="validationCustom02">
            <Form.Label>Lorem Ipsum</Form.Label>
            <DatePicker />
          </Form.Group>
          <Form.Group as={Col} xs="12"  controlId="validationCustom03">
            <Form.Label>Status</Form.Label>

            {['radio'].map(type => (
                <div key={`custom-inline-${type}`} className="mb-3">
                <Form.Check
                    custom
                    inline
                    label="Ativado"
                    type={type}
                    name="teste"
                    id={`custom-inline-${type}-1`}
                />
                <Form.Check
                    custom
                    inline
                    label="Desativado"
                    type={type}
                    name="teste"
                    id={`custom-inline-${type}-2`}
                />
                </div>
            ))}
          </Form.Group>

        <Button type="cancel" className="btn-danger">Cancelar</Button>
        <Button type="submit" className="btn-success">Enviar</Button>

          
        </Form.Row>

      </Form>
      );
}

export default FormNoticias
