# WeatherForecasterAPI

# Contexto do Tema da API a Desenvolver

A API que pretendemos desenvolver tem como objetivo servir como um meio para consultar a meteorologia no momento e no local escolhido.
Para isso iremos desenvolver uma API Web que receberá pedidos, maioritariamente do tipo GET, de forma a informar o utilizador das condições atmosféricas no local e altura do dia que escolheu.
Será também possível por parte das fontes inserir novos dados e atualizar ou apagar dados existentes na base de dados.

# Planeamento antes do desenvolvimento

# Framework a usar

A framework que iremos utilizar será o loopback 4, devido à sua fácil implementação e utilização para APIs.

# Estruturas de dados

No que toca ao planeamento inicial das nossas estruturas de dados, pensamos na utilização de 5 tabelas todas com ligações de 1 para muitos. As tabelas são country, city ,weather_status e os logs de weather por hora e por dias. As tabelas city e country identificam o local pretendido através das coordenadas da cidade e do nome do país. As tabelas weather_hourly_forecast_log e weather_daily_forecast_log armazenam os dados sobre as condições atmosféricas por hora e por dia. Temos também a tabela weather_status que armazenará um resumo das condições atmosféricas tendo em conta o dia ou a hora e que estará associado a uma cidade. Finalmente de forma a estabelecer uma ligação de muitos para muitos foi criada a tabela weather_institute, ou seja o mesmo log pode ser criado e analisado por múltiplos institutos tal como institutos esses que analisam e criam vários logs.



