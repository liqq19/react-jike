import * as echarts from 'echarts'
import { useEffect, useRef } from 'react'

// 文章发布量趋势图（折线图）
const LineChart = () => {
  const chartRef = useRef(null)
  
  useEffect(() => {
    const chartDom = chartRef.current
    const myChart = echarts.init(chartDom)
    
    const option = {
      title: {
        text: '文章发布量趋势',
        left: 'center',
        textStyle: {
          color: '#333',
          fontSize: 16
        }
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        axisLine: {
          lineStyle: { color: '#999' }
        }
      },
      yAxis: {
        type: 'value',
        axisLine: {
          lineStyle: { color: '#999' }
        },
        splitLine: {
          lineStyle: { color: '#eee' }
        }
      },
      series: [
        {
          name: '发布量',
          type: 'line',
          smooth: true,
          data: [120, 182, 191, 234, 290, 330, 410, 382, 401, 454, 390, 430],
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: 'rgba(24, 144, 255, 0.4)' },
              { offset: 1, color: 'rgba(24, 144, 255, 0.05)' }
            ])
          },
          lineStyle: {
            color: '#1890ff',
            width: 3
          },
          itemStyle: {
            color: '#1890ff',
            borderWidth: 2
          },
          emphasis: {
            focus: 'series',
            itemStyle: {
              shadowBlur: 10,
              shadowColor: 'rgba(24, 144, 255, 0.5)'
            }
          }
        }
      ]
    }
    
    myChart.setOption(option)
    
    // 窗口大小变化时重新渲染
    const handleResize = () => myChart.resize()
    window.addEventListener('resize', handleResize)
    
    return () => {
      window.removeEventListener('resize', handleResize)
      myChart.dispose()
    }
  }, [])
  
  return <div ref={chartRef} style={{ width: '100%', height: '100%' }}></div>
}

export default LineChart
