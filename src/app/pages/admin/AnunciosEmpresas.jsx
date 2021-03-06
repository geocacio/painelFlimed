import React, { Component } from 'react'
import DataTable from '../../partials/components/DataTable'
import { Box, Container, CssBaseline, InputLabel, Select, MenuItem, Button } from '@material-ui/core';
import { Portlet, PortletBody, PortletHeader, PortletHeaderToolbar } from '../../partials/content/Portlet';
import { MDBBtn } from 'mdbreact';
import { ButtonToolbar, Image, Dropdown } from 'react-bootstrap';

export class Anunciantes extends Component {

    state = {
        tableData: {
            columns: [
                {
                label: 'Empresas',
                field: 'empresas',
                sort: 'asc'
                },
                {
                label: 'Anúncio',
                field: 'anuncio',
                sort: 'asc'
                },
                {
                label: 'Dias de Anúncios',
                field: 'dias_anuncios'
                },
                {
                label: 'Visualizações',
                field: 'visualizacoes'
                },
                {
                label: 'Estados Anunciados',
                field: 'estados_anunciados'
                },
                {
                label: 'Cidades Anunciadas',
                field: 'cidades_anunciadas'
                },
                {
                label: 'Destaque',
                field: 'destaque'
                },
                {
                label: 'Pendente',
                field: 'pendente'
                },
                {
                label: 'Aprovada',
                field: 'aprovada'
                },
                {
                label: 'Cancelada',
                field: 'cancelada'
                },
                {
                label: 'Valores',
                field: 'valores'
                },
                {
                label: 'Ações',
                field: 'acoes'
                },
            ],
            rows: [
                {
                empresas: 'John Doe ?',
                anuncio: 'Lorem ipsum',
                dias_anuncios: 'Lorem ipsum',
                visualizacoes: 'Lorem ipsum',
                estados_anunciados: 'Lorem ipsum',
                cidades_anunciadas: 'Lorem ipsum',
                destaque: 'Lorem ipsum',
                pendente: '1',
                aprovada: '23',
                cancelada: '3',
                valores: 'R$ 4.500,00',
                acoes: <ButtonToolbar style={{'flex-wrap': 'nowrap'}}>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-warning"><i key="cell1" className="fas fa-edit text-warning" title="Editar" aria-hidden="true"></i></Button>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-warning"><i key="cell1" className="fas fa-ban text-muted" title="Bloquear" aria-hidden="true"></i></Button>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-warning"><i key="cell1" className="fas fa-window-close text-danger" title="Cancelar" aria-hidden="true"></i></Button>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-dark"><i key="cell1" className="fas fa-trash text-danger" title="Excluir" aria-hidden="true"></i></Button>
                    </ButtonToolbar>,
                },
                {
                empresas: 'John Doe ?',
                anuncio: 'Lorem ipsum',
                dias_anuncios: 'Lorem ipsum',
                visualizacoes: 'Lorem ipsum',
                estados_anunciados: 'Lorem ipsum',
                cidades_anunciadas: 'Lorem ipsum',
                destaque: 'Lorem ipsum',
                pendente: '1',
                aprovada: '23',
                cancelada: '3',
                valores: 'R$ 4.500,00',
                acoes: <ButtonToolbar style={{'flex-wrap': 'nowrap'}}>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-warning"><i key="cell1" className="fas fa-edit text-warning" title="Editar" aria-hidden="true"></i></Button>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-warning"><i key="cell1" className="fas fa-ban text-muted" title="Bloquear" aria-hidden="true"></i></Button>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-warning"><i key="cell1" className="fas fa-window-close text-danger" title="Cancelar" aria-hidden="true"></i></Button>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-dark"><i key="cell1" className="fas fa-trash text-danger" title="Excluir" aria-hidden="true"></i></Button>
                    </ButtonToolbar>,
                },
                {
                empresas: 'John Doe ?',
                anuncio: 'Lorem ipsum',
                dias_anuncios: 'Lorem ipsum',
                visualizacoes: 'Lorem ipsum',
                estados_anunciados: 'Lorem ipsum',
                cidades_anunciadas: 'Lorem ipsum',
                destaque: 'Lorem ipsum',
                pendente: '1',
                aprovada: '23',
                cancelada: '3',
                valores: 'R$ 4.500,00',
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
                    <PortletHeader title="Empresas"
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

export default Anunciantes
