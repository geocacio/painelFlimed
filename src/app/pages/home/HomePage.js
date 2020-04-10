import React, { Suspense, lazy } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Builder from "./Builder";
import Dashboard from "./Dashboard";
import DocsPage from "./docs/DocsPage";
import { LayoutSplashScreen } from "../../../_metronic";
import ProfissionaisSaude from "../admin/ProfissionaisSaude";
import Profissional from "../admin/Profissional";
import ExamesProfissional from "../admin/ExamesProfissional";
import PacientesDetalhe from "../admin/PacientesDetalhe";
import ProfissionaisConsulta from "../admin/ProfissionaisConsulta";
import Comunicacao from "../admin/Comunicacao";
import ArtigosEnviadosProfissionaisSaude from "../admin/ArtigosEnviadosProfissionaisSaude";
import ArtigosEnviadosPacientes from "../admin/ArtigosEnviadosPacientes";
import PerguntasPacientes from "../admin/PerguntasPacientes";
import RespostasMedicos from "../admin/RespostasMedicos";
import Anuncios from "../admin/Anuncios";
import AnunciosEmpresas from "../admin/AnunciosEmpresas";
import AnunciosDestaques from "../admin/AnunciosDestaques";
// import Anuncios2 from "../admin/Anuncios2";
import Consultas from "../admin/Consultas";
import Exames from "../admin/Exames";
import TelemedicinaConsultasOnline from "../admin/TelemedicinaConsultasOnline";
import TelemedicinaConsultaResumo from "../admin/TelemedicinaConsultaResumo";
import TelemedicinaPacienteOnline from "../admin/TelemedicinaPacienteOnline";
import TelemedicinaOnlineCentroMedico from "../admin/TelemedicinaOnlineCentroMedico";
import TelemedicinaOnlineProfissionalSaude from "../admin/TelemedicinaOnlineProfissionalSaude";
import Pacientes from "../admin/Pacientes";
import PacientesDetalhes from "../admin/PacientesDetalhes";
import PacientesConsultas from "../admin/PacientesConsultas";
import MedicamentosDetalhes from "../admin/MedicamentosDetalhes";
import Medicamentos from "../admin/Medicamentos";
import PlanosCentroMedico from "../admin/PlanosCentroMedico";
import PlanosCentroMedicoAD from "../admin/PlanosCentroMedicoAD";
import PlanosProfissionaisSaudeAD from "../admin/PlanosProfissionaisSaudeAD";
import CentroMedico from "../admin/CentroMedico";
import ProfissionaisCentroMedico from "../admin/ProfissionaisCentroMedico";
import ProfissionalCentroMedico from "../admin/ProfissionalCentroMedico";
import CentroMedicoExame from "../admin/CentroMedicoExame";
import CentroMedicoConsulta from "../admin/CentroMedicoConsulta";
import PacientesDetalhesCentroMedico from "../admin/PacientesDetalhesCentroMedico";
import Noticias from "../admin/Noticias";
import ProfissionaisReceitas from "../admin/ProfissionaisReceitas";
import ProfissionaisDespesas from "../admin/ProfissionaisDespesas";
import ProfissionaisAPagar from "../admin/ProfissionaisAPagar";
import CentroMedicoReceitas from "../admin/CentroMedicoReceitas";
import CentroMedicoDespesas from "../admin/CentroMedicoDespesas";
import CentroMedicoAPagar from "../admin/CentroMedicoAPagar";
import Valores from "../admin/Valores";
import ContasFlimed from "../admin/ContasFlimed";
import ContasFlimedAReceber from "../admin/ContasFlimedAReceber";
import ContasFlimedAPagar from "../admin/ContasFlimedAPagar";
import TermosDeUso from "../admin/TermosDeUso";
import PoliticaPrivacidade from "../admin/PoliticaPrivacidade";
import GerenciamentoUsuarios from "../admin/GerenciamentoUsuarios";
import AddUsuarios from "../admin/AddUsuarios";
import AddPlanos from "../admin/AddPlanos";
// import AddCategoriasProfissionais from "../admin/AddCategoriasProfissionais";
import AdminDashboard from "../admin/AdminDashboard";

const GoogleMaterialPage = lazy(() =>
  import("./google-material/GoogleMaterialPage")
);
const ReactBootstrapPage = lazy(() =>
  import("./react-bootstrap/ReactBootstrapPage")
);

