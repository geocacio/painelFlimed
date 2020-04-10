import React from 'react'
import { Button, Form, InputGroup, Col } from "react-bootstrap";
import Editor from './Editor';
import DatePicker from './DatePicker';
import { Checkbox, FormControlLabel } from '@material-ui/core';

const FormAddPlanos = () => {

    const [state, setState] = React.useState({
        checkedA: false,
        checkedB: false,
        checkedC: false,
        checkedD: false,
        checkedE: false,
        checkedF: false,
        checkedG: false,
        checkedH: false,
        checkedJ: false,
      });
    
      const handleChange = name => event => {
        setState({ ...state, [name]: event.target.checked });
      };

    return (
      <Form>
        <Form.Row>
          <Form.Group as={Col} xs="12"  controlId="validationCustom01">
            <Form.Label>Valor</Form.Label>
            <Form.Control
              required
              type="text"
              name="valor"
              placeholder="Valor"
              defaultValue=""
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} xs="6"  controlId="validationCustom02">
            <Form.Label>Nome</Form.Label>
            <Form.Control
              required
              type="text"
              name="nome"
              placeholder="Nome"
              defaultValue=""
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} xs="6"  controlId="validationCustom02">
            <Form.Label>Descrição</Form.Label>
            <Form.Control as="textarea" rows="3" name="descricao"/>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} xs="6"  controlId="validationCustom07">
            <Form.Label>Quantidade de Usuários</Form.Label>            
            <Form.Control as="select" name="quantidade_usuario">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </Form.Control>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} xs="6"  controlId="validationCustom07">
            <Form.Label>Quantidade de Médicos</Form.Label>            
            <Form.Control as="select" name="quantidade_medicos">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </Form.Control>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} xs="6"  controlId="validationCustom08">
            <Form.Label>Funcionalidades</Form.Label>            
            <Form.Control as="select" name="funcionalidades">
                <option value="Lorem">Lorem</option>
                <option value="Ipsum">Ipsum</option>
                <option value="Dollor">Dollor</option>
            </Form.Control>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} xs="6"  controlId="validationCustom09">
            <Form.Label>Preço</Form.Label>
            <Form.Control
              required
              type="text"
              name="preco"
              placeholder="Preço"
              defaultValue=""
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

            <Form.Label>Permissões de Acesso</Form.Label>

          <Form.Group as={Col} xs="12"  controlId="validationCustom12">
            <FormControlLabel
                control={

                    <Checkbox
                        checked={state.checkedA}
                        onChange={handleChange('checkedA')}
                        value="Agenda"
                        color="success"
                        name="agenda"
                    />
                }
                label="Agenda"
            />
            <FormControlLabel
                control={

                    <Checkbox
                        checked={state.checkedB}
                        onChange={handleChange('checkedB')}
                        value="Cadastro de Paciente"
                        color="success"
                        name="cadastro_paciente"
                    />
                }
                label="Cadastro de Paciente"
            />
            <FormControlLabel
                control={
                <Checkbox
                    checked={state.checkedC}
                    onChange={handleChange('checkedC')}
                    value="Controle de Exames"
                    color="success"
                    name="controle_exames"
                />
                }
                label="Controle de Exames"
            />
            <FormControlLabel
                control={
                <Checkbox
                    checked={state.checkedD}
                    onChange={handleChange('checkedD')}
                    value="Controle de Consulta"
                    color="success"
                    name="controle_consulta"
                />
                }
                label="Controle de Consulta"
            />
            <FormControlLabel
                control={
                <Checkbox
                    checked={state.checkedE}
                    onChange={handleChange('checkedE')}
                    value="Prontuário Eletrônico"
                    color="success"
                    name="prontuario_eletronico"
                />
                }
                label="Prontuário Eletrônico"
            />
            <FormControlLabel
                control={
                <Checkbox
                    checked={state.checkedF}
                    onChange={handleChange('checkedF')}
                    value="Prescrição Eletrônico"
                    color="success"
                    name="prescricao_eletronico"
                />
                }
                label="Prescrição Eletrônico"
            />
            <FormControlLabel
                control={
                <Checkbox
                    checked={state.checkedG}
                    onChange={handleChange('checkedG')}
                    value="Financeiro"
                    color="success"
                    name="financeiro"
                />
                }
                label="Financeiro"
            />
            <FormControlLabel
                control={
                <Checkbox
                    checked={state.checkedH}
                    onChange={handleChange('checkedH')}
                    value="Contabilidade"
                    color="success"
                    name="contabilidade"
                />
                }
                label="Contabilidade"
            />
            <FormControlLabel
                control={
                <Checkbox
                    checked={state.checkedJ}
                    onChange={handleChange('checkedJ')}
                    value="Relatórios"
                    color="success"
                    name="relatorios"
                />
                }
                label="Relatórios"
            />
            <FormControlLabel
                control={
                <Checkbox
                    checked={state.checkedK}
                    onChange={handleChange('checkedK')}
                    value="Histórico de Cobranças"
                    color="success"
                    name="historico_cobrancas"
                />
                }
                label="Histórico de Cobranças"
            />
            <FormControlLabel
                control={
                <Checkbox
                    checked={state.checkedL}
                    onChange={handleChange('checkedL')}
                    value="Blog"
                    color="success"
                    name="log"
                />
                }
                label="Blog"
            />
            <FormControlLabel
                control={
                <Checkbox
                    checked={state.checkedM}
                    onChange={handleChange('checkedM')}
                    value="Controle de Estoque"
                    color="success"
                    name="controle_estoque"
                />
                }
                label="Controle de Estoque"
            />
            <FormControlLabel
                control={
                <Checkbox
                    checked={state.checkedN}
                    onChange={handleChange('checkedN')}
                    value="Tele Med - Telemedicina"
                    color="success"
                    name="telemedicina"
                />
                }
                label="Tele Med - Telemedicina"
            />
            <FormControlLabel
                control={
                <Checkbox
                    checked={state.checkedO}
                    onChange={handleChange('checkedO')}
                    value="Chat Audio"
                    color="success"
                    name="chat_audio"
                />
                }
                label="Chat Audio"
            />
            <FormControlLabel
                control={
                <Checkbox
                    checked={state.checkedP}
                    onChange={handleChange('checkedP')}
                    value="Chat Texto"
                    color="success"
                    name="chat_texto"
                />
                }
                label="Chat Texto"
            />
            <FormControlLabel
                control={
                <Checkbox
                    checked={state.checkedQ}
                    onChange={handleChange('checkedQ')}
                    value="Lista de Medicamentos"
                    color="success"
                    name="lista_medicamentos"
                />
                }
                label="Lista de Medicamentos"
            />
            <FormControlLabel
                control={
                <Checkbox
                    checked={state.checkedR}
                    onChange={handleChange('checkedR')}
                    value="Lista de Médicos"
                    color="success"
                    name="lista_medicos"
                />
                }
                label="Lista de Médicos"
            />
            <FormControlLabel
                control={
                <Checkbox
                    checked={state.checkedS}
                    onChange={handleChange('checkedS')}
                    value="Convenios"
                    color="success"
                    name="convenios"
                />
                }
                label="Convenios"
            />
            <FormControlLabel
                control={
                <Checkbox
                    checked={state.checkedT}
                    onChange={handleChange('checkedT')}
                    value="Sistema Adminstrativo"
                    color="sistema_administrativo"
                    name="relatorios"
                />
                }
                label="Sistema Adminstrativo"
            />
            <FormControlLabel
                control={
                <Checkbox
                    checked={state.checkedU}
                    onChange={handleChange('checkedU')}
                    value="Sistema usuário Médico"
                    color="success"
                    name="sistema_usuario_medico"
                />
                }
                label="Sistema usuário Médico"
            />
            <FormControlLabel
                control={
                <Checkbox
                    checked={state.checkedV}
                    onChange={handleChange('checkedV')}
                    value="Sistema usuário Administrativos"
                    color="success"
                    name="sistema_usuario_administrativo"
                />
                }
                label="Sistema usuário Administrativos"
            />
            <FormControlLabel
                control={
                <Checkbox
                    checked={state.checkedW}
                    onChange={handleChange('checkedW')}
                    value="Sistema de Inteligencia virtual"
                    color="success"
                    name="sistema_inteligencia_artificial"
                />
                }
                label="Sistema de Inteligencia virtual"
            />
            <FormControlLabel
                control={
                <Checkbox
                    checked={state.checkedY}
                    onChange={handleChange('checkedY')}
                    value="Envio de Lembretes"
                    color="success"
                    name="envio_lembretes"
                />
                }
                label="Envio de Lembretes"
            />
            <FormControlLabel
                control={
                <Checkbox
                    checked={state.checkedX}
                    onChange={handleChange('checkedX')}
                    value="Anúcio"
                    color="success"
                    name="anuncio"
                />
                }
                label="Anúcio"
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

export default FormAddPlanos
