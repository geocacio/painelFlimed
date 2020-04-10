import React, { Component } from 'react'
import DataTable from '../../partials/components/DataTable'
import { Box, Container, CssBaseline, InputLabel, Select, MenuItem, Button } from '@material-ui/core';
import { Portlet, PortletBody, PortletHeader, PortletHeaderToolbar } from '../../partials/content/Portlet';
import { MDBBtn } from 'mdbreact';
import { ButtonToolbar, Image, Dropdown } from 'react-bootstrap';

export class Profissional extends Component {

    state = {
        tableData: {
            columns: [
                {
                label: 'Perfil do Médico',
                field: 'perfil_medico',
                sort: 'asc'
                },
                {
                label: 'Sobre o Médico',
                field: 'sobre_medico'
                },
                {
                label: 'Especialidades',
                field: 'especialidades',
                sort: 'asc'
                },
                {
                label: 'Profissional responsável',
                field: 'profissional_responsavel',
                sort: 'asc'
                },
                {
                label: 'Local de Atendimento do Médico',
                field: 'local_atendimento'
                },
                {
                label: 'Usuários Funcionários',
                field: 'usuarios_funcionarios',
                sort: 'asc'
                },
                {
                label: 'Usuários Médicos',
                field: 'usuarios_medicos',
                sort: 'asc'
                },
                {
                label: 'Histórico de atendimento',
                field: 'historico_atendimento',
                sort: 'asc'
                },
                {
                label: 'Plano Flimed',
                field: 'plano_flimed',
                sort: 'asc'
                },
                {
                label: 'Plano de atendimento',
                field: 'plano_atendimento',
                sort: 'asc'
                },
                {
                label: 'Cartão ',
                field: 'cartao',
                sort: 'asc'
                },
                {
                label: 'Ações',
                field: 'acoes',
                width: 200
                },
            ],
            rows: [
                {
                perfil_medico: <Image src="holder.js/171x180" thumbnail />,
                sobre_medico: 'John Doe',
                especialidades: 'Doutor',
                profissional_responsavel: 'John Doe',
                local_atendimento: 'Clínica',
                usuarios_funcionarios: '4',
                usuarios_medicos: '3',
                historico_atendimento: 'Não consta',
                plano_flimed: 'SUS',
                plano_atendimento: 'SUS',
                cartao: '09548',
                acoes: <ButtonToolbar style={{'flex-wrap': 'nowrap'}}>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-warning"><i key="cell1" className="fas fa-edit text-warning" title="Editar" aria-hidden="true"></i></Button>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-warning"><i key="cell1" className="fas fa-ban text-muted" title="Bloquear" aria-hidden="true"></i></Button>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-warning"><i key="cell1" className="fas fa-window-close text-danger" title="Cancelar" aria-hidden="true"></i></Button>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-dark"><i key="cell1" className="fas fa-trash text-danger" title="Excluir" aria-hidden="true"></i></Button>
                    </ButtonToolbar>,
                },
                {
                perfil_medico: <Image src="holder.js/171x180" thumbnail />,
                sobre_medico: 'John Doe',
                especialidades: 'Doutor',
                profissional_responsavel: 'John Doe',
                local_atendimento: 'Clínica',
                usuarios_funcionarios: '4',
                usuarios_medicos: '3',
                historico_atendimento: 'Não consta',
                plano_flimed: 'SUS',
                plano_atendimento: 'SUS',
                cartao: '09548',
                acoes: <ButtonToolbar style={{'flex-wrap': 'nowrap'}}>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-warning"><i key="cell1" className="fas fa-edit text-warning" title="Editar" aria-hidden="true"></i></Button>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-warning"><i key="cell1" className="fas fa-ban text-muted" title="Bloquear" aria-hidden="true"></i></Button>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-warning"><i key="cell1" className="fas fa-window-close text-danger" title="Cancelar" aria-hidden="true"></i></Button>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-dark"><i key="cell1" className="fas fa-trash text-danger" title="Excluir" aria-hidden="true"></i></Button>
                    </ButtonToolbar>,
                },
                {
                perfil_medico: <Image src="holder.js/171x180" thumbnail />,
                sobre_medico: 'John Doe',
                especialidades: 'Doutor',
                profissional_responsavel: 'John Doe',
                local_atendimento: 'Clínica',
                usuarios_funcionarios: '4',
                usuarios_medicos: '3',
                historico_atendimento: 'Não consta',
                plano_flimed: 'SUS',
                plano_atendimento: 'SUS',
                cartao: '09548',
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
                    <PortletHeader title="Profissional"
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

export default Profissional
