import React, { Component } from 'react'
import DataTable from '../../partials/components/DataTable'
import { Box, Container, CssBaseline, InputLabel, Select, MenuItem, Button } from '@material-ui/core';
import { Portlet, PortletBody, PortletHeader, PortletHeaderToolbar } from '../../partials/content/Portlet';
import { MDBBtn } from 'mdbreact';
import { ButtonToolbar, Image, Dropdown } from 'react-bootstrap';

export class ProfissionaisCentroMedico extends Component {

    state = {
        tableData: {
            columns: [
                {
                label: 'Nome do Profissional',
                field: 'nome_profissional',
                sort: 'asc'
                },
                {
                label: 'Especialidades',
                field: 'especialidades'
                },
                {
                label: 'Nome do Responsável',
                field: 'nome_responsavel',
                sort: 'asc'
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
                label: 'Telefone',
                field: 'telefone'
                },
                {
                label: 'Celular',
                field: 'celular'
                },
                {
                label: 'CPF',
                field: 'cpf'
                },
                {
                label: 'Status',
                field: 'status'
                },
                {
                label: 'Ações',
                field: 'acoes'
                },
            ],
            rows: [
                {
                nome_profissional: 'Lorem Ipsum',
                especialidades: 'Lorem Ipsum',
                nome_responsavel: 'Lorem Ipsum',
                endereco: 'Lorem Ipsum',
                cidade: 'Lorem Ipsum',
                estado: 'Lorem Ipsum',
                telefone: '(99) 9 9999-9999',
                celular: '(99) 9 9999-9999',
                cpf: 'Lorem Ipsum',
                status: 'Lorem Ipsum',
                acoes: <ButtonToolbar style={{'flex-wrap': 'nowrap'}}>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-warning"><i key="cell1" className="fas fa-edit text-warning" title="Editar" aria-hidden="true"></i></Button>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-warning"><i key="cell1" className="fas fa-ban text-muted" title="Bloquear" aria-hidden="true"></i></Button>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-warning"><i key="cell1" className="fas fa-window-close text-danger" title="Cancelar" aria-hidden="true"></i></Button>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-dark"><i key="cell1" className="fas fa-trash text-danger" title="Excluir" aria-hidden="true"></i></Button>
                    </ButtonToolbar>,
                },
                {
                nome_profissional: 'Lorem Ipsum',
                especialidades: 'Lorem Ipsum',
                nome_responsavel: 'Lorem Ipsum',
                endereco: 'Lorem Ipsum',
                cidade: 'Lorem Ipsum',
                estado: 'Lorem Ipsum',
                telefone: '(99) 9 9999-9999',
                celular: '(99) 9 9999-9999',
                cpf: 'Lorem Ipsum',
                status: 'Lorem Ipsum',
                acoes: <ButtonToolbar style={{'flex-wrap': 'nowrap'}}>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-warning"><i key="cell1" className="fas fa-edit text-warning" title="Editar" aria-hidden="true"></i></Button>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-warning"><i key="cell1" className="fas fa-ban text-muted" title="Bloquear" aria-hidden="true"></i></Button>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-warning"><i key="cell1" className="fas fa-window-close text-danger" title="Cancelar" aria-hidden="true"></i></Button>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-dark"><i key="cell1" className="fas fa-trash text-danger" title="Excluir" aria-hidden="true"></i></Button>
                    </ButtonToolbar>,
                },
                {
                nome_profissional: 'Lorem Ipsum',
                especialidades: 'Lorem Ipsum',
                nome_responsavel: 'Lorem Ipsum',
                endereco: 'Lorem Ipsum',
                cidade: 'Lorem Ipsum',
                estado: 'Lorem Ipsum',
                telefone: '(99) 9 9999-9999',
                celular: '(99) 9 9999-9999',
                cpf: 'Lorem Ipsum',
                status: 'Lorem Ipsum',
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
                    <PortletHeader title="Profissionais do Centro"
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
                                <MenuItem value={1}>Lorem Ipsum</MenuItem>
                                <MenuItem value={2}>John Doe</MenuItem>
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

export default ProfissionaisCentroMedico
