const path = require('path');

const src = path.join(__dirname, 'src');
const dist = path.join(__dirname, 'dist');

module.exports = {
  mode: 'development',
  entry: path.resolve(src, 'js/index.js'), //ビルドを実行するファイルパス
  output: {
    filename: 'index.bandle.js', //生成するファイル名
    path: dist //生成先
  },
  resolve: {
    modules: ['node_modules'], //import文のパス指定にnode_modulesを省略する
    extensions: ['.js','.jsx'] //.js .jsx を省略可能
  },
  modules: {
    rules: [
      {
        test: /\.(js|jsx)$/, //ルールを適用するファイルの正規表現
        exclude: /node_modules/, //node_modules以下のファイルには適応しない
        loader: 'babel-loader'
      }
    ]
  }
};