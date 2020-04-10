import React, { Component } from 'react'
import DataTable from '../../partials/components/DataTable'
import { Box, Container, CssBaseline, InputLabel, Select, MenuItem, Button } from '@material-ui/core';
import { Portlet, PortletBody, PortletHeader, PortletHeaderToolbar } from '../../partials/content/Portlet';
import { MDBBtn } from 'mdbreact';
import { ButtonToolbar, Image, Dropdown } from 'react-bootstrap';

export class Pacientes extends Component {

    state = {
        tableData: {
            columns: [
                {
                label: 'Nome do Paciente',
                field: 'nome_paciente',
                sort: 'asc'
                },
                {
                label: 'Whatsapp',
                field: 'whatsapp'
                },
                {
                label: 'E-mail',
                field: 'email'
                },
                {
                label: 'Telefone Fixo',
                field: 'telefone_fixo'
                },
                {
                label: 'Telefone do Responsável',
                field: 'telefone_responsavel'
                },
                {
                label: 'CPF',
                field: 'cpf'
                },
                {
                label: 'Cartão',
                field: 'cartao'
                },
                {
                label: 'Plano de Saúde',
                field: 'plano_saude'
                },
                {
                label: 'Endereço',
                field: 'endereco'
                },
                {
                label: 'Cidade',
                field: 'cidade'
                },
                {
                label: 'Estado',
                field: 'estado'
                },
                {
                label: 'Profissional',
                field: 'profissional'
                },
                {
                label: 'Categoria',
                field: 'categoria'
                },
                {
                label: 'Ações',
                field: 'acoes'
                },
            ],
            rows: [
                {
                nome_paciente: '03/03/2020',
                whatsapp: 'John Doe',
                email: '03/03/2020',
                telefone_fixo: 'R$ 450,00',
                telefone_responsavel: 'Cartão',
                cpf: '999.999.999-99',
                cartao: 'Lorem Ipsum',
                plano_saude: 'Lorem Ipsum',
                endereco: 'Lorem Ipsum',
                cidade: 'Lorem Ipsum',
                estado: 'Lorem Ipsum',
                profissional: 'Lorem Ipsum',
                categoria: 'Lorem Ipsum',
                acoes: <ButtonToolbar style={{'flex-wrap': 'nowrap'}}>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-warning"><i key="cell1" className="fas fa-edit text-warning" title="Editar" aria-hidden="true"></i></Button>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-warning"><i key="cell1" className="fas fa-ban text-muted" title="Bloquear" aria-hidden="true"></i></Button>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-warning"><i key="cell1" className="fas fa-window-close text-danger" title="Cancelar" aria-hidden="true"></i></Button>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-dark"><i key="cell1" className="fas fa-trash text-danger" title="Excluir" aria-hidden="true"></i></Button>
                    </ButtonToolbar>,
                },
                {
                nome_paciente: '03/03/2020',
                whatsapp: 'John Doe',
                email: '03/03/2020',
                telefone_fixo: 'R$ 450,00',
                telefone_responsavel: 'Cartão',
                cpf: '999.999.999-99',
                cartao: 'Lorem Ipsum',
                plano_saude: 'Lorem Ipsum',
                endereco: 'Lorem Ipsum',
                cidade: 'Lorem Ipsum',
                estado: 'Lorem Ipsum',
                profissional: 'Lorem Ipsum',
                categoria: 'Lorem Ipsum',
                acoes: <ButtonToolbar style={{'flex-wrap': 'nowrap'}}>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-warning"><i key="cell1" className="fas fa-edit text-warning" title="Editar" aria-hidden="true"></i></Button>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-warning"><i key="cell1" className="fas fa-ban text-muted" title="Bloquear" aria-hidden="true"></i></Button>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-warning"><i key="cell1" className="fas fa-window-close text-danger" title="Cancelar" aria-hidden="true"></i></Button>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-dark"><i key="cell1" className="fas fa-trash text-danger" title="Excluir" aria-hidden="true"></i></Button>
                    </ButtonToolbar>,
                },
                {
                nome_paciente: '03/03/2020',
                whatsapp: 'John Doe',
                email: '03/03/2020',
                telefone_fixo: 'R$ 450,00',
                telefone_responsavel: 'Cartão',
                cpf: '999.999.999-99',
                cartao: 'Lorem Ipsum',
                plano_saude: 'Lorem Ipsum',
                endereco: 'Lorem Ipsum',
                cidade: 'Lorem Ipsum',
                estado: 'Lorem Ipsum',
                profissional: 'Lorem Ipsum',
                categoria: 'Lorem Ipsum',
                acoes: <ButtonToolbar style={{'flex-wrap': 'nowrap'}}>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-warning"><i key="cell1" className="fas fa-edit text-warning" title="Editar" aria-hidden="true"></i></Button>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-warning"><i key="cell1" className="fas fa-ban text-muted" title="Bloquear" aria-hidden="true"></i></Button>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-warning"><i key="cell1" className="fas fa-window-close text-danger" title="Cancelar" aria-hidden="true"></i></Button>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-dark"><i key="cell1" className="fas fa-trash text-danger" title="Excluir" aria-hidden="true"></i></Button>
                    </ButtonToolbar>,
                },
            ]
        }
    };
    select = {
        value: ""
    };


    render() {
        return (
            <React.Fragment>
                <CssBaseline />
                <Portlet>
                    <PortletHeader title="Pacientes"
                    toolbar={(
                        <PortletHeaderToolbar>
                            <div class="mr-3  custom-btn-table">
                                
                                <Dropdown className="d-inline-block">
                                    <Dropdown.Toggle variant="primary" id="dropdown-basic"><i key="cell1" className="fas fa-upload mr-1" aria-hidden="true"></i> Importar</Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Excel</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">PDF</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                    
                                <Dropdown className="d-inline-block">
                                    <Dropdown.Toggle variant="primary" id="dropdown-basic"><i key="cell1" className="fas fa-download mr-1" aria-hidden="true"></i> Exportar</Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Excel</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">PDF</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>

                            </div>

                            <Select value={0} name="filter">
                                <MenuItem value={0}>Todos</MenuItem>
                                <MenuItem value={1}>Pacientes</MenuItem>
                                <MenuItem value={2}>Pacientes que Realizaram Consulta Online</MenuItem>
                                <MenuItem value={3}>Profissionaisde Saúde que Realizaram Consulta Online</MenuItem>
                                <MenuItem value={4}>Consultas Online Canceladas</MenuItem>
                                <MenuItem value={5}>Consultas Online Aprovadas</MenuItem>
                                <MenuItem value={6}>Consultas Online Bloqueadas</MenuItem>
                                <MenuItem value={7}>Consultas</MenuItem>
                                <MenuItem value={8}>Exames</MenuItem>
                            </Select>
                        </PortletHeaderToolbar>)}/>
                    <PortletBody>
                        <DataTable data={this.state.tableData} />
                    </PortletBody>
                </Portlet>
            </React.Fragment>
        )
    }
}

export default Pacientes
