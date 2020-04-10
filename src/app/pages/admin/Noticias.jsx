import React, { Component } from 'react'
import DataTable from '../../partials/components/DataTable'
import { Box, Container, CssBaseline, InputLabel, Select, MenuItem, Button } from '@material-ui/core';
import { Portlet, PortletBody, PortletHeader, PortletHeaderToolbar } from '../../partials/content/Portlet';
import { MDBBtn } from 'mdbreact';
import { ButtonToolbar, Image, Dropdown } from 'react-bootstrap';
import FormNoticias from '../../partials/components/FormNoticias';


export class Noticias extends Component {

    state = {
        tableData: {
            columns: [
                {
                label: 'Artigos Enviados por Centro Médico',
                field: 'artigos_enviados_centro_medico'
                },
                {
                label: 'Artigos Enviados por Profissionais',
                field: 'artigos_enviados_profissionais'
                },
                {
                label: 'Artigos Enviados por Pacientes',
                field: 'artigos_enviados_pacientes'
                },
                {
                label: 'Ações',
                field: 'acoes'
                },
            ],
            rows: [
                {
                artigos_enviados_centro_medico: 'Lorem Ipsum',
                artigos_enviados_profissionais: 'Lorem Ipsum',
                artigos_enviados_pacientes: 'Lorem Ipsum',
                acoes: <ButtonToolbar style={{'flex-wrap': 'nowrap'}}>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-warning"><i key="cell1" className="fas fa-edit text-warning" title="Editar" aria-hidden="true"></i></Button>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-warning"><i key="cell1" className="fas fa-ban text-muted" title="Bloquear" aria-hidden="true"></i></Button>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-warning"><i key="cell1" className="fas fa-window-close text-danger" title="Cancelar" aria-hidden="true"></i></Button>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-dark"><i key="cell1" className="fas fa-trash text-danger" title="Excluir" aria-hidden="true"></i></Button>
                    </ButtonToolbar>,
                },
                {
                artigos_enviados_centro_medico: 'Lorem Ipsum',
                artigos_enviados_profissionais: 'Lorem Ipsum',
                artigos_enviados_pacientes: 'Lorem Ipsum',
                acoes: <ButtonToolbar style={{'flex-wrap': 'nowrap'}}>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-warning"><i key="cell1" className="fas fa-edit text-warning" title="Editar" aria-hidden="true"></i></Button>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-warning"><i key="cell1" className="fas fa-ban text-muted" title="Bloquear" aria-hidden="true"></i></Button>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-warning"><i key="cell1" className="fas fa-window-close text-danger" title="Cancelar" aria-hidden="true"></i></Button>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-dark"><i key="cell1" className="fas fa-trash text-danger" title="Excluir" aria-hidden="true"></i></Button>
                    </ButtonToolbar>,
                },
                {
                artigos_enviados_centro_medico: 'Lorem Ipsum',
                artigos_enviados_profissionais: 'Lorem Ipsum',
                artigos_enviados_pacientes: 'Lorem Ipsum',
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
                            <PortletHeader
                            title={(
                                <div class="mr-3 custom-btn-table">
                                    <ButtonToolbar>
                                        
                                    <Button variant="success" className="btn-success"><i key="cell1" className="fas fa-plus mr-1" aria-hidden="true"></i> Adicionar</Button>

                                    </ButtonToolbar>
                                </div>
                            )}
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
                                        <MenuItem value={1}>Últimas Notícias</MenuItem>
                                        <MenuItem value={2}>Notícias da Semana</MenuItem>
                                        <MenuItem value={3}>Notícias do Dias</MenuItem>
                                        <MenuItem value={4}>Notícias do Mês</MenuItem>
                                        <MenuItem value={5}>Notícias do Ano</MenuItem>
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
                                <FormNoticias />
                            </PortletBody>
                        </Portlet>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Noticias
