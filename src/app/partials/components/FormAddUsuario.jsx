import React from 'react'
import { Button, Form, InputGroup, Col } from "react-bootstrap";
import Editor from './Editor';
import DatePicker from './DatePicker';
import { Checkbox, FormControlLabel } from '@material-ui/core';

const FormAddUsuario = () => {

    const [state, setState] = React.useState({
        checkedA: false,
        checkedB: false,
        checkedF: false,
      });
    
      const handleChange = name => event => {
        setState({ ...state, [name]: event.target.checked });
      };

    return (
      <Form>
        <Form.Row>
          <Form.Group as={Col} xs="12"  controlId="validationCustom01">
            <Form.Label>Nome Completo</Form.Label>
            <Form.Control
              required
              type="text"
              name="nome"
              placeholder="Nome Completo"
              defaultValue=""
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} xs="6"  controlId="validationCustom02">
            <Form.Label>E-mail</Form.Label>
            <Form.Control
              required
              type="mail"
              name="email"
              placeholder="E-mail"
              defaultValue=""
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} xs="6"  controlId="validationCustom03">
            <Form.Label>Usuario</Form.Label>
            <Form.Control
              required
              type="text"
              name="usuario"
              placeholder="Usuário"
              defaultValue=""
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} xs="6"  controlId="validationCustom04">
            <Form.Label>Senha</Form.Label>
            <Form.Control
              required
              type="password"
              name="senha"
              placeholder="Senha"
              defaultValue=""
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} xs="6"  controlId="validationCustom05">
            <Form.Label>Confirmar Senha</Form.Label>
            <Form.Control
              required
              type="password"
              name="confirmar_senha"
              placeholder="Confirmar Senha"
              defaultValue=""
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} xs="6"  controlId="validationCustom06">
            <Form.Label>Telefone</Form.Label>
            <Form.Control
              required
              type="tel"
              name="telefone"
              placeholder="Telefone"
              defaultValue=""
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} xs="6"  controlId="validationCustom07">
            <Form.Label>Tipo de Usuário</Form.Label>            
            <Form.Control as="select" name="tipo_usuario">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </Form.Control>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

            <Form.Label>Permissões de Acesso</Form.Label>

          <Form.Group as={Col} xs="12"  controlId="validationCustom08">
            <FormControlLabel
                control={
                <Checkbox
                    checked={state.checkedA}
                    onChange={handleChange('checkedA')}
                    value="checkedA"
                    color="success"
                    name="acesso1"
                />
                }
                label="Acesso 1"
            />
            <FormControlLabel
                control={
                <Checkbox
                    checked={state.checkedB}
                    onChange={handleChange('checkedB')}
                    value="checkedB"
                    color="success"
                    name="acesso2"
                />
                }
                label="Acesso 2"
            />
            <FormControlLabel
                control={
                <Checkbox
                    checked={state.checkedC}
                    onChange={handleChange('checkedC')}
                    value="checkedC"
                    color="success"
                    name="acesso3"
                />
                }
                label="Acesso 3"
            />
          </Form.Group>




          {/* <Form.Group as={Col} xs="12"  controlId="validationCustom02">
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
                    id={`custom-inline-${type}-1`}
                />
                <Form.Check
                    custom
                    inline
                    label="Desativado"
                    type={type}
                    id={`custom-inline-${type}-2`}
                />
                </div>
            ))}
          </Form.Group> */}

        <Button type="cancel" className="btn-danger">Cancelar</Button>
        <Button type="submit" className="btn-success">Enviar</Button>

          
        </Form.Row>

      </Form>
      );
}

export default FormAddUsuario
