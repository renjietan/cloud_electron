import path from 'node:path'

export default {
  // mysql: {
  //     type: 'mysql', //数据库类型
  //     username: 'root', //账号
  //     password: 'trj3226529', //密码
  //     host: 'localhost', //host
  //     port: 3306, //
  //     database: 'study', //库名
  //     // entities: [__dirname + '/**/*.entity{.ts,.js}'], //自动同步， 不需要实体文件
  //     synchronize: true, //synchronize字段代表是否自动将实体类同步到数据库
  //     retryDelay: 500, //重试连接数据库间隔
  //     retryAttempts: 10, //重试连接数据库的次数
  //     autoLoadEntities: true, //如果为true,将自动加载实体 forFeature()方法注册的每个实体都将自动添加到配置对象的实体数组中
  // },
  sqlite: {
    type: 'sqlite',
    database: path.resolve(__dirname, 'src/main/db/db.sqlite3'),
    synchronize: true,
    logging: false,
    entities: [
      path.resolve(__dirname, 'src/main/entities/*.ts'),
    ],
    // "migrations": [
    //     "src/migration/**/*.ts"
    // ],
    // "subscribers": [
    //     "src/subscriber/**/*.ts"
    // ],
    cli: {
      entitiesDir: 'src/main/entities',
      // "migrationsDir": "src/migration",
      // "subscribersDir": "src/subscriber"
    },
  },
}
