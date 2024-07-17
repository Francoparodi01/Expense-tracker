import React, { useEffect } from 'react'
import styled from 'styled-components'
import History from '../../History/History';
import { InnerLayout } from '../../styles/Layouts';
import { dollar } from '../../utils/Icons';
import { useGlobalContext } from '../../context/GlobalContext';
import Chart from '../../Chart/Chart';

function Dashboard() {
    const { totalExpenses, incomes, expenses, totalIncome, totalBalance, getIncomes, getExpenses } = useGlobalContext();

    useEffect(() => {
        getIncomes();
        getExpenses();
    }, []);

    // Función para obtener el mínimo valor seguro
    const getSafeMin = (array) => {
        return array.length > 0 ? Math.min(...array.map(item => item.amount)) : 0;
    };

    // Función para obtener el máximo valor seguro
    const getSafeMax = (array) => {
        return array.length > 0 ? Math.max(...array.map(item => item.amount)) : 0;
    };

    return (
        <DashboardStyled>
            <InnerLayout>
                <h1>Todas las transacciones</h1>
                <div className="stats-con">
                    <div className="chart-con">
                        <Chart/>
                        <div className="amount-con">
                            <div className="income">
                                <h2>Ingresos totales</h2>
                                <p>
                                    {dollar} {totalIncome().toLocaleString()}
                                </p>
                            </div>
                            <div className="expense">
                                <h2>Gastos totales</h2>
                                <p>
                                    {dollar} {totalExpenses().toLocaleString()}
                                </p>
                            </div>
                            <div className="balance">
                                <h2>Balance total</h2>
                                <p>
                                    {dollar} {totalBalance().toLocaleString()}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="history-con">
                        <History />
                        <h2 className="salary-title">Min <span>Ingresos</span>Max</h2>
                        <div className="salary-item">
                            <p>
                                {dollar} {getSafeMin(incomes).toLocaleString()}
                            </p>
                            <p>
                                {dollar} {getSafeMax(incomes).toLocaleString()}
                            </p>
                        </div>
                        <h2 className="salary-title">Min <span>Gastos</span>Max</h2>
                        <div className="salary-item">
                            <p>
                                {dollar} {getSafeMin(expenses).toLocaleString()}
                            </p>
                            <p>
                                {dollar} {getSafeMax(expenses).toLocaleString()}
                            </p>
                        </div>
                    </div>
                </div>
            </InnerLayout>
        </DashboardStyled>
    );
}

const DashboardStyled = styled.div`
    .stats-con{
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 2rem;
        .chart-con{
            grid-column: 1 / 4;
            height: 400px;
            .amount-con{
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 2rem;
                margin-top: 2rem;
                .income, .expense{
                    grid-column: span 2;
                }
                .income, .expense, .balance{
                    background: #FCF6F9;
                    border: 2px solid #FFFFFF;
                    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
                    border-radius: 20px;
                    padding: 1rem;
                    p{
                        font-size: 3.5rem;
                        font-weight: 700;
                    }
                }

                .balance{
                    grid-column: 2 / 4;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    p{
                        color: var(--color-green);
                        opacity: 0.6;
                        font-size: 3.5rem;
                    }
                }
            }
        }

        .history-con{
            grid-column: 4 / -1;
            h2{
                margin: 1rem 0;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
            .salary-title{
                font-size: 1.2rem;
                span{
                    font-size: 1.8rem;
                }
            }
            .salary-item{
                background: #FCF6F9;
                border: 2px solid #FFFFFF;
                box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
                padding: 1rem;
                border-radius: 20px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                p{
                    font-weight: 600;
                    font-size: 1.6rem;
                }
            }
        }
    }
`;

export default Dashboard