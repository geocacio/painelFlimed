import React, { Component } from 'react'
import DataTable from '../../partials/components/DataTable'
import { Box, Container, CssBaseline, InputLabel, Select, MenuItem, Button } from '@material-ui/core';
import { Portlet, PortletBody, PortletHeader, PortletHeaderToolbar } from '../../partials/content/Portlet';
import { MDBBtn } from 'mdbreact';
import { ButtonToolbar, Image, Dropdown } from 'react-bootstrap';
import OrderStatisticsChart from '../../widgets/OrderStatisticsChart';
import ChartBar from '../../partials/components/ChartBar';
import Editor from '../../partials/components/Editor';
import PortletHeaderDropdown from '../../partials/content/CustomDropdowns/PortletHeaderDropdown';
import ChartPie from '../../partials/components/ChartPie';
import NewUsers from '../../widgets/NewUsers';

export class AdminDashboard extends Component {

    state = {
        tableData: {
            columns: [
                {
                label: 'Centro Médico',
                field: 'centro_medico'
                },
                {
                label: 'Profissionais de Saúde',
                field: 'profissionais_saude'
                },
                {
                label: 'Pacientes',
                field: 'pacientes'
                },
                {
                label: 'Consultas Plano',
                field: 'consultas_plano'
                },
                {
                label: 'Consultas Particulares',
                field: 'consultas_partiuclares'
                },
                {
                label: 'Consultas Online',
                field: 'consultas_online'
                },
                {
                label: 'Exames',
                field: 'exames'
                },
                {
                label: 'Medicamentos',
                field: 'medicamentos'
                },
            ],
            rows: [
                {
                centro_medico: 'Lorem Ipsum',
                profissionais_saude: 'Lorem Ipsum',
                pacientes: 'Lorem Ipsum',
                consultas_plano: 'Lorem Ipsum',
                consultas_partiuclares: 'Lorem Ipsum',
                consultas_online: 'Lorem Ipsum',
                exames: 'Lorem Ipsum',
                medicamentos: 'Lorem Ipsum',
                },
                {
                centro_medico: 'Lorem Ipsum',
                profissionais_saude: 'Lorem Ipsum',
                pacientes: 'Lorem Ipsum',
                consultas_plano: 'Lorem Ipsum',
                consultas_partiuclares: 'Lorem Ipsum',
                consultas_online: 'Lorem Ipsum',
                exames: 'Lorem Ipsum',
                medicamentos: 'Lorem Ipsum',
                },
                {
                centro_medico: 'Lorem Ipsum',
                profissionais_saude: 'Lorem Ipsum',
                pacientes: 'Lorem Ipsum',
                consultas_plano: 'Lorem Ipsum',
                consultas_partiuclares: 'Lorem Ipsum',
                consultas_online: 'Lorem Ipsum',
                exames: 'Lorem Ipsum',
                medicamentos: 'Lorem Ipsum',
                },
            ]
        },
        tableDataAnuncios: {
            columns: [
                {
                label: 'Total de Anúncios',
                field: 'total_anuncios'
                },
                {
                label: 'Ativos',
                field: 'ativos'
                },
                {
                label: 'Cancelados',
                field: 'cancelados'
                },
                {
                label: 'Bloqueados',
                field: 'bloqueados'
                },
                {
                label: 'Anúncios não Finalizados',
                field: 'anuncios_finalizados'
                },
            ],
            rows: [
                {
                total_anuncios: 'Lorem Ipsum',
                ativos: 'Lorem Ipsum',
                cancelados: 'Lorem Ipsum',
                bloqueados: 'Lorem Ipsum',
                anuncios_finalizados: 'Lorem Ipsum',
                },
                {
                total_anuncios: 'Lorem Ipsum',
                ativos: 'Lorem Ipsum',
                cancelados: 'Lorem Ipsum',
                bloqueados: 'Lorem Ipsum',
                anuncios_finalizados: 'Lorem Ipsum',
                },
                {
                total_anuncios: 'Lorem Ipsum',
                ativos: 'Lorem Ipsum',
                cancelados: 'Lorem Ipsum',
                bloqueados: 'Lorem Ipsum',
                anuncios_finalizados: 'Lorem Ipsum',
                },
            ]
        },
        tableDataPacoteMedicoPro: {
            columns: [
                {
                label: 'Total de Planos',
                field: 'total_planos'
                },
                {
                label: 'Ativos',
                field: 'ativos'
                },
                {
                label: 'Cancelados',
                field: 'cancelados'
                },
                {
                label: 'Bloqueados',
                field: 'bloqueados'
                },
                {
                label: 'Anúncios não Finalizados',
                field: 'anuncios_finalizados'
                },
            ],
            rows: [
                {
                total_planos: 'Lorem Ipsum',
                ativos: 'Lorem Ipsum',
                cancelados: 'Lorem Ipsum',
                bloqueados: 'Lorem Ipsum',
                anuncios_finalizados: 'Lorem Ipsum',
                },
                {
                total_planos: 'Lorem Ipsum',
                ativos: 'Lorem Ipsum',
                cancelados: 'Lorem Ipsum',
                bloqueados: 'Lorem Ipsum',
                anuncios_finalizados: 'Lorem Ipsum',
                },
                {
                total_planos: 'Lorem Ipsum',
                ativos: 'Lorem Ipsum',
                cancelados: 'Lorem Ipsum',
                bloqueados: 'Lorem Ipsum',
                anuncios_finalizados: 'Lorem Ipsum',
                },
            ]
        },
        tableDataPacoteMedicoPlus: {
            columns: [
                {
                label: 'Total de Planos',
                field: 'total_planos'
                },
                {
                label: 'Ativos',
                field: 'ativos'
                },
                {
                label: 'Cancelados',
                field: 'cancelados'
                },
                {
                label: 'Bloqueados',
                field: 'bloqueados'
                },
                {
                label: 'Anúncios não Finalizados',
                field: 'anuncios_finalizados'
                },
            ],
            rows: [
                {
                total_planos: 'Lorem Ipsum',
                ativos: 'Lorem Ipsum',
                cancelados: 'Lorem Ipsum',
                bloqueados: 'Lorem Ipsum',
                anuncios_finalizados: 'Lorem Ipsum',
                },
                {
                total_planos: 'Lorem Ipsum',
                ativos: 'Lorem Ipsum',
                cancelados: 'Lorem Ipsum',
                bloqueados: 'Lorem Ipsum',
                anuncios_finalizados: 'Lorem Ipsum',
                },
                {
                total_planos: 'Lorem Ipsum',
                ativos: 'Lorem Ipsum',
                cancelados: 'Lorem Ipsum',
                bloqueados: 'Lorem Ipsum',
                anuncios_finalizados: 'Lorem Ipsum',
                },
            ]
        },
        tableDataPacoteMedicoStarter: {
            columns: [
                {
                label: 'Total de Planos',
                field: 'total_planos'
                },
                {
                label: 'Ativos',
                field: 'ativos'
                },
                {
                label: 'Cancelados',
                field: 'cancelados'
                },
                {
                label: 'Bloqueados',
                field: 'bloqueados'
                },
                {
                label: 'Anúncios não Finalizados',
                field: 'anuncios_finalizados'
                },
            ],
            rows: [
                {
                total_planos: 'Lorem Ipsum',
                ativos: 'Lorem Ipsum',
                cancelados: 'Lorem Ipsum',
                bloqueados: 'Lorem Ipsum',
                anuncios_finalizados: 'Lorem Ipsum',
                },
                {
                total_planos: 'Lorem Ipsum',
                ativos: 'Lorem Ipsum',
                cancelados: 'Lorem Ipsum',
                bloqueados: 'Lorem Ipsum',
                anuncios_finalizados: 'Lorem Ipsum',
                },
                {
                total_planos: 'Lorem Ipsum',
                ativos: 'Lorem Ipsum',
                cancelados: 'Lorem Ipsum',
                bloqueados: 'Lorem Ipsum',
                anuncios_finalizados: 'Lorem Ipsum',
                },
            ]
        },
        dataBar: {
          labels: ["Geral"],
          datasets: [
            {
              label: "Centro Médico",
              data: [12],
              backgroundColor: [
                "rgba(255, 134,159,0.4)"
              ],
              borderWidth: 2,
              borderColor: [
                "rgba(255, 134, 159, 1)"
              ]
            },
            {
                label: "Profissionais da Saúde",
                data: [19],
                backgroundColor: [
                "rgba(98,  182, 239,0.4)"
                ],
                borderWidth: 2,
                borderColor: [
                "rgba(98,  182, 239, 1)"
                ]
            },
            {
                label: "Pacientes",
                data: [3],
                backgroundColor: [
                "rgba(255, 218, 128,0.4)"
                ],
                borderWidth: 2,
                borderColor: [
                "rgba(255, 218, 128, 1)"
                ]
            },
            {
                label: "Consultas Plano",
                data: [5],
                backgroundColor: [
                "rgba(113, 205, 205,0.4)"
                ],
                borderWidth: 2,
                borderColor: [
                "rgba(113, 205, 205, 1)"
                ]
            },
            {
                label: "Consultas Particulares",
                data: [2],
                backgroundColor: [
                "rgba(170, 128, 252,0.4)"
                ],
                borderWidth: 2,
                borderColor: [
                "rgba(170, 128, 252, 1)"
                ]
            },
            {
                label: "Consultas Online",
                data: [3],
                backgroundColor: [
                "rgba(255, 177, 101,0.4)"
                ],
                borderWidth: 2,
                borderColor: [
                "rgba(255, 177, 101, 1)"
                ]
            },
            {
                label: "Exames",
                data: [10],
                backgroundColor: [
                "rgba(37, 199, 49,0.4)"
                ],
                borderWidth: 2,
                borderColor: [
                "rgba(37, 199, 49, 1)"
                ]
            },
            {
                label: "Medicamentos",
                data: [11],
                backgroundColor: [
                "rgba(253, 192, 21,0.4)"
                ],
                borderWidth: 2,
                borderColor: [
                "rgba(253, 192, 21, 1)"
                ]
            }
          ]
        },
        barChartOptions: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            xAxes: [
              {
                barPercentage: 1,
                gridLines: {
                  display: true,
                  color: "rgba(0, 0, 0, 0.1)"
                }
              }
            ],
            yAxes: [
              {
                gridLines: {
                  display: true,
                  color: "rgba(0, 0, 0, 0.1)"
                },
                ticks: {
                  beginAtZero: true
                }
              }
            ]
          }
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
        },
        dataPie: {
            labels: ["Masculino", "Feminino"],
            datasets: [
                {
                data: [300, 50],
                backgroundColor: [
                    "#2196f3",
                    "#f76cec"
                ],
                hoverBackgroundColor: [
                    "#6cbaf7",
                    "#f76ce6"
                ]
                }
            ]
        },
        dataPieAnuncio: {
            labels: ["cidade x", "Estado y", "Destaque", "Empresas"],
            datasets: [
                {
                data: [300, 50, 100, 40],
                backgroundColor: [
                    "#F7464A",
                    "#46BFBD",
                    "#FDB45C",
                    "#949FB1"
                ],
                hoverBackgroundColor: [
                    "#FF5A5E",
                    "#5AD3D1",
                    "#FFC870",
                    "#A8B3C5"
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
                    <div className="col-xl-6">
                        <NewUsers />
                    </div>
                    <div className="col-xl-6">
                        <Portlet fluidHeight={true}>
                            <PortletHeader
                            title="Centro Médico"
                            toolbar={
                                <PortletHeaderToolbar>
                                <PortletHeaderDropdown />
                                </PortletHeaderToolbar>
                            }
                            />

                            <PortletBody>
                            <OrderStatisticsChart />
                            </PortletBody>
                        </Portlet>
                    </div>
                    <div className="col-xl-6">
                        <Portlet fluidHeight={true}>
                            <PortletHeader
                            title="Profissionais da Saúde"
                            toolbar={
                                <PortletHeaderToolbar>
                                <PortletHeaderDropdown />
                                </PortletHeaderToolbar>
                            }
                            />

                            <PortletBody>
                            <OrderStatisticsChart />
                            </PortletBody>
                        </Portlet>
                    </div>
                    <div className="col-xl-6">
                        <Portlet fluidHeight={true}>
                            <PortletHeader
                            title="Pacientes"
                            toolbar={
                                <PortletHeaderToolbar>
                                <PortletHeaderDropdown />
                                </PortletHeaderToolbar>
                            }
                            />

                            <PortletBody>
                            <OrderStatisticsChart />
                            </PortletBody>
                        </Portlet>
                    </div>
                    <div className="col-xl-6">
                        <Portlet fluidHeight={true}>
                            <PortletHeader
                            title="Consultas Plano"
                            toolbar={
                                <PortletHeaderToolbar>
                                <PortletHeaderDropdown />
                                </PortletHeaderToolbar>
                            }
                            />

                            <PortletBody>
                            <OrderStatisticsChart />
                            </PortletBody>
                        </Portlet>
                    </div>
                    <div className="col-xl-6">
                        <Portlet fluidHeight={true}>
                            <PortletHeader
                            title="Consultas Particulares"
                            toolbar={
                                <PortletHeaderToolbar>
                                <PortletHeaderDropdown />
                                </PortletHeaderToolbar>
                            }
                            />

                            <PortletBody>
                            <OrderStatisticsChart />
                            </PortletBody>
                        </Portlet>
                    </div>
                    <div className="col-xl-6">
                        <Portlet fluidHeight={true}>
                            <PortletHeader
                            title="Consultas Online"
                            toolbar={
                                <PortletHeaderToolbar>
                                <PortletHeaderDropdown />
                                </PortletHeaderToolbar>
                            }
                            />

                            <PortletBody>
                            <OrderStatisticsChart />
                            </PortletBody>
                        </Portlet>
                    </div>
                    <div className="col-xl-6">
                        <Portlet fluidHeight={true}>
                            <PortletHeader
                            title="Exames"
                            toolbar={
                                <PortletHeaderToolbar>
                                <PortletHeaderDropdown />
                                </PortletHeaderToolbar>
                            }
                            />

                            <PortletBody>
                            <OrderStatisticsChart />
                            </PortletBody>
                        </Portlet>
                    </div>
                    <div className="col-xl-6">
                        <Portlet fluidHeight={true}>
                            <PortletHeader
                            title="Medicamentos"
                            toolbar={
                                <PortletHeaderToolbar>
                                <PortletHeaderDropdown />
                                </PortletHeaderToolbar>
                            }
                            />

                            <PortletBody>
                            <OrderStatisticsChart />
                            </PortletBody>
                        </Portlet>
                    </div>
                    <div className="col-xl-6">
                        <Portlet>
                            <PortletHeader title="Consultas e Exames"/>
                            <PortletBody>
                                <ChartPie data={this.state.dataPieCidadeEstado} />
                            </PortletBody>
                        </Portlet>
                    </div>
                    <div className="col-xl-6">
                        <Portlet>
                            <PortletHeader title="Consultas Masculinas e Femininos"/>
                            <PortletBody>
                                <ChartPie data={this.state.dataPie} />
                            </PortletBody>
                        </Portlet>
                    </div>
                    <div className="col-xl-6">
                        <Portlet>
                            <PortletHeader title="Anúncios"/>
                            <PortletBody>
                                <ChartPie data={this.state.dataPieAnuncio} />
                            </PortletBody>
                        </Portlet>
                    </div>
                    <div className="col-12">
                        <Portlet>
                            <PortletHeader title="Anúncios"
                            toolbar={(
                                <PortletHeaderToolbar>
                                    <Select value={0} name="filter">
                                        <MenuItem value={0}>Todos</MenuItem>
                                        <MenuItem value={1}>Dia</MenuItem>
                                        <MenuItem value={2}>Semana</MenuItem>
                                        <MenuItem value={3}>Mês</MenuItem>
                                    </Select>
                                </PortletHeaderToolbar>)}/>
                            <PortletBody>
                            <DataTable data={this.state.tableDataAnuncios} />
                            </PortletBody>
                        </Portlet>
                    </div>
                    <div className="col-12">
                        <Portlet>
                            <PortletHeader title="Planos Centro Médico PRO"
                            toolbar={(
                                <PortletHeaderToolbar>
                                    <Select value={0} name="filter">
                                        <MenuItem value={0}>Todos</MenuItem>
                                        <MenuItem value={1}>Dia</MenuItem>
                                        <MenuItem value={2}>Semana</MenuItem>
                                        <MenuItem value={3}>Mês</MenuItem>
                                    </Select>
                                </PortletHeaderToolbar>)}/>
                            <PortletBody>
                            <DataTable data={this.state.tableDataPacoteMedicoPro} />
                            </PortletBody>
                        </Portlet>
                    </div>
                    <div className="col-12">
                        <Portlet>
                            <PortletHeader title="Planos Centro Médico PLUS"
                            toolbar={(
                                <PortletHeaderToolbar>
                                    <Select value={0} name="filter">
                                        <MenuItem value={0}>Todos</MenuItem>
                                        <MenuItem value={1}>Dia</MenuItem>
                                        <MenuItem value={2}>Semana</MenuItem>
                                        <MenuItem value={3}>Mês</MenuItem>
                                    </Select>
                                </PortletHeaderToolbar>)}/>
                            <PortletBody>
                            <DataTable data={this.state.tableDataPacoteMedicoPlus} />
                            </PortletBody>
                        </Portlet>
                    </div>
                    <div className="col-12">
                        <Portlet>
                            <PortletHeader title="Planos Centro Médico STARTER"
                            toolbar={(
                                <PortletHeaderToolbar>
                                    <Select value={0} name="filter">
                                        <MenuItem value={0}>Todos</MenuItem>
                                        <MenuItem value={1}>Dia</MenuItem>
                                        <MenuItem value={2}>Semana</MenuItem>
                                        <MenuItem value={3}>Mês</MenuItem>
                                    </Select>
                                </PortletHeaderToolbar>)}/>
                            <PortletBody>
                            <DataTable data={this.state.tableDataPacoteMedicoStarter} />
                            </PortletBody>
                        </Portlet>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default AdminDashboard
