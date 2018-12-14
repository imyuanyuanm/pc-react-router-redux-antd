This project was bootstrapped with [Create React App](https:#github.com/facebook/create-react-app).

#### 

React 16 + react-router4 + redux + antd + sass + eslint-config-alloy + webpack 4

针对antd重写主题需对应低于less@^2.7.3的less版本 

运行

```js
$ npm start
```

打包

```js
$ npm run build
```

目录

```
my-app
├── README.md
├── node_modules
├── package.json
├── .gitignore 
├── .eslintrc.js
├── scripts
├── public          
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── assets             # 静态资源
    ├── components         # 组件
    ├── config              # 配置文件
    ├── containers         # 容器
    ├── store              # store
    ├── reducers           # reducers
    ├── style              # 基础公共样式
    ├── index.js           # 入口
    ├── utils              # 工具
    ├── templates          # 模版（用来提供给rd）
    ├── config-overrides.js # 自定义antd主题配置文件
    ├──routes.js           # 虚拟路由
    └── serviceWorker.js
```

todo antd按需加载未生效