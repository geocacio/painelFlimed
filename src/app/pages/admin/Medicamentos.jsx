import React, { Component } from 'react'
import DataTable from '../../partials/components/DataTable'
import { Box, Container, CssBaseline, InputLabel, Select, MenuItem, Button } from '@material-ui/core';
import { Portlet, PortletBody, PortletHeader, PortletHeaderToolbar } from '../../partials/content/Portlet';
import { MDBBtn } from 'mdbreact';
import { ButtonToolbar, Image, Dropdown } from 'react-bootstrap';
import ChartPie from '../../partials/components/ChartPie';

export class Medicamentos extends Component {

    state = {
        tableData: {
            columns: [
                {
                label: 'Nome do Profissional',
                field: 'nome_profissional',
                sort: 'asc'
                },
                {
                label: 'Categoria',
                field: 'categoria'
                },
                {
                label: 'Medicamento',
                field: 'medicamento'
                },
                {
                label: 'Valor',
                field: 'valor'
                },
                {
                label: 'Quantidade',
                field: 'quantidade'
                },
                {
                label: 'Laboratório',
                field: 'laboratorio'
                },
                {
                label: 'Rede',
                field: 'rede'
                },
                {
                label: 'Farmácia',
                field: 'farmacia'
                },
                {
                label: 'Bula',
                field: 'bula'
                },
                {
                label: 'Doenças',
                field: 'doencas'
                },
                {
                label: 'Ações',
                field: 'acoes'
                },
            ],
            rows: [
                {
                nome_profissional: 'Lorem Ipsum',
                categoria: 'Lorem Ipsum',
                medicamento: 'Lorem Ipsum',
                valor: 'Lorem Ipsum',
                quantidade: 'Lorem Ipsum',
                laboratorio: 'Lorem Ipsum',
                rede: 'Lorem Ipsum',
                farmacia: 'Lorem Ipsum',
                bula: 'Lorem Ipsum',
                doencas: 'Lorem Ipsum',
                acoes: <ButtonToolbar style={{'flex-wrap': 'nowrap'}}>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-warning"><i key="cell1" className="fas fa-edit text-warning" title="Editar" aria-hidden="true"></i></Button>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-warning"><i key="cell1" className="fas fa-ban text-muted" title="Bloquear" aria-hidden="true"></i></Button>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-warning"><i key="cell1" className="fas fa-window-close text-danger" title="Cancelar" aria-hidden="true"></i></Button>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-dark"><i key="cell1" className="fas fa-trash text-danger" title="Excluir" aria-hidden="true"></i></Button>
                    </ButtonToolbar>,
                },
            ]
        },
        dataPieCidadeEstado: {
            labels: ["Cidade x", "Estado Y"],
            datasets: [
                {
                data: [300, 50],
                backgroundColor: [
                    "#F7464A",
                    "#46BFBD"
                ],
                hoverBackgroundColor: [
                    "#FF5A5E",
                    "#5AD3D1"
                ]
                }
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
                    <div className="col-xl-12">
                        <Portlet>
                            <PortletHeader title="Lista de Medicamentos"
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
                                        <MenuItem value={1}>Medicamentos Genérico</MenuItem>
                                        <MenuItem value={2}>Medicamentos mais Vendidos</MenuItem>
                                        <MenuItem value={3}>Medicamentos em Falta</MenuItem>
                                        <MenuItem value={4}>Medicamentos em Promoção</MenuItem>
                                        <MenuItem value={5}>Medicamentos mais Baratos</MenuItem>
                                        <MenuItem value={6}>Farmácias</MenuItem>
                                        <MenuItem value={7}>Farmácias Popular</MenuItem>
                                        <MenuItem value={8}>Farmácias de Medicamentos mais Baratos</MenuItem>
                                        <MenuItem value={9}>Preço dos Medicamentos</MenuItem>
                                    </Select>
                                </PortletHeaderToolbar>)}/>
                            <PortletBody>
                                <DataTable data={this.state.tableData} />
                            </PortletBody>
                        </Portlet>
                    </div>
                    <div className="col-xl-6">
                        <Portlet>
                            <PortletHeader title="Medicamentos mais Vendidos"/>
                            <PortletBody>
                                <ChartPie data={this.state.dataPieCidadeEstado} />
                            </PortletBody>
                        </Portlet>
                    </div> 
                </div>
            </React.Fragment>
        )
    }
}

export default Medicamentos
