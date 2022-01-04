const path = require("path");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { EnvironmentPlugin} = require ('webpack');


let mode = "development";
let target = "web";
const plugins = [
  new CleanWebpackPlugin(),
  new MiniCssExtractPlugin(),
  new HtmlWebpackPlugin({
    template: "./src/index.html",
  }),
];

let EnvValues = {};

if (process.env.NODE_ENV === "production") {
  mode = "production";
  // Temporary workaround for 'browserslist' bug that is being patched in the near future
  target = "browserslist";


   EnvValues = {
    SKIP_PREFLIGHT_CHECK:true,
    REACT_APP_USER_AUTH:'https://apifarma.ump.pt/api/userAuth/',
    REACT_APP_ALL_USER:'https://apifarma.ump.pt/api/allusers/',
    REACT_APP_EDIT_USER:'https://apifarma.ump.pt/api/editusers/',
    REACT_APP_ADD_USER:'https://apifarma.ump.pt/api/addusers/',
    REACT_APP_ADD_USERUSERGRUPO:'https://apifarma.ump.pt/api/addusergroups/',
    REACT_APP_DELETE_USERUSERGRUPO:'https://apifarma.ump.pt/api/deleteusergroups/',
    REACT_APP_GET_TOKEN:'https://apifarma.ump.pt/api/getusertoken/',
    REACT_APP_GET_PERMISSIONGROUPS:'https://apifarma.ump.pt/api/getpermissiongroups/',
    REACT_APP_MANAGE_PERMISSIONS:'https://apifarma.ump.pt/api/managepermissiongroups/',
    REACT_APP_GET_GROUPPAGES:'https://apifarma.ump.pt/api/getgrouppages/',
    REACT_APP_GET_MANAGEPAGES:'https://apifarma.ump.pt/api/managepages/',
    REACT_APP_GET_ALLPAGES:'https://apifarma.ump.pt/api/allpages/',
    REACT_APP_DELETE_ALLPAGES:'https://apifarma.ump.pt/api/deletepagegroups/',
    REACT_APP_UPDATE_PAGES:'https://apifarma.ump.pt/api/updatepages/',
    REACT_APP_DELETE_GROUP:'https://apifarma.ump.pt/api/deleteGroup/',
    REACT_APP_USER_GROUPS:'https://apifarma.ump.pt/api/usergroups/',
    REACT_APP_UCC_MANAGEMENT:'https://apifarma.ump.pt/api/uccmanagment/',
    REACT_APP_PLACES_MANAGEMENT:'https://apifarma.ump.pt/api/placesmanagment/',
    REACT_APP_APITOKEN:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiMjM0NTU0NTYzIiwidXNlcm5hbWUiOiJVbXAxMjM0NTY3ISIsImVtYWlsIjoiVW1wMTIzNDU2N1VtcDEyMzQ1NjdAdW1wLnB0In0sImlhdCI6MTY0MTIyOTYyNX0.yZo0iX_--395KToDYVvOJZNVDXkdu1jz2ZK1A5LrRII",
  };

  plugins.push(new EnvironmentPlugin(EnvValues))

}

