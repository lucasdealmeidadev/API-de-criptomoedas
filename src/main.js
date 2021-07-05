const apiKey = {
    key: 'SUA API KEY VEM AQUI (:',
}

fetch(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=${apikey.key}`)
.then((res) => {
    if(!res.ok) throw new Error(`Erro ao executar a requisão, status ${res.status}`);
    return res.json();
})
.then((api) => {
    console.log(api);
})
.then((error) => {
    console.error(error.message);
})