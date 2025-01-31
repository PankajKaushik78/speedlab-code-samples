const axios = require("axios");
const { get_random_item } = require("./utils");

const ENDPOINTS = {
  desktop_meta: "/meta/desktops",
  devices_meta: "/meta/devices",
  regions: "/meta/regions",
  networks: "/meta/networks",
};

async function get_metadata(base_url, auth) {
  const METADATA = {};

  // GET /meta/desktops
  console.log(`Fetching desktop metadata....\n GET: ${ENDPOINTS.desktop_meta}`);
  const desktop_metadata = await get_metadata_call(
    base_url + ENDPOINTS.desktop_meta,
    auth
  );
  console.log(JSON.stringify(desktop_metadata.data));
  console.log("Desktop data fetched! Selecting random desktop\n");
  METADATA["desktops"] = [get_random_item(desktop_metadata.data.desktops)];

  // GET /meta/devices
  console.log(`Fetching devices metadata... \n GET: ${ENDPOINTS.devices_meta}`);
  const devices_metadata = await get_metadata_call(
    base_url + ENDPOINTS.devices_meta,
    auth
  );
  console.log(JSON.stringify(devices_metadata.data));
  console.log("Devices data fetched! Selecting random device\n");
  METADATA["devices"] = [get_random_item(devices_metadata.data.devices)];

  // GET /meta/regions
  console.log(`Fetching regions... \n GET: ${ENDPOINTS.regions}`);
  const regions = await get_metadata_call(base_url + ENDPOINTS.regions, auth);
  console.log(JSON.stringify(regions.data));
  console.log("Regions fetched! Selecting random region\n");
  METADATA["region"] = get_random_item(regions.data.regions);

  // GET /meta/networks
  console.log(`Fetching networks... \n GET: ${ENDPOINTS.networks}`);
  const networks = await get_metadata_call(base_url + ENDPOINTS.networks, auth);
  console.log(JSON.stringify(networks.data));
  console.log(
    "Networks fetched! Selecting random network for mobile and desktops\n"
  );
  METADATA["desktop_network"] = get_random_item(
    networks.data.networks.desktop
  ).value;
  METADATA["device_network"] = get_random_item(
    networks.data.networks.mobile
  ).value;

  return METADATA;
}

function get_metadata_call(url, auth) {
  return axios.get(url, {
    headers: {
      Accept: "application/json",
    },
    auth,
  });
}

module.exports = {
  get_metadata,
};
