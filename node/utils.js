function get_random_item(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function print_results(result) {
  // Results
  console.log(`SOME RESULTS:\n`);

  console.log(
    `${result.results[0].os} - ${
      result.results[0].device || result.results[0].os_version
    } - ${result.results[0].browser_name}`
  );
  console.log("Visual metrics: ", result.results[0].report[0].visual_metrics);
  console.log(
    "Navigation timings",
    result.results[0].report[0].navigation_timings,
    "\n"
  );

  console.log(
    `${result.results[1].os} - ${
      result.results[1].device || result.results[1].os_version
    } - ${result.results[1].browser_name}`
  );
  console.log("Visual metrics: ", result.results[1].report[0].visual_metrics);
  console.log(
    "Navigation timings",
    result.results[1].report[0].navigation_timings,
    "\n"
  );
}

module.exports = {
  get_random_item,
  print_results
};
