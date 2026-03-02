import * as echarts from 'echarts'
import { useEffect, useRef } from 'react'

// 文章阅读量 TOP5 柱状图
const TopBarChart = () => {
  const chartRef = useRef(null)
  
  useEffect(() => {
    const chartDom = chartRef.current
    const myChart = echarts.init(chartDom)
    
    const option = {
      title: {
        text: '文章阅读量 TOP5',
        left: 'center',
        textStyle: {
          color: '#333',
          fontSize: 16
        }
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      grid: {
        left: '3%',
        right: '8%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'value',
        axisLine: {
          lineStyle: { color: '#999' }
        },
        splitLine: {
          lineStyle: { color: '#eee' }
        }
      },
      yAxis: {
        type: 'category',
        data: ['React 入门教程', 'Vue3 新特性', 'TypeScript 实战', 'Node.js 进阶', 'CSS 动画技巧'],
        axisLine: {
          lineStyle: { color: '#999' }
        },
        axisTick: { show: false }
      },
      series: [
        {
          name: '阅读量',
          type: 'bar',
          data: [
            { value: 18203, itemStyle: { color: '#5470c6' } },
            { value: 23489, itemStyle: { color: '#91cc75' } },
            { value: 29034, itemStyle: { color: '#fac858' } },
            { value: 34512, itemStyle: { color: '#ee6666' } },
            { value: 41253, itemStyle: { color: '#73c0de' } }
          ],
          barWidth: '60%',
          itemStyle: {
            borderRadius: [0, 8, 8, 0]
          },
          emphasis: {
            focus: 'series',
            itemStyle: {
              shadowBlur: 10,
              shadowColor: 'rgba(0, 0, 0, 0.3)'
            }
          },
          label: {
            show: true,
            position: 'right',
            color: '#666',
            formatter: '{c}'
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

export default TopBarChart