export default function HomePage() {
  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Switch>
        {
          /* Redirect from root URL to /dashboard. */
          <Redirect exact from="/" to="/dashboard" />
        }
        
        {/* Minhas rotas */}
        <Route path="/pagina-inicial" component={AdminDashboard} />
        <Route path="/profissionais-de-saude" component={ProfissionaisSaude} />
        <Route path="/profissional" component={Profissional} />
        <Route path="/exames-profissional" component={ExamesProfissional} />
        <Route path="/paciente-detalhe" component={PacientesDetalhe} />
        <Route path="/profissionais-consulta" component={ProfissionaisConsulta} />
        <Route path="/comunicacao" component={Comunicacao} />
        <Route path="/artigos-enviados-por-profissionais-de-saude" component={ArtigosEnviadosProfissionaisSaude} />
        <Route path="/artigos-enviados-por-pacientes" component={ArtigosEnviadosPacientes} />
        <Route path="/perguntas-pacientes" component={PerguntasPacientes} />
        <Route path="/respostas-medicos" component={RespostasMedicos} />
        <Route path="/anuncios" component={Anuncios} />
        <Route path="/empresas" component={AnunciosEmpresas} />
        <Route path="/anuncios-destaques" component={AnunciosDestaques} />
        {/* <Route path="/anuncios2" component={Anuncios2} /> */}
        <Route path="/consultas" component={Consultas} />
        <Route path="/exames" component={Exames} />
        <Route path="/telemedicina-consultas-online" component={TelemedicinaConsultasOnline} />
        <Route path="/consulta-resumo" component={TelemedicinaConsultaResumo} />
        <Route path="/paciente-online" component={TelemedicinaPacienteOnline} />
        <Route path="/online-dados-centro-medico" component={TelemedicinaOnlineCentroMedico} />
        <Route path="/online-profissional-saude" component={TelemedicinaOnlineProfissionalSaude} />
        <Route path="/pacientes" component={Pacientes} />
        <Route path="/pacientes-detalhe" component={PacientesDetalhes} />
        <Route path="/pacientes-consultas" component={PacientesConsultas} />
        <Route path="/medicamentos" component={Medicamentos} />
        <Route path="/medicamentos-detalhes" component={MedicamentosDetalhes} />
        <Route path="/planos-centro-medico" component={PlanosCentroMedico} />
        <Route path="/planos-centro-medicoad" component={PlanosCentroMedicoAD} />
        <Route path="/planos-progissionais-saudead" component={PlanosProfissionaisSaudeAD} />
        <Route path="/centro-medico" component={CentroMedico} />
        <Route path="/profissionais-centro" component={ProfissionaisCentroMedico} />
        <Route path="/profissional-centro-medico" component={ProfissionalCentroMedico} />
        <Route path="/centro-medico-exame" component={CentroMedicoExame} />
        <Route path="/centro-medico-consulta" component={CentroMedicoConsulta} />
        <Route path="/centro-medico-pacientes-detalhes" component={PacientesDetalhesCentroMedico} />
        <Route path="/noticias" component={Noticias} />
        <Route path="/profissionais-receitas" component={ProfissionaisReceitas} />
        <Route path="/profissionais-despesas" component={ProfissionaisDespesas} />
        <Route path="/profissionais-a-pagar" component={ProfissionaisAPagar} />
        <Route path="/centro-medico-receitas" component={CentroMedicoReceitas} />
        <Route path="/centro-medico-despesas" component={CentroMedicoDespesas} />
        <Route path="/centro-medico-a-pagar" component={CentroMedicoAPagar} />
        <Route path="/valores" component={Valores} />
        <Route path="/contas-flimed" component={ContasFlimed} />
        <Route path="/contas-flimed-receber" component={ContasFlimedAReceber} />
        <Route path="/contas-flimed-pagar" component={ContasFlimedAPagar} />
        <Route path="/politica-privacidade" component={PoliticaPrivacidade} />
        <Route path="/termos-uso" component={TermosDeUso} />
        <Route path="/gerenciamento-usuarios" component={GerenciamentoUsuarios} />
        <Route path="/novo-usuario" component={AddUsuarios} />
        <Route path="/novo-plano" component={AddPlanos} />
        {/* <Route path="/cadastro-categorias-profissionais" component={AddCategoriasProfissionais} /> */}
        {/* Fim das minhas rotas */}

        <Route path="/builder" component={Builder} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/google-material" component={GoogleMaterialPage} />
        <Route path="/react-bootstrap" component={ReactBootstrapPage} />
        <Route path="/docs" component={DocsPage} />
        <Redirect to="/error/error-v1" />
      </Switch>
    </Suspense>
  );
}
