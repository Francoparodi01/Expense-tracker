import React from 'react';
import { Chart as ChartJs, 
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
} from 'chart.js';

import { Line } from 'react-chartjs-2';
import styled from 'styled-components';
import { dateFormat } from '../utils/DateFormat';
import { useGlobalContext } from '../context/GlobalContext';


ChartJs.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
);

function Chart() {
    const { incomes, expenses } = useGlobalContext();

    // Estructura de datos para el gráfico
    const data = {
        labels: incomes.map((inc) => dateFormat(inc.date)),
        datasets: [
            {
                label: 'Income',
                data: incomes.map((income) => income.amount),
                backgroundColor: 'rgba(0, 128, 0, 0.2)', // Color verde con transparencia
                borderColor: 'rgba(0, 128, 0, 1)', // Color verde para la línea
                borderWidth: 2,
                pointBackgroundColor: 'rgba(0, 128, 0, 1)', // Color verde para los puntos
                pointBorderColor: 'rgba(0, 128, 0, 1)',
                tension: 0.3
            },
            {
                label: 'Expenses',
                data: expenses.map((expense) => expense.amount),
                backgroundColor: 'rgba(255, 0, 0, 0.2)', // Color rojo con transparencia
                borderColor: 'rgba(255, 0, 0, 1)', // Color rojo para la línea
                borderWidth: 2,
                pointBackgroundColor: 'rgba(255, 0, 0, 1)', // Color rojo para los puntos
                pointBorderColor: 'rgba(255, 0, 0, 1)',
                tension: 0.3
            },
        ]
    };

    // Opciones del gráfico
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Income and Expenses Over Time',
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    callback: function(value) {
                        return '$' + value.toLocaleString();
                    }
                }
            }
        }
    };

    return (
        <ChartStyled>
            <Line data={data} options={options} />
        </ChartStyled>
    );
}

const ChartStyled = styled.div`
    background: #FCF6F9;
    border: 2px solid #FFFFFF;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    padding: 1rem;
    border-radius: 20px;
    height: 100%;
`;

export default Chart;
