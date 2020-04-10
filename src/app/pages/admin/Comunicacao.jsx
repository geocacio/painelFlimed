import React, { Component } from 'react'
import DataTable from '../../partials/components/DataTable'
import { Box, Container, CssBaseline, InputLabel, Select, MenuItem, Button } from '@material-ui/core';
import { Portlet, PortletBody, PortletHeader, PortletHeaderToolbar } from '../../partials/content/Portlet';
import { MDBBtn } from 'mdbreact';
import { ButtonToolbar, Image, Dropdown } from 'react-bootstrap';
import FormComunicacao from '../../partials/components/FormComunicacao';

export class Comunicacao extends Component {

    state = {
        tableData: {
            columns: [
                {
                label: 'Perguntas do Paciente',
                field: 'perguntas_paciente',
                sort: 'asc'
                },
                {
                label: 'Respostas dos Médicos',
                field: 'resposta_medico',
                sort: 'asc'
                },
                {
                label: 'Artigos dos Médicos',
                field: 'artigos_medicos'
                },
                {
                label: 'Galeria de Mídia',
                field: 'galeria_midia'
                },
                {
                label: 'Anúncios',
                field: 'anuncios'
                },
                {
                label: 'E-mail',
                field: 'email'
                },
                {
                label: 'WHATSAPP',
                field: 'whatsapp'
                },
                {
                label: 'Ações',
                field: 'acoes'
                },
            ],
            rows: [
                {
                perguntas_paciente: 'John Doe ?',
                resposta_medico: 'Lorem ipsum',
                artigos_medicos: 'Lorem ipsum',
                galeria_midia: 'Lorem ipsum',
                anuncios: 'John Doe',
                email: 'Lorem ipsum',
                whatsapp: '(99) 9 9999-9999)',
                acoes: <ButtonToolbar style={{'flex-wrap': 'nowrap'}}>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-warning"><i key="cell1" className="fas fa-edit text-warning" title="Editar" aria-hidden="true"></i></Button>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-warning"><i key="cell1" className="fas fa-ban text-muted" title="Bloquear" aria-hidden="true"></i></Button>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-warning"><i key="cell1" className="fas fa-window-close text-danger" title="Cancelar" aria-hidden="true"></i></Button>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-dark"><i key="cell1" className="fas fa-trash text-danger" title="Excluir" aria-hidden="true"></i></Button>
                    </ButtonToolbar>,
                },
                {
                perguntas_paciente: 'John Doe ?',
                resposta_medico: 'Lorem ipsum',
                artigos_medicos: 'Lorem ipsum',
                galeria_midia: 'Lorem ipsum',
                anuncios: 'John Doe',
                email: 'Lorem ipsum',
                whatsapp: '(99) 9 9999-9999)',
                acoes: <ButtonToolbar style={{'flex-wrap': 'nowrap'}}>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-warning"><i key="cell1" className="fas fa-edit text-warning" title="Editar" aria-hidden="true"></i></Button>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-warning"><i key="cell1" className="fas fa-ban text-muted" title="Bloquear" aria-hidden="true"></i></Button>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-warning"><i key="cell1" className="fas fa-window-close text-danger" title="Cancelar" aria-hidden="true"></i></Button>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-dark"><i key="cell1" className="fas fa-trash text-danger" title="Excluir" aria-hidden="true"></i></Button>
                    </ButtonToolbar>,
                },
                {
                perguntas_paciente: 'John Doe ?',
                resposta_medico: 'Lorem ipsum',
                artigos_medicos: 'Lorem ipsum',
                galeria_midia: 'Lorem ipsum',
                anuncios: 'John Doe',
                email: 'Lorem ipsum',
                whatsapp: '(99) 9 9999-9999)',
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
                <div className="row">
                    <div className="col-12">
                        <Portlet>
                            <PortletHeader title="Comunicação"
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
                    </div>
                    <div className="col-12">
                        <Portlet>
                            <PortletHeader title="Lorem Ipsum"/>
                            <PortletBody>
                                <FormComunicacao />
                            </PortletBody>
                        </Portlet>
                    </div>
                </div>
                
            </React.Fragment>
        )
    }
}

export default Comunicacao
