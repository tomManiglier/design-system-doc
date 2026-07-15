const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

class CopyIndexHtmlPlugin {
  apply(compiler) {
    compiler.hooks.thisCompilation.tap('CopyIndexHtmlPlugin', (compilation) => {
      compilation.hooks.processAssets.tap(
        {
          name: 'CopyIndexHtmlPlugin',
          stage: compiler.webpack.Compilation.PROCESS_ASSETS_STAGE_ADDITIONAL,
        },
        () => {
          const templatePath = path.resolve(compiler.context, 'index.html');
          const source = compiler.inputFileSystem.readFileSync(templatePath, 'utf8');

          compilation.emitAsset(
            'index.html',
            new compiler.webpack.sources.RawSource(source),
          );
        },
      );
    });
  }
}

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  return {
    mode: isProduction ? 'production' : 'development',
    devtool: isProduction ? 'source-map' : 'eval-source-map',
    entry: './src/main.ts',
    output: {
      filename: 'assets/main.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
    },
    resolve: {
      extensions: ['.ts', '.js'],
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          exclude: /node_modules/,
          use: 'ts-loader',
        },
        {
          test: /\.scss$/,
          use: [isProduction ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader', 'sass-loader'],
        },
        {
          test: /\.css$/,
          use: [isProduction ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader'],
        },
      ],
    },
    plugins: [
      new CopyIndexHtmlPlugin(),
      ...(isProduction
        ? [
            new MiniCssExtractPlugin({
              filename: 'assets/main.css',
            }),
          ]
        : []),
    ],
    devServer: {
      host: '0.0.0.0',
      port: 5181,
      hot: true,
      static: path.resolve(__dirname),
    },
  };
};
