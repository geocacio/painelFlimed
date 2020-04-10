import React, { Component } from 'react'
import DataTable from '../../partials/components/DataTable'
import { Box, Container, CssBaseline, InputLabel, Select, MenuItem, Button } from '@material-ui/core';
import { Portlet, PortletBody, PortletHeader, PortletHeaderToolbar } from '../../partials/content/Portlet';
import { MDBBtn } from 'mdbreact';
import { ButtonToolbar, Image, Dropdown } from 'react-bootstrap';

export class Anuncios extends Component {

    state = {
        tableData: {
            columns: [
                {
                label: 'Nome do Anunciante',
                field: 'nome_anunciante',
                sort: 'asc'
                },
                {
                label: 'Título do Anúncio',
                field: 'titulo_anuncio',
                sort: 'asc'
                },
                {
                label: 'Categoria',
                field: 'categoria',
                sort: 'asc'
                },
                {
                label: 'Anúncio no Painel Paciente',
                field: 'anuncio_painel_paciente'
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
                label: 'WHATSAPP',
                field: 'whatsapp'
                },
                {
                label: 'Data de Início',
                field: 'data_inicio'
                },
                {
                label: 'Data Final',
                field: 'data_final'
                },
                {
                label: 'Dias de Anúncios',
                field: 'dias_anuncios'
                },
                {
                label: 'Banner',
                field: 'banner'
                },
                {
                label: 'Vídeo',
                field: 'video'
                },
                {
                label: 'Preço',
                field: 'preco'
                },
                {
                label: 'Pago',
                field: 'pago'
                },
                {
                label: 'Total de Anúncios',
                field: 'total_anuncios'
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
                nome_anunciante: 'John Doe ?',
                titulo_anuncio: 'Lorem ipsum',
                categoria: 'Lorem ipsum',
                anuncio_painel_paciente: 'Lorem ipsum',
                cidade: 'Lorem ipsum',
                estado: 'Lorem ipsum',
                whatsapp: '(99) 9 9999-9999)',
                data_inicio: '99/99/9999',
                data_final: '99/99/9999',
                dias_anuncios: '99)',
                banner: 'Lorem Ipsum',
                video: 'Lorem Ipsum',
                preco: 'R$ 1.200,00',
                pago: 'Sim',
                total_anuncios: '99)',
                status: 'Ativo',
                acoes: <ButtonToolbar style={{'flex-wrap': 'nowrap'}}>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-warning"><i key="cell1" className="fas fa-thumbs-up text-success" title="Aprovar" aria-hidden="true"></i></Button>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-warning"><i key="cell1" className="fas fa-edit text-warning" title="Editar" aria-hidden="true"></i></Button>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-warning"><i key="cell1" className="fas fa-ban text-muted" title="Bloquear" aria-hidden="true"></i></Button>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-warning"><i key="cell1" className="fas fa-window-close text-danger" title="Cancelar" aria-hidden="true"></i></Button>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-dark"><i key="cell1" className="fas fa-trash text-danger" title="Excluir" aria-hidden="true"></i></Button>
                    </ButtonToolbar>,
                },
                {
                nome_anunciante: 'John Doe ?',
                titulo_anuncio: 'Lorem ipsum',
                categoria: 'Lorem ipsum',
                anuncio_painel_paciente: 'Lorem ipsum',
                cidade: 'Lorem ipsum',
                estado: 'Lorem ipsum',
                whatsapp: '(99) 9 9999-9999)',
                data_inicio: '99/99/9999',
                data_final: '99/99/9999',
                dias_anuncios: '99)',
                banner: 'Lorem Ipsum',
                video: 'Lorem Ipsum',
                preco: 'R$ 1.200,00',
                pago: 'Sim',
                total_anuncios: '99)',
                status: 'Ativo',
                acoes: <ButtonToolbar style={{'flex-wrap': 'nowrap'}}>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-warning"><i key="cell1" className="fas fa-thumbs-up text-success" title="Aprovar" aria-hidden="true"></i></Button>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-warning"><i key="cell1" className="fas fa-edit text-warning" title="Editar" aria-hidden="true"></i></Button>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-warning"><i key="cell1" className="fas fa-ban text-muted" title="Bloquear" aria-hidden="true"></i></Button>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-warning"><i key="cell1" className="fas fa-window-close text-danger" title="Cancelar" aria-hidden="true"></i></Button>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-dark"><i key="cell1" className="fas fa-trash text-danger" title="Excluir" aria-hidden="true"></i></Button>
                    </ButtonToolbar>,
                },
                {
                nome_anunciante: 'John Doe ?',
                titulo_anuncio: 'Lorem ipsum',
                categoria: 'Lorem ipsum',
                anuncio_painel_paciente: 'Lorem ipsum',
                cidade: 'Lorem ipsum',
                estado: 'Lorem ipsum',
                whatsapp: '(99) 9 9999-9999)',
                data_inicio: '99/99/9999',
                data_final: '99/99/9999',
                dias_anuncios: '99)',
                banner: 'Lorem Ipsum',
                video: 'Lorem Ipsum',
                preco: 'R$ 1.200,00',
                pago: 'Sim',
                total_anuncios: '99)',
                status: 'Ativo',
                acoes: <ButtonToolbar style={{'flex-wrap': 'nowrap'}}>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-warning"><i key="cell1" className="fas fa-thumbs-up text-success" title="Aprovar" aria-hidden="true"></i></Button>
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
                    <PortletHeader title="Anúncios"
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
                                <MenuItem value={1}>Empresas Pendentes</MenuItem>
                                <MenuItem value={2}>Empresas Bloqueadas</MenuItem>
                                <MenuItem value={3}>Empresas Canceladas</MenuItem>
                                <MenuItem value={4}>Empresas que não fizeram o Anúncio</MenuItem>
                                <MenuItem value={5}>Telefone das Empresas</MenuItem>
                                <MenuItem value={6}>Telefone dos Profissionais de Saúde</MenuItem>
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

export default Anuncios
