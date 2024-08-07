#### node 版本
- v20.9.0

#### npm 版本
- v10.1.0

#### python版本
- v3.6.15

#### 安装

- {*} npm install -g @nestjs/cli@10.4.2
- {*} npm install -g electron-rebuild@3.2.9
- {*} npm install -g typeorm-model-generator@0.4.6
- { } npm install -g node-gyp@10.2.0
- { } npm install -g pnpm@9.6.0
- { } npm install -g windows-build-tools
  <font color='red'>注意：安装 windows-build-tools，需要安装 c++编译环境</font>
  <font color="red">注意：如果安装sqlite3,里面内置了node-gyp@8.4.1</font>

#### 初始化

- npm install
- npm run install
- npm run sqlite3:rebuild

#### 启动

- npm run dev

#### 打包

- npm run build

#### 命令解释、

- "dev": "dsr dev"（生产环境下，同时启动前、后端）
- "build": "rimraf dist && dsr build",（打包）
- "install": "dsr install",（同时安装前、后端的 package.json）
- "check:electron": "electron-builder install-app-deps",（检查 electron 与 electron-builder 是否匹配）
- "sqlite3:rebuild": "dsr sqlite3:rebuild",（重新编译 sqlite3，使 sqlite3 能适配当前环境）
- "db": "typeorm-model-generator --noConfig true -d ./packages/backend/db/db.sqlite3 -e sqlite -o ./packages/backend/entities"（自动生成 entity 实体类）

#### 目录结构

<table>
    <tr>
        <td bgcolor=gray>
            <font color=white>
                一级目录
            </font>
        </td>
        <td bgcolor=gray>
            <font color=white>
                二级目录
            </font>
        </td>
        <td bgcolor=gray>
            <font color=white>
                三级目录
            </font>
        </td>
        <td bgcolor=gray>
            <font color=white>
                四级目录
            </font>
        </td>
        <td bgcolor=gray>
            <font color=white>
                说明
            </font>
        </td>
    </tr>
    <tr>
        <td>packages</td>
        <td></td>
        <td></td>
        <td></td>
        <td>源代码</td>
    </tr>
    <tr>
        <td></td>
        <td>backend</td>
        <td></td>
        <td></td>
        <td>后端源代码：主要采用nest框架 + 微服务</td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td>config</td>
        <td></td>
        <td>全局配置文件。例如：sqlite连接地址等等</td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td></td>
        <td>env/dev.ts</td>
        <td>开发环境下的配置</td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td></td>
        <td>env/prod.ts</td>
        <td>生产环境下的配置</td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td></td>
        <td>env/index.ts</td>
        <td>根据不同的环境，切换配置</td>
    </tr>
     <tr>
        <td></td>
        <td></td>
        <td></td>
        <td>index.ts</td>
        <td>将配置注册到ConfigModule中间件</td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td>db</td>
        <td></td>
        <td>存放sqlite数据库文件</td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td>entities</td>
        <td></td>
        <td>实体类</td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td>src</td>
        <td></td>
        <td>接口实现</td>
    </tr>
   <tr>
        <td></td>
        <td></td>
        <td>dsr.config.ts</td>
        <td></td>
        <td>本程序使用dsr作为启动程序的工具，这是一个dsr的相关配置文件</td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td>package.json</td>
        <td></td>
        <td>包管理文件</td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td>package-lock.json</td>
        <td></td>
        <td>用于版本锁定</td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td>preload.d.ts</td>
        <td></td>
        <td>预加载proload.js文件的类型声明</td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td>tsconfig.json</td>
        <td></td>
        <td>typescript的配置文件</td>
    </tr>
    </tr>
    <tr>
        <td></td>
        <td>frontend</td>
        <td></td>
        <td></td>
        <td>前端源代码：主要采用vue3 + vite + elementPlus</td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td>public</td>
        <td></td>
        <td>全局资源公用</td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td>src</td>
        <td></td>
        <td>业务代码</td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td>.env</td>
        <td></td>
        <td>生产环境与开发环境公用的环境变量</td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td>.env.development</td>
        <td></td>
        <td>生产环境环境变量</td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td>.env.production</td>
        <td></td>
        <td>开发环境环境变量</td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td>.eslintignore</td>
        <td></td>
        <td>代码规范：文件排除</td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td>.eslintrc.js</td>
        <td></td>
        <td>代码规范约束</td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td>.gitignore</td>
        <td></td>
        <td>文件上传：排除</td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td>.prettierrc.js</td>
        <td></td>
        <td>格式化规则</td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td>index.html</td>
        <td></td>
        <td>页面入口、模板文件</td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td>LICENSE</td>
        <td></td>
        <td>建立git仓库后，自动生成</td>
    </tr>
    <tr>
        <td>package.json</td>
        <td></td>
        <td></td>
        <td></td>
        <td>包管理文件</td>
    </tr>
    <tr>
        <td>package-lock.json</td>
        <td></td>
        <td></td>
        <td></td>
        <td>用于版本锁定</td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td>tsconfig.json</td>
        <td></td>
        <td>typescript的配置文件</td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td>vite.config.ts</td>
        <td></td>
        <td>使用vite打包前端源代码规则</td>
    </tr>
    <tr>
        <td>.gitignore</td>
        <td></td>
        <td></td>
        <td></td>
        <td>github代码提交规则</td>
    </tr>
    <tr>
        <td>.npmrc</td>
        <td></td>
        <td></td>
        <td></td>
        <td>npm相关环境变量</td>
    </tr>
    <tr>
        <td>dsr.config.ts</td>
        <td></td>
        <td></td>
        <td></td>
        <td>本程序使用dsr作为启动程序的工具，这是一个dsr的相关配置文件</td>
    </tr>
    <tr>
        <td>electron-builder.config.js</td>
        <td></td>
        <td></td>
        <td></td>
        <td>electron打包时，采用的配置文件</td>
    </tr>
    <tr>
        <td>electron-builder.md</td>
        <td></td>
        <td></td>
        <td></td>
        <td>electron-builder介绍</td>
    </tr>
    <tr>
        <td>package-lock.json</td>
        <td></td>
        <td></td>
        <td></td>
        <td>用于版本锁定</td>
    </tr>
    <tr>
        <td>package.json</td>
        <td></td>
        <td></td>
        <td></td>
        <td>包管理文件</td>
    </tr>
</table>