if (process.env.SERVE) {
  // We only want React Hot Reloading in serve mode
  plugins.push(new ReactRefreshWebpackPlugin());

  EnvValues = {
    SKIP_PREFLIGHT_CHECK:true,
    REACT_APP_USER_AUTH:'https://apifarma.ump.pt/api/userAuth/',
    REACT_APP_ALL_USER:'https://apifarma.ump.pt/api/allusers/',
    REACT_APP_EDIT_USER:'https://apifarma.ump.pt/api/editusers/',
    REACT_APP_ADD_USER:'https://apifarma.ump.pt/api/addusers/',
    REACT_APP_ADD_USERUSERGRUPO:'https://apifarma.ump.pt/api/addusergroups/',
    REACT_APP_DELETE_USERUSERGRUPO:'https://apifarma.ump.pt/api/deleteusergroups/',
    REACT_APP_GET_TOKEN:'https://apifarma.ump.pt/api/getusertoken/',
    REACT_APP_GET_PERMISSIONGROUPS:'https://apifarma.ump.pt/api/getpermissiongroups/',
    REACT_APP_MANAGE_PERMISSIONS:'https://apifarma.ump.pt/api/managepermissiongroups/',
    REACT_APP_GET_GROUPPAGES:'https://apifarma.ump.pt/api/getgrouppages/',
    REACT_APP_GET_MANAGEPAGES:'https://apifarma.ump.pt/api/managepages/',
    REACT_APP_GET_ALLPAGES:'https://apifarma.ump.pt/api/allpages/',
    REACT_APP_DELETE_ALLPAGES:'https://apifarma.ump.pt/api/deletepagegroups/',
    REACT_APP_UPDATE_PAGES:'https://apifarma.ump.pt/api/updatepages/',
    REACT_APP_DELETE_GROUP:'https://apifarma.ump.pt/api/deleteGroup/',
    REACT_APP_USER_GROUPS:'https://apifarma.ump.pt/api/usergroups/',
    REACT_APP_UCC_MANAGEMENT:'https://apifarma.ump.pt/api/uccmanagment/',
    REACT_APP_PLACES_MANAGEMENT:'https://apifarma.ump.pt/api/placesmanagment/',
    REACT_APP_APITOKEN:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiMjM0NTU0NTYzIiwidXNlcm5hbWUiOiJVbXAxMjM0NTY3ISIsImVtYWlsIjoiVW1wMTIzNDU2N1VtcDEyMzQ1NjdAdW1wLnB0In0sImlhdCI6MTY0MTIyOTYyNX0.yZo0iX_--395KToDYVvOJZNVDXkdu1jz2ZK1A5LrRII",
  };
  plugins.push(new EnvironmentPlugin(EnvValues))
}

module.exports = {
  // mode defaults to 'production' if not set
  mode: mode,

  // This is unnecessary in Webpack 5, because it's the default.
  // However, react-refresh-webpack-plugin can't find the entry without it.
  entry: "./src/index.js",

  output: {
    // output path is required for `clean-webpack-plugin`
    path: path.resolve(__dirname, "dist"),
    // this places all images processed in an image folder
    assetModuleFilename: "images/[hash][ext][query]",
  },

  module: {
    rules: [
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            // This is required for asset imports in CSS, such as url()
            options: { publicPath: "" },
          },
          "css-loader",
          // according to the docs, sass-loader should be at the bottom, which
          // loads it first to avoid prefixes in your sourcemaps and other issues.
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        /**
         * The `type` setting replaces the need for "url-loader"
         * and "file-loader" in Webpack 5.
         *
         * setting `type` to "asset" will automatically pick between
         * outputing images to a file, or inlining them in the bundle as base64
         * with a default max inline size of 8kb
         */
        type: "asset",

        /**
         * If you want to inline larger images, you can set
         * a custom `maxSize` for inline like so:
         */
        // parser: {
        //   dataUrlCondition: {
        //     maxSize: 30 * 1024,
        //   },
        // },
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          // without additional settings, this will reference .babelrc
          loader: "babel-loader",
          options: {
            /**
             * From the docs: When set, the given directory will be used
             * to cache the results of the loader. Future webpack builds
             * will attempt to read from the cache to avoid needing to run
             * the potentially expensive Babel recompilation process on each run.
             */
            cacheDirectory: true,
          },
        },
      },
    ],
  },

  plugins: plugins,

  target: target,

  devtool: "source-map",

  resolve: {
    extensions: [".js", ".jsx"],
    
    alias: {
      '@mui/styled-engine': '@mui/styled-engine-sc'
    },
  },

  // required if using webpack-dev-server
  devServer: {
    historyApiFallback: true,
    contentBase: "./dist",
    hot: true,
    open: true,

  },
};