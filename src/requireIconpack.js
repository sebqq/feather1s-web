var req = require.context(process.env.PUBLIC_URL + "/svg", false, /.*\.svg$/);

let icons = [];
req.keys().forEach(function(key) {
  const value = req(key);
  const name = key.replace("./", "").replace(".svg", "");
  icons.push({ name, value });
});

export default icons;
