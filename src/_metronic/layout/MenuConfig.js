export default {
  header: {
    self: {},
    items: [
      {
        title: "Dashboards",
        root: true,
        alignment: "left",
        page: "dashboard",
        translate: "MENU.DASHBOARD"
      },
      {
        title: "Material UI",
        root: true,
        alignment: "left",
        toggle: "click",
        submenu: [
          {
            title: "Layout",
            bullet: "dot",
            submenu: [
              {
                title: "Box",
                bullet: "line",
                page: "google-material/layout/box"
              },
              {
                title: "Container",
                bullet: "line",
                page: "google-material/layout/container"
              },
              {
                title: "Grid",
                bullet: "line",
                page: "google-material/layout/grid"
              },
              {
                title: "Grid list",
                bullet: "line",
                page: "google-material/layout/grid-list"
              },
              {
                title: "Hidden",
                bullet: "line",
                page: "google-material/layout/hidden"
              }
            ]
          },
          {
            title: "Inputs",
            bullet: "dot",
            submenu: [
              {
                title: "Autocomplete",
                page: "google-material/inputs/autocomplete",
                bullet: "line",
                permission: "accessToECommerceModule"
              },
              {
                title: "Buttons",
                page: "google-material/inputs/buttons",
                bullet: "line"
              },
              {
                title: "Checkboxes",
                page: "google-material/inputs/checkboxes",
                bullet: "line"
              },
              {
                title: "Pickers",
                page: "google-material/inputs/pickers",
                bullet: "line"
              },
              {
                title: "Radio Buttons",
                page: "google-material/inputs/radio-buttons",
                bullet: "line"
              },
              {
                title: "Selects",
                page: "google-material/inputs/selects",
                bullet: "line"
              },
              {
                title: "Switches",
                page: "google-material/inputs/switches",
                bullet: "line"
              },
              {
                title: "Text Fields",
                page: "google-material/inputs/text-fields",
                bullet: "line"
              },
              {
                title: "Transfer List",
                page: "google-material/inputs/transfer-list",
                bullet: "line"
              }
            ]
          },
          {
            title: "Navigation",
            bullet: "dot",
            submenu: [
              {
                title: "Bottom Navigation",
                bullet: "line",
                page: "google-material/navigation/bottom-navigation"
              },
              {
                title: "Breadcrumbs",
                bullet: "line",
                page: "google-material/navigation/breadcrumbs"
              },
              {
                title: "Drawers",
                bullet: "line",
                page: "google-material/navigation/drawer"
              },
              {
                title: "Links",
                bullet: "line",
                page: "google-material/navigation/links"
              },
              {
                title: "Menus",
                bullet: "line",
                page: "google-material/navigation/menus"
              },
              {
                title: "Steppers",
                bullet: "line",
                page: "google-material/navigation/steppers"
              },
              {
                title: "Tabs",
                bullet: "line",
                page: "google-material/navigation/tabs"
              }
            ]
          },
          {
            title: "Surfaces",
            bullet: "dot",
            submenu: [
              {
                title: "App Bar",
                bullet: "line",
                page: "google-material/surfaces/app-bar"
              },
              {
                title: "Paper",
                bullet: "line",
                page: "google-material/surfaces/paper"
              },
              {
                title: "Cards",
                bullet: "line",
                page: "google-material/surfaces/cards"
              },
              {
                title: "Expansion Panels",
                bullet: "line",
                page: "google-material/surfaces/expansion-panels"
              }
            ]
          },
          {
            title: "Feedback",
            bullet: "dot",
            submenu: [
              {
                title: "Progress",
                bullet: "line",
                page: "google-material/feedback/progress"
              },
              {
                title: "Dialogs",
                bullet: "line",
                page: "google-material/feedback/dialogs"
              },
              {
                title: "Snackbars",
                bullet: "line",
                page: "google-material/feedback/snackbars"
              }
            ]
          },
          {
            title: "Data Display",
            bullet: "dot",
            submenu: [
              {
                title: "Avatars",
                bullet: "line",
                page: "google-material/data-displays/avatars"
              },
              {
                title: "Badges",
                bullet: "line",
                page: "google-material/data-displays/badges"
              },
              {
                title: "Chips",
                bullet: "line",
                page: "google-material/data-displays/chips"
              },
              {
                title: "Dividers",
                bullet: "line",
                page: "google-material/data-displays/dividers"
              },
              {
                title: "Icons",
                bullet: "line",
                page: "google-material/data-displays/icons"
              },
              {
                title: "Lists",
                bullet: "line",
                page: "google-material/data-displays/lists"
              },
              {
                title: "Tables",
                bullet: "line",
                page: "google-material/data-displays/tables"
              },
              {
                title: "Tooltips",
                bullet: "line",
                page: "google-material/data-displays/tooltips"
              },
              {
                title: "Typography",
                bullet: "line",
                page: "google-material/data-displays/typography"
              }
            ]
          },
          {
            title: "Utils",
            bullet: "dot",
            submenu: [
              {
                title: "Click Away Listener",
                bullet: "line",
                page: "google-material/utils/click-away-listener"
              },
              {
                title: "Modal",
                bullet: "line",
                page: "google-material/utils/modal"
              },
              {
                title: "No SSR",
                bullet: "line",
                page: "google-material/utils/no-ssr"
              },
              {
                title: "Popover",
                bullet: "line",
                page: "google-material/utils/popover"
              },
              {
                title: "Popper",
                bullet: "line",
                page: "google-material/utils/popper"
              },
              {
                title: "Portal",
                bullet: "line",
                page: "google-material/utils/portal"
              },
              {
                title: "Transitions",
                bullet: "line",
                page: "google-material/utils/transitions"
              },
              {
                title: "useMediaQuery",
                bullet: "line",
                page: "google-material/utils/use-media-query"
              }
            ]
          }
        ]
      },
      {
        title: "Bootstrap",
        root: true,
        alignment: "left",
        toggle: "click",
        submenu: {
          type: "mega",
          width: "800px",
          alignment: "left",
          columns: [
            {
              items: [
                {
                  title: "Alerts",
                  page: "react-bootstrap/alert"
                },
                {
                  title: "Accordion",
                  page: "react-bootstrap/accordion"
                },
                {
                  title: "Badge",
                  page: "react-bootstrap/badge"
                },
                {
                  title: "Breadcrumb",
                  page: "react-bootstrap/breadcrumb"
                },
                {
                  title: "Buttons",
                  page: "react-bootstrap/buttons"
                },
                {
                  title: "Button Group",
                  page: "react-bootstrap/button-group"
                },
                {
                  title: "Cards",
                  page: "react-bootstrap/cards"
                }
              ]
            },
            {
              items: [
                {
                  title: "Carousel",
                  page: "react-bootstrap/carousel",
                  bullet: "line"
                },
                {
                  title: "Dropdowns",
                  page: "react-bootstrap/dropdowns",
                  bullet: "line"
                },
                {
                  title: "Forms",
                  page: "react-bootstrap/forms",
                  bullet: "line"
                },
                {
                  title: "Input Group",
                  page: "react-bootstrap/input-group",
                  bullet: "line"
                },
                {
                  title: "Images",
                  page: "react-bootstrap/images",
                  bullet: "line"
                },
                {
                  title: "Figures",
                  page: "react-bootstrap/figures",
                  bullet: "line"
                },
                {
                  title: "Jumbotron",
                  page: "react-bootstrap/jumbotron",
                  bullet: "line"
                }
              ]
            },
            {
              items: [
                {
                  title: "List group",
                  page: "react-bootstrap/list-group",
                  bullet: "dot"
                },
                {
                  title: "Modal",
                  page: "react-bootstrap/modal",
                  bullet: "dot"
                },
                {
                  title: "Navs",
                  page: "react-bootstrap/navs",
                  bullet: "dot"
                },
                {
                  title: "Navbar",
                  page: "react-bootstrap/navbar",
                  bullet: "dot"
                },
                {
                  title: "Overlays",
                  page: "react-bootstrap/overlays",
                  bullet: "dot"
                },
                {
                  title: "Pagination",
                  page: "react-bootstrap/pagination",
                  bullet: "dot"
                },
                {
                  title: "Popovers",
                  page: "react-bootstrap/popovers",
                  bullet: "dot"
                }
              ]
            },
            {
              items: [
                {
                  title: "Progress",
                  page: "react-bootstrap/progress"
                },
                {
                  title: "Spinners",
                  page: "react-bootstrap/spinners"
                },
                {
                  title: "Table",
                  page: "react-bootstrap/table"
                },
                {
                  title: "Tabs",
                  page: "react-bootstrap/tabs"
                },
                {
                  title: "Tooltips",
                  page: "react-bootstrap/tooltips"
                },
                {
                  title: "Toasts",
                  page: "react-bootstrap/toasts"
                }
              ]
            }
          ]
        }
      },
      // {
      //   title: "Components",
      //   root: true,
      //   alignment: "left",
      //   toggle: "click",
      //   submenu: [
      //     {
      //       title: "React Bootstrap",
      //       bullet: "dot",
      //       icon: "flaticon-web",
      //       submenu: [
      //
      //
      //       ]
      //     }
      //   ]
      // },
      {
        title: "Custom",
        root: true,
        alignment: "left",
        toggle: "click",
        submenu: [
          {
            title: "Layout Builder",
            icon: "flaticon2-expand",
            page: "builder"
          },
          {
            title: "Error Pages",
            bullet: "dot",
            icon: "flaticon2-warning",
            submenu: [
              {
                title: "Error 1",
                page: "error/error-v1"
              },
              {
                title: "Error 2",
                page: "error/error-v2"
              },
              {
                title: "Error 3",
                page: "error/error-v3"
              },
              {
                title: "Error 4",
                page: "error/error-v4"
              },
              {
                title: "Error 5",
                page: "error/error-v5"
              },
              {
                title: "Error 6",
                page: "error/error-v6"
              }
            ]
          }
        ]
      }
    ]
  },
  aside: {
    self: {},
    items: [
      // {
      //   title: "Dashboard",
      //   root: true,
      //   icon: "flaticon2-architecture-and-city",
      //   page: "dashboard",
      //   translate: "MENU.DASHBOARD",
      //   bullet: "dot"
      // },
      {
        title: "Início",
        root: true,
        icon: "flaticon2-architecture-and-city",
        page: "pagina-inicial",
        bullet: "dot"
      },
      {
        title: "Profissionais de Saúde ",
        root: true,
        icon: "flaticon-users",
        bullet: "dot",
        submenu: [
          {
            title: "Lista de Profissionais",
            page: "profissionais-de-saude"
          },
          {
            title: "Profissional",
            page: "profissional"
          },
          {
            title: "Exames Profissional",
            page: "exames-profissional"
          },
          {
            title: "Pacientes Detalhe",
            page: "paciente-detalhe"
          },
          {
            title: "Consultar Profissionais",
            page: "profissionais-consulta"
          },
        ]
      },
      {
        title: "Comunicação",
        root: true,
        icon: "flaticon2-rectangular",
        page: "comunicacao",        
        bullet: "dot"
      },
      {
        title: "Artigos",
        root: true,
        icon: "flaticon-email",
        bullet: "dot",
        submenu: [
          {
            title: "Enviados por",
            bullet: "dot",
            submenu: [
              {
                title: "Profissionais de Saúde",
                page: "artigos-enviados-por-profissionais-de-saude"
              },
              {
                title: "Pacientes",
                page: "artigos-enviados-por-pacientes"
              },
            ]
          },
          {
            title: "Perguntas dos Pacientes",
            page: "perguntas-pacientes"
          },
          {
            title: "Respostas dos Médicos",
            page: "respostas-medicos"
          },
        ]
      },
      {
        title: "Chat",
        root: true,
        icon: "flaticon2-chat-1",
        bullet: "dot",
        submenu: [
          {
            title: "Chat",
            page: "#"
          },
          {
            title: "Suporte Médico",
            page: "#"
          },
          {
            title: "Suporte Profissional de Saúde",
            page: "#"
          },
          {
            title: "Suporte ao Paciente",
            page: "#"
          },
        ]
      },
      {
        title: "Anúncios",
        root: true,
        icon: "flaticon2-speaker",
        bullet: "dot",
        submenu: [
          {
            title: "Lista de Anúncios",
            page: "anuncios"
          },
          {
            title: "Empresas",
            page: "empresas"
          },
          {
            title: "Destaques",
            page: "anuncios-destaques"
          },
          // {
          //   title: "Anúncios",
          //   page: "anuncios2"
          // },
        ]
      },
      {
        title: "Consultas e Exames",
        root: true,
        icon: "flaticon-list",
        bullet: "dot",
        submenu: [
          {
            title: "Consultas",
            page: "consultas"
          },
          {
            title: "Exames",
            page: "exames"
          },
        ]
      },
      {
        title: "Telemedicina",
        root: true,
        icon: "flaticon-profile",
        bullet: "dot",
        submenu: [
          {
            title: "Consultas Online",
            page: "telemedicina-consultas-online"
          },
          {
            title: "Resumo",
            page: "consulta-resumo"
          },
          {
            title: "Online Paciente",
            page: "paciente-online"
          },
          {
            title: "Online Dados Centro Médico",
            page: "online-dados-centro-medico"
          },
          {
            title: "Online Profissional de Saúde",
            page: "online-profissional-saude"
          },
        ]
      },
      {
        title: "Pacientes ",
        root: true,
        icon: "flaticon-users",
        bullet: "dot",
        submenu: [
          {
            title: "Lista de Pacientes",
            page: "pacientes"
          },
          {
            title: "Detalhes",
            page: "pacientes-detalhe"
          },
          {
            title: "Consultas",
            page: "pacientes-consultas"
          },
        ]
      },
      {
        title: "Medicamentos",
        root: true,
        icon: "flaticon2-drop",
        bullet: "dot",
        submenu: [
          {
            title: "Lista de Medicamentos",
            page: "medicamentos"
          },
          {
            title: "Detalhes",
            page: "medicamentos-detalhes"
          },
        ]
      },
      {
        title: "Planos FLIMED",
        root: true,
        icon: "flaticon-paper-plane",
        bullet: "dot",
        submenu: [
          {
            title: "Plano Centro Médico",
            page: "planos-centro-medico"
          },
          {
            title: "Plano Centro Médico AD",
            page: "planos-centro-medicoad"
          },
          {
            title: "Plano Profissional de Saúde AD",
            page: "planos-progissionais-saudead"
          },
        ]
      },
      {
        title: "Centro Médico",
        root: true,
        icon: "flaticon2-hospital",
        bullet: "dot",
        submenu: [
          {
            title: "Centro Médico Lista",
            page: "centro-medico"
          },
          {
            title: "Profissionais do Centro",
            page: "profissionais-centro"
          },
          {
            title: "Profissional",
            page: "profissional-centro-medico"
          },
          {
            title: "Centro Médico Exame",
            page: "centro-medico-exame"
          },
          {
            title: "Centro Médico Consulta",
            page: "centro-medico-consulta"
          },
          {
            title: "Pacientes Detalhes",
            page: "centro-medico-pacientes-detalhes"
          },
        ]
      },
      {
        title: "Notícias",
        root: true,
        icon: "flaticon2-notification",
        page: "noticias",
        bullet: "dot"
      },
      { title: "Financeiro / Profissional",
        root: true,
        icon: "flaticon-interface-1",
        bullet: "dot",
        submenu: [
          {
            title: "Profissional Receita",
            page: "profissionais-receitas"
          },
          {
            title: "Profissional Despesas",
            page: "profissionais-despesas"
          },
          {
            title: "Profissional a Pagar",
            page: "profissionais-a-pagar"
          },
        ]
      },
      { title: "Financeiro / Centro Médico",
        root: true,
        icon: "flaticon-interface-1",
        bullet: "dot",
        submenu: [
          {
            title: "Centro Médico Receita",
            page: "centro-medico-receitas"
          },
          {
            title: "Centro Médico Despesas",
            page: "centro-medico-despesas"
          },
          {
            title: "Centro Médico a Pagar",
            page: "centro-medico-a-pagar"
          },
        ]
      },
      { title: "Valores",
        root: true,
        icon: "flaticon-price-tag",
        page: "valores",
        bullet: "dot",
      },
      { title: "Contas Flimed",
        root: true,
        icon: "flaticon-interface-1",
        bullet: "dot",
        submenu: [
          {
            title: "Lista de contas Flimed",
            page: "contas-flimed"
          },
          {
            title: "Contas a Receber",
            page: "contas-flimed-receber"
          },
          {
            title: "Contas a Pagar",
            page: "contas-flimed-pagar"
          },
        ]
      },      
      {
        title: "Gerenciamento de Usuários",
        root: true,
        icon: "flaticon-user-settings",
        page: "gerenciamento-usuarios",
        bullet: "dot"
      },
      
      {
        title: "Privacidade e Termos",
        root: true,
        icon: "flaticon2-crisp-icons",       
        bullet: "dot",
        submenu: [
          {
            title: "Política de Privacidade",
            page: "politica-privacidade"            
          },
          {
            title: "Termos de Uso",
            page: "termos-uso"            
          }
        ]
      },
      
      // {
      //   title: "Layout Builder",
      //   root: true,
      //   icon: "flaticon2-expand",
      //   page: "builder"
      // },
      // { section: "Components" },
      // {
      //   title: "Material UI",
      //   root: true,
      //   bullet: "dot",
      //   icon: "flaticon2-browser-2",
      //   submenu: [
      //     {
      //       title: "Layout",
      //       bullet: "dot",
      //       submenu: [
      //         {
      //           title: "Box",
      //           page: "google-material/layout/box"
      //         },
      //         {
      //           title: "Container",
      //           page: "google-material/layout/container"
      //         },
      //         {
      //           title: "Grid",
      //           page: "google-material/layout/grid"
      //         },
      //         {
      //           title: "Grid list",
      //           page: "google-material/layout/grid-list"
      //         },
      //         {
      //           title: "Hidden",
      //           page: "google-material/layout/hidden"
      //         }
      //       ]
      //     },
      //     {
      //       title: "Inputs",
      //       bullet: "dot",
      //       submenu: [
      //         {
      //           title: "Autocomplete",
      //           page: "google-material/inputs/autocomplete",
      //           permission: "accessToECommerceModule"
      //         },
      //         {
      //           title: "Buttons",
      //           page: "google-material/inputs/buttons"
      //         },
      //         {
      //           title: "Checkboxes",
      //           page: "google-material/inputs/checkboxes"
      //         },
      //         {
      //           title: "Pickers",
      //           page: "google-material/inputs/pickers"
      //         },
      //         {
      //           title: "Radio Buttons",
      //           page: "google-material/inputs/radio-buttons"
      //         },
      //         {
      //           title: "Selects",
      //           page: "google-material/inputs/selects"
      //         },
      //         {
      //           title: "Switches",
      //           page: "google-material/inputs/switches"
      //         },
      //         {
      //           title: "Text Fields",
      //           page: "google-material/inputs/text-fields"
      //         },
      //         {
      //           title: "Transfer List",
      //           page: "google-material/inputs/transfer-list"
      //         }
      //       ]
      //     },
      //     {
      //       title: "Navigation",
      //       bullet: "dot",
      //       submenu: [
      //         {
      //           title: "Bottom Navigation",
      //           page: "google-material/navigation/bottom-navigation"
      //         },
      //         {
      //           title: "Breadcrumbs",
      //           page: "google-material/navigation/breadcrumbs"
      //         },
      //         {
      //           title: "Drawers",
      //           page: "google-material/navigation/drawer"
      //         },
      //         {
      //           title: "Links",
      //           page: "google-material/navigation/links"
      //         },
      //         {
      //           title: "Menus",
      //           page: "google-material/navigation/menus"
      //         },
      //         {
      //           title: "Steppers",
      //           page: "google-material/navigation/steppers"
      //         },
      //         {
      //           title: "Tabs",
      //           page: "google-material/navigation/tabs"
      //         }
      //       ]
      //     },
      //     {
      //       title: "Surfaces",
      //       bullet: "dot",
      //       submenu: [
      //         {
      //           title: "App Bar",
      //           page: "google-material/surfaces/app-bar"
      //         },
      //         {
      //           title: "Paper",
      //           page: "google-material/surfaces/paper"
      //         },
      //         {
      //           title: "Cards",
      //           page: "google-material/surfaces/cards"
      //         },
      //         {
      //           title: "Expansion Panels",
      //           page: "google-material/surfaces/expansion-panels"
      //         }
      //       ]
      //     },
      //     {
      //       title: "Feedback",
      //       bullet: "dot",
      //       submenu: [
      //         {
      //           title: "Progress",
      //           page: "google-material/feedback/progress"
      //         },
      //         {
      //           title: "Dialogs",
      //           page: "google-material/feedback/dialogs"
      //         },
      //         {
      //           title: "Snackbars",
      //           page: "google-material/feedback/snackbars"
      //         }
      //       ]
      //     },
      //     {
      //       title: "Data Display",
      //       bullet: "dot",
      //       submenu: [
      //         {
      //           title: "Avatars",
      //           page: "google-material/data-displays/avatars"
      //         },
      //         {
      //           title: "Badges",
      //           page: "google-material/data-displays/badges"
      //         },
      //         {
      //           title: "Chips",
      //           page: "google-material/data-displays/chips"
      //         },
      //         {
      //           title: "Dividers",
      //           page: "google-material/data-displays/dividers"
      //         },
      //         {
      //           title: "Icons",
      //           page: "google-material/data-displays/icons"
      //         },
      //         {
      //           title: "Lists",
      //           page: "google-material/data-displays/lists"
      //         },
      //         {
      //           title: "Tables",
      //           page: "google-material/data-displays/tables"
      //         },
      //         {
      //           title: "Tooltips",
      //           page: "google-material/data-displays/tooltips"
      //         },
      //         {
      //           title: "Typography",
      //           page: "google-material/data-displays/typography"
      //         }
      //       ]
      //     },
      //     {
      //       title: "Utils",
      //       bullet: "dot",
      //       submenu: [
      //         {
      //           title: "Click Away Listener",
      //           page: "google-material/utils/click-away-listener"
      //         },
      //         {
      //           title: "Modal",
      //           page: "google-material/utils/modal"
      //         },
      //         {
      //           title: "No SSR",
      //           page: "google-material/utils/no-ssr"
      //         },
      //         {
      //           title: "Popover",
      //           page: "google-material/utils/popover"
      //         },
      //         {
      //           title: "Popper",
      //           page: "google-material/utils/popper"
      //         },
      //         {
      //           title: "Portal",
      //           page: "google-material/utils/portal"
      //         },
      //         {
      //           title: "Transitions",
      //           page: "google-material/utils/transitions"
      //         },
      //         {
      //           title: "useMediaQuery",
      //           page: "google-material/utils/use-media-query"
      //         }
      //       ]
      //     }
      //   ]
      // },
      // {
      //   title: "Bootstrap",
      //   root: true,
      //   bullet: "dot",
      //   icon: "flaticon2-digital-marketing",
      //   submenu: [
      //     {
      //       title: "Alerts",
      //       page: "react-bootstrap/alert"
      //     },
      //     {
      //       title: "Accordion",
      //       page: "react-bootstrap/accordion"
      //     },
      //     {
      //       title: "Badge",
      //       page: "react-bootstrap/badge"
      //     },
      //     {
      //       title: "Breadcrumb",
      //       page: "react-bootstrap/breadcrumb"
      //     },
      //     {
      //       title: "Buttons",
      //       page: "react-bootstrap/buttons"
      //     },
      //     {
      //       title: "Button Group",
      //       page: "react-bootstrap/button-group"
      //     },
      //     {
      //       title: "Cards",
      //       page: "react-bootstrap/cards"
      //     },
      //     {
      //       title: "Carousel",
      //       page: "react-bootstrap/carousel"
      //     },
      //     {
      //       title: "Dropdowns",
      //       page: "react-bootstrap/dropdowns"
      //     },
      //     {
      //       title: "Forms",
      //       page: "react-bootstrap/forms"
      //     },
      //     {
      //       title: "Input Group",
      //       page: "react-bootstrap/input-group"
      //     },
      //     {
      //       title: "Images",
      //       page: "react-bootstrap/images"
      //     },
      //     {
      //       title: "Figures",
      //       page: "react-bootstrap/figures"
      //     },
      //     {
      //       title: "Jumbotron",
      //       page: "react-bootstrap/jumbotron"
      //     },
      //     {
      //       title: "List group",
      //       page: "react-bootstrap/list-group"
      //     },
      //     {
      //       title: "Modal",
      //       page: "react-bootstrap/modal"
      //     },
      //     {
      //       title: "Navs",
      //       page: "react-bootstrap/navs"
      //     },
      //     {
      //       title: "Navbar",
      //       page: "react-bootstrap/navbar"
      //     },
      //     {
      //       title: "Overlays",
      //       page: "react-bootstrap/overlays"
      //     },
      //     {
      //       title: "Pagination",
      //       page: "react-bootstrap/pagination"
      //     },
      //     {
      //       title: "Popovers",
      //       page: "react-bootstrap/popovers"
      //     },
      //     {
      //       title: "Progress",
      //       page: "react-bootstrap/progress"
      //     },
      //     {
      //       title: "Spinners",
      //       page: "react-bootstrap/spinners"
      //     },
      //     {
      //       title: "Table",
      //       page: "react-bootstrap/table"
      //     },
      //     {
      //       title: "Tabs",
      //       page: "react-bootstrap/tabs"
      //     },
      //     {
      //       title: "Tooltips",
      //       page: "react-bootstrap/tooltips"
      //     },
      //     {
      //       title: "Toasts",
      //       page: "react-bootstrap/toasts"
      //     }
      //   ]
      // },
      // { section: "Custom" },
      // {
      //   root: true,
      //   title: "Documentation",
      //   bullet: "dot",
      //   icon: "flaticon2-file-1",
      //   submenu: [
      //     { title: "Quick Start", page: "docs/quick-start" },
      //     { title: "Overview", page: "docs/overview" },
      //     { title: "Deployment", page: "docs/deployment" },
      //     { title: "Internationalization", page: "docs/i18n" },
      //     { title: "Mock Backend", page: "docs/mock-backend" },
      //     { title: "Create a Page", page: "docs/create-a-page" }
      //   ]
      // },
      // {
      //   title: "Error Pages",
      //   root: true,
      //   bullet: "dot",
      //   icon: "flaticon-danger",
      //   submenu: [
      //     {
      //       title: "Error Page - 1",
      //       page: "error/error-v1"
      //     },
      //     {
      //       title: "Error Page - 2",
      //       page: "error/error-v2"
      //     },
      //     {
      //       title: "Error Page - 3",
      //       page: "error/error-v3"
      //     },
      //     {
      //       title: "Error Page - 4",
      //       page: "error/error-v4"
      //     },
      //     {
      //       title: "Error Page - 5",
      //       page: "error/error-v5"
      //     },
      //     {
      //       title: "Error Page - 6",
      //       page: "error/error-v6"
      //     }
      //   ]
      // }
    ]
  }
};
