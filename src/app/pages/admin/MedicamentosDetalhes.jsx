import React, { Component } from 'react'
import DataTable from '../../partials/components/DataTable'
import { Box, Container, CssBaseline, InputLabel, Select, MenuItem, Button } from '@material-ui/core';
import { Portlet, PortletBody, PortletHeader, PortletHeaderToolbar } from '../../partials/content/Portlet';
import { MDBBtn } from 'mdbreact';
import { ButtonToolbar, Image, Dropdown } from 'react-bootstrap';

export class MedicamentosDetalhes extends Component {

    state = {
        tableData: {
            columns: [
                {
                label: 'Receitas',
                field: 'receitas',
                sort: 'asc'
                },
                {
                label: 'Profissional',
                field: 'profissional'
                },
                {
                label: 'Medicamentos',
                field: 'medicamentos'
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
                label: 'Farmácias',
                field: 'farmacias'
                },
                {
                label: 'Laboratórios',
                field: 'laboratorios'
                },
                {
                label: 'Produtos hospitalar',
                field: 'produtos_hospitalar'
                },
                {
                label: 'Relatório',
                field: 'relatorio'
                },
                {
                label: 'Ações',
                field: 'acoes'
                },
            ],
            rows: [
                {
                receitas: 'Lorem Ipsum',
                profissional: 'Lorem Ipsum',
                medicamentos: 'Lorem Ipsum',
                bula: 'Lorem Ipsum',
                doencas: 'Lorem Ipsum',
                farmacias: 'Lorem Ipsum',
                laboratorios: 'Lorem Ipsum',
                produtos_hospitalar: 'Lorem Ipsum',
                relatorio: 'Lorem Ipsum',
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
                    <PortletHeader title="Medicamentos Detalhes"
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
                                <MenuItem value={10}>Doenças</MenuItem>
                                <MenuItem value={11}>Bulas</MenuItem>
                                <MenuItem value={12}>Produtos Hospitalar</MenuItem>
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

export default MedicamentosDetalhes
