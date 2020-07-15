var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

/**
 * Returns graphql result from the nest.land API
 * @param {string} query
 * @returns {Promise<Object>} A user result
 */
export async function performQuery(query: string) {
  var graphql = JSON.stringify({
    query,
    variables: {},
  });
  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: graphql,
  };
  let res = await fetch("http://localhost:8080", requestOptions);
  return await res.json();
}
