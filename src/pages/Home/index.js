import './index.scss'
import LineChart from './componemts/LineChart'
import PieChart from './componemts/PieChart'
import TopBarChart from './componemts/TopBarChart'

const Home = () => {
  return (
    <div className="home-container">
      {/* 文章发布量趋势图（折线图） */}
      <div className="chart-card chart-line">
        <LineChart />
      </div>
      {/* 文章频道占比图（环形图） */}
      <div className="chart-card chart-pie">
        <PieChart />
      </div>
      {/* 文章阅读量 TOP5 柱状图 */}
      <div className="chart-card chart-bar">
        <TopBarChart />
      </div>
    </div>
  )
}

export default Home