import React from 'react'
import { PieChart } from 'react-native-svg-charts'
import { Text } from 'react-native-svg'

class PieChartComponent extends React.PureComponent {

    render() {

        const data = [
            {
                key: 1,
                amount: 20,
                value : '25%',
                svg: { fill: '#253a48' },
            },
            {
                key: 2,
                amount: 20,
                value : '5%',
                svg: { fill: '#ed4d61' }
            },
            {
                key: 3,
                amount: 20,
                value : '7%',
                svg: { fill: '#2f535d' }
            },
            {
                key: 4,
                amount: 20,
                value : '38%',
                svg: { fill: '#2b979d' }
            },
            {
                key: 5,
                amount: 20,
                value : '25%',
                svg: { fill: '#00acc8' }
            }
        ]

        const Labels = ({ slices, height, width }) => {
            return slices.map((slice, index) => {
                const { labelCentroid, pieCentroid, data } = slice;
                return (
                    <Text
                        key={index}
                        x={pieCentroid[ 0 ]}
                        y={pieCentroid[ 1 ]}
                        fill={'white'}
                        textAnchor={'middle'}
                        alignmentBaseline={'middle'}
                        fontSize={16}
                        stroke={'#fff'}
                        strokeWidth={0.2}
                    >
                        {data.value}
                    </Text>
                )
            })
        }

        return (
            <PieChart
                style={{ height: 150 }}
                valueAccessor={({ item }) => item.amount}
                data={data}
                spacing={10}
                outerRadius={'100%'}
                innerRadius={'25%'}
            >
                <Labels/>
            </PieChart>
        )
    }

}

export default PieChartComponent