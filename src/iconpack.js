var req = require.context("./icons", false, /.*\.svg$/);

let icons = [];
req.keys().forEach(function(key) {
  const name = key.replace("./", "").replace(".svg", "");
  icons.push(name);
});

export { icons };
