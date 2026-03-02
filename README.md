# 自媒体内容管理平台

> 面向内容创作者的自媒体后台管理系统，支持文章全生命周期管理与数据可视化分析

## 技术栈

| 类别 | 技术 |
|------|------|
| 框架 | React 19 |
| 构建 | CRACO (Create React App) |
| 状态管理 | Redux Toolkit (react-redux) |
| 路由 | React Router v7 |
| UI组件 | Ant Design 6 |
| 图表 | ECharts 6 |
| 富文本 | ReactQuill / react-quill-new |
| HTTP | Axios |
| 样式 | Sass + normalize.css |

## 项目结构

```
src/
├── components/
│   └── AuthRouts.js           # 高阶路由守卫（Token鉴权，未登录重定向）
├── pages/
│   ├── Layout/                # 主布局（侧边导航 + 顶栏 + 内容区）
│   ├── Home/                  # 数据看板首页
│   │   └── componemts/
│   │       ├── LineChart.js   # 文章发布量趋势折线图
│   │       ├── PieChart.js    # 频道内容占比环形图
│   │       └── TopBarChart.js # 阅读量TOP5柱状图
│   ├── Article/               # 文章列表管理（筛选/分页/删除）
│   ├── Publish/               # 文章发布/编辑（富文本 + 封面上传）
│   └── Login/                 # 登录页
├── store/
│   ├── index.js               # Store配置
│   └── modules/
│       └── user.js            # 用户状态（登录/Token/用户信息）
├── apis/
│   ├── article.js             # 文章接口（CRUD/频道列表）
│   └── user.js                # 用户接口（登录/用户信息）
├── hooks/
│   └── useChannel.js          # 自定义Hook：频道列表获取与缓存
├── utils/
│   ├── request.js             # Axios封装（Token注入/401拦截/自动登出）
│   ├── token.js               # Token读写工具
│   └── index.js               # 工具函数统一导出
├── router/
│   └── index.js               # 路由配置（React.lazy懒加载）
└── App.js                     # 根组件
```

## 功能模块

### 数据看板

| 图表 | 说明 |
|------|------|
| **发布量趋势** | 折线图，展示文章发布时间分布 |
| **频道占比** | 环形图，展示各频道内容占比 |
| **阅读量TOP5** | 柱状图，展示阅读量最高的5篇文章 |

> 首页采用 CSS Grid 自适应布局，三图铺满展示

### 文章管理

| 功能 | 说明 |
|------|------|
| **文章列表** | 按状态、频道、日期范围复合条件筛选，分页加载 |
| **文章发布** | ReactQuill富文本编辑器，封面支持单图/三图/无图模式切换 |
| **文章编辑** | 回填已有文章数据，支持修改后重新发布 |
| **文章删除** | 列表内单条删除 |

### 身份认证

| 功能 | 说明 |
|------|------|
| **登录** | JWT Token认证，Redux Toolkit管理全局用户状态 |
| **Token持久化** | localStorage存储，页面刷新自动恢复登录态 |
| **路由守卫** | AuthRouts高阶组件，未登录自动重定向至登录页 |
| **401处理** | Axios响应拦截器统一处理，Token失效自动登出并刷新页面 |

## 特色功能

### 路由级代码分割
- React.lazy + Suspense 实现 Home、Article、Publish 三个页面按需加载
- 减少首屏资源体积，提升加载速度

### 自定义Hooks复用
- useChannel Hook 封装频道列表获取逻辑，多组件共享，避免重复请求

### CRACO配置扩展
- 路径别名 `@` → `src/`，简化模块引用路径
- 无需eject即可自定义Webpack配置

## 快速开始

### 环境要求
- Node.js 18+
- npm 8+

### 安装运行

```bash
# 1. 安装依赖
npm install

# 2. 开发模式运行（端口3000）
npm start

# 3. 构建生产版本
npm run build
```

> ⚠️ **注意**: 本项目前端对接外部API服务，需确保后端API地址配置正确（见 `src/utils/request.js` 中的 baseURL）
