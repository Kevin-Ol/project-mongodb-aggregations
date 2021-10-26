
# Projeto MongoDB Aggregations

Projeto feito como critério avaliativo na escola de programação **Trybe**.

Projeto para praticar querys de busca de documentos em um banco de dados não-relacional MongoDB utilizando o framework aggregations. Nele foi possível aprender a estrutura do framework, definição de pipelines e seus diversos operadores para otimizar a busca por documentos em uma coleção, utilizar combinações de dados em um documento para gerar novos filtros e novos dados, ou ainda relacionar documentos em coleções distintas.

## Instruções para reproduzir o projeto

### Pré requisitos

1. Possuir `mongodb` instalado

2. Clone o repositório
  * `git clone git@github.com:Kevin-Ol/project-mongodb-aggregations.git`.
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd project-mongodb-aggregations`

3. Instale as dependências
  * `npm install`

---

### Instruções para restaurar o banco de dados `aggregations`

1. Abra o terminal e conecte-se à sua instância local do **MongoDB**. Se você receber uma mensagem de erro com uma mensagem como ***Connection refused***, tente reiniciar sua instância ([veja como fazer isso aqui](https://app.betrybe.com/course/back-end/introducao-ao-mongodb/mongodb-introducao/d396e5a2-d5c9-4f3a-b723-1a1d3ea06b3d/conteudos/b9646f17-77fc-401e-bab5-421fdc37428e/conectando/f63aa7aa-ac8f-4253-bf76-7fc71e4eac5a?use_case=side_bar)).

2. Agora que você tem certeza de que a sua instância está no ar e que você está conectado a ela, digite `exit`. Você voltará ao terminal para iniciar a importação dos dados.

3. Na raiz do diretório do projeto, execute o seguinte comando que fará a restauração da base de dados `aggregations`:
    ```sh
    DBNAME=aggregations ./scripts/resetdb.sh assets
    ```

  * A execução desse script criará um banco de dados chamado `aggregations` e importará todas as suas coleções.

---

### Instruções para testar queries

Para executar localmente os testes, é preciso escrever o seguinte no seu terminal, estando na raiz do diretório do projeto:
```sh
./scripts/evaluate.sh
```

Esse script passará por **todos os desafios** e imprimirá um relatório indicando se passou ou não para cada desafio. Como a execução do script **envolve restauração da base de dados `aggregations`** de um teste para outro, recomenda-se esperar pela sua execução completa.

Para executar somente o teste de um desafio, execute o comando abaixo, substituindo N pelo númedo do desafio

```sh
./scripts/evaluate.sh desafioN
```

---

# Requisitos do projeto

Todos os arquivos devem estar dentro de uma pasta chamada challenges na raíz do projeto.

1 - Retorne todos os filmes que satisfaça, através de uma  _pipeline_, as condições abaixo

* `imdb.rating` deve ser maior ou igual a `7`;
* `genres` não deve conter `Crime` ou `Horror`;
* `rated` deve ser igual a `PG` ou `G`;
* `languages` contém `English` e `Spanish`.
* Utilize a coleção `movies`.

2 - Utilizando o mesmo _pipeline_ anterior, retorne apenas os campos `title`, `rated`, `imdb.rating`, `imdb.votes` e `year`, modificando seus nomes para `titulo`, `avaliado`, `notaIMDB`, `votosIMDB` e `ano`, respectivamente.


3 - Retorne esses filmes ordenados por ano e nota IMDB de forma decrescente e título por ordem alfabética.

4 - Crie uma _pipeline_ que retorna documentos  com o novo campo `title_split`, ela deve seguir as seguintes condições:

- `title_split` deve conter uma lista de palavras presentes em `title`.
- A pipeline deve retornar apenas filmes com o título composto apenas de uma palavra.
- A pipeline deve ser ordenada por `title` em ordem alfabética.
- A pipeline deve retornar apenas o campo `title_split`.

5 - Considerando a lista `[Sandra Bullock, Tom Hanks, Julia Roberts, Kevin Spacey, George Clooney]`, crie uma _pipeline_ que retorne o `title` do vigésimo quinto filme da agregação que satisfaz as seguintes condições:

- `countries` é Estados unidos no banco estará classificado como USA
- `tomatoes.viewer.rating` maior ou igual a `3`
-  Crie um novo campo chamado `num_favs`, que represente quantos atores ou atrizes da nossa lista de favoritos aparecem no elenco (informação do campo `cast` no banco) do filme, caso ele possua favoritos.
- Ordene os resultados por `num_favs`, `tomatoes.viewer.rating` e `title`, todos em ordem decrescente.

6 - Considerando todos os filmes que ganharam o Oscar pelo menos uma vez, calcule o **maior valor**, **menor valor**, **média** e o **desvio padrão** das avaliações (informação do campo `imdb.rating` no banco)

- Para a média e o desvio padrão arredonde os valores para uma casa decimal utilizando o `$round`

7 - Conte quantos filmes cada um dos atores e atrizes do elenco (`cast` no banco) já participou e obtenha uma média do campo `imdb.rating` para cada um desses atores e atrizes.

- Traga o nome do ator ou atriz;
- Número de filmes em que participou
- Média do imdb desses filmes arredondada para uma casa decimal usando o operador `$round`.
- Considere somente os membros do elenco de filmes com o idioma inglês (`English`). 
- Exiba a lista em ordem decrescente de documentos pelo número de filmes e nome do ator ou atriz.

8 - Liste todas as parcerias da coleção `air_alliances`, que voam rotas com um Boing 747 ou um Airbus A380 , para descobrir qual delas tem o maior número de rotas com esses aviões.

9 - A partir da coleção `trips`, determine o menor e o maior ano de nascimento. 

- Não considere documentos com valores vazios (`""`) e em que o campo não existe!

10 - Encontre a duração média de viagens por tipo de usuário. 

- Exiba o valor em horas com apenas duas casas decimais 
- Exiba a média de viagens ordenada de forma crescente. 
- Para arredondar a média use o `$round`.

11 - Determine qual o dia da semana com maior número de viagens iniciadas.

- Utilize o operador `$dayOfWeek` para extrair o dia da semana como um número de uma data.

12 - Usando o resultado da pipeline anterior que retorna o dia com mais viagens, determine qual estação tem o maior número de viagens nesse dia da semana.

- Exiba apenas o nome da estação e o total de viagens.

13 - Determine a duração média das viagens iniciadas no dia `10/03/2016`, em minutos.

- Arredonde o resultado para cima.

14 - Baseado na duração média das viagens, determine quais são as `5` bicicletas que foram mais utilizadas. 

- Exiba o resultado em minutos arredondados para cima e em ordem decrescente.
