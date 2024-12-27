"use client";

import React, { useRef, useEffect } from "react";
import Chart from "chart.js/auto";

interface ChartRecordProps {
    height?: number;
}

const ChartRecord = (
    { height = 200 }: ChartRecordProps
) => {
    const chartRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const ctx = chartRef.current?.getContext("2d");

        if (!ctx) return;

        const myChart = new Chart(ctx, {
            type: "line",
            data: {
                labels: [
                    "6月",
                    "7月",
                    "8月",
                    "9月",
                    "10月",
                    "11月",
                    "12月",
                    "1月",
                    "2月",
                    "3月",
                    "4月",
                    "5月",
                ],
                datasets: [
                    {
                        label: "Body Record",
                        data: [60, 58, 55, 53, 57, 54, 50, 48, 47, 46, 48, 50],
                        borderColor: "#FFCC21",
                        backgroundColor: "transparent",
                        pointBackgroundColor: "#FFCC21",
                        pointBorderColor: "#FFCC21",
                        pointRadius: 5,
                    },
                    {
                        label: "Target Line",
                        data: [58, 56, 59, 52, 50, 49, 48, 46, 45, 43, 42, 41],
                        borderColor: "#8FE9D0",
                        backgroundColor: "transparent",
                        pointBackgroundColor: "#8FE9D0",
                        pointBorderColor: "#8FE9D0",
                        pointRadius: 5,
                    },
                ],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false,
                    },
                },
                scales: {
                    x: {
                        grid: {
                            color: "#777",
                        },
                        ticks: {
                            color: "#fff",
                            font: {
                                family: "Inter",
                                size: 12,
                            },
                        },
                    },
                    y: {
                        grid: {
                            display: false,
                        },
                        ticks: {
                            display: false,
                        },
                    },
                },
            },
        });

        return () => {
            myChart.destroy();
        };
    }, []);

    return (
        <div className="relative w-full" style={{ height }}>
            <canvas ref={chartRef}></canvas>
        </div>
    );
};

export default ChartRecord;
