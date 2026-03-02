import * as echarts from 'echarts'
import { useEffect, useRef } from 'react'

// 文章频道占比图（环形图）
const PieChart = () => {
  const chartRef = useRef(null)
  
  useEffect(() => {
    const chartDom = chartRef.current
    const myChart = echarts.init(chartDom)
    
    const option = {
      title: {
        text: '文章频道占比',
        left: 'center',
        textStyle: {
          color: '#333',
          fontSize: 16
        }
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        top: 'middle',
        textStyle: { color: '#666' }
      },
      series: [
        {
          name: '频道占比',
          type: 'pie',
          radius: ['40%', '70%'],
          center: ['55%', '55%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2
          },
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 20,
              fontWeight: 'bold'
            },
            itemStyle: {
              shadowBlur: 20,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.3)'
            }
          },
          labelLine: {
            show: false
          },
          data: [
            { value: 1048, name: '科技', itemStyle: { color: '#5470c6' } },
            { value: 735, name: '娱乐', itemStyle: { color: '#91cc75' } },
            { value: 580, name: '体育', itemStyle: { color: '#fac858' } },
            { value: 484, name: '财经', itemStyle: { color: '#ee6666' } },
            { value: 300, name: '教育', itemStyle: { color: '#73c0de' } },
            { value: 250, name: '生活', itemStyle: { color: '#3ba272' } }
          ]
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

export default PieChart
