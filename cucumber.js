
module.exports = {

  default: {

    require: [
      "stepdefinitions/*.js",
      "hooks/*.js"
    ],

    paths: ["features/*.feature"],

    format: ["progress"]

  }

}