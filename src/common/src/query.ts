var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

export async function performQuery(query: string) {
  var graphql = JSON.stringify({
    query,
    variables: {}
  })
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: graphql,
  };
  let res = await fetch("http://localhost:8080", requestOptions);
  return await res.json();
}
