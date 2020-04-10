import React from "react";
import { Pie } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

const ChartPie = ({data}) => {
//   state = {
//     dataPie: {
//       labels: ["Red", "Green", "Yellow", "Grey", "Dark Grey"],
//       datasets: [
//         {
//           data: [300, 50, 100, 40, 120],
//           backgroundColor: [
//             "#F7464A",
//             "#46BFBD",
//             "#FDB45C",
//             "#949FB1",
//             "#4D5360",
//             "#AC64AD"
//           ],
//           hoverBackgroundColor: [
//             "#FF5A5E",
//             "#5AD3D1",
//             "#FFC870",
//             "#A8B3C5",
//             "#616774",
//             "#DA92DB"
//           ]
//         }
//       ]
//     }
//   }

    return (
        <MDBContainer>
        <Pie data={data} options={{ responsive: true }} />
        </MDBContainer>
    );
}

export default ChartPie;