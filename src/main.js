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

        for (let i = 0; i < 12; i++) {
            coin += `<div class="col-4 themed-grid-col grid-coin">
                        <div class="media">
                            <img src="./imgs/coin.jpg" class="align-self-center mr-3" alt="coin" width="80" height="80">
                            <div class="media-body">
                                <h5 class="mt-2">${api.data[i].name}</h5>
                                <h6 class="mb-1">${api.data[i].symbol}</h6>
                                <p>${api.data[i].first_historical_data}</p>
                            </div>
                        </div>
                    </div>`;

            document.getElementById('coins').innerHTML = coin;
        }
    })
    .then((error) => {
        console.error(error.message);
    })