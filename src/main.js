const apiKey = {
    key: 'SUA API KEY VEM AQUI (:',
}

fetch(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=${apiKey.key}`)
    .then((res) => {
        if (!res.ok) throw new Error(`Erro ao executar a requisão, status ${res.status}`);
        return res.json();
    })
    .then((api) => {
        let coin = '';

        for (let i = 0; i < 100; i++) {
            coin += `<tr>
                        <td>${api.data[i].rank}</td>
                        <td>${api.data[i].name}</td>
                        <td>${api.data[i].symbol}</td>
                        <td>${api.data[i].first_historical_data}</td>
                        <td>${api.data[i].last_historical_data}</td>
                    </tr>`;

            document.getElementById('coins').innerHTML = coin;
        }
    })
    .then((error) => {
        console.error(error.message);
    });