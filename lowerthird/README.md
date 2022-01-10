# Colocando na cena

- Crie uma browser sorce, pelo menos de 700x200 de tamanho
  (o tamanho da cena é 700x100, mas ela pode crescer em altura então é bom por 700x200 para comportar esse crescimento)
- Aponte para a URL https://dancovich.github.io/lowerthird

# Configurando o tempo entre aparições

- O arquivo config.js tem duas variáveis, TEMPO_MINIMO e TEMPO_MAXIMO
- Essas variáveis são em segundos
- Para deixar o quadro aparecendo sempre no mesmo tempo, deixe as duas variáveis iguais
- O padrão é um mínimo de 20 segundos e um máximo de 300 segundos (5 minutos)

# Acrescentando listas

- Listas são arquivos [nome_do_arquivo.js] na pasta do componente. Elas devem seguir o mesmo modelo dos arquivos "jogos_terminados_eric.js" e "jogos_terminados_danilo.js".
- O campo "tipo" é exibido no lado esquerdo do quadro, dentro da área roxa
- O campo "jogador" aparece ao lado do campo "descricao" de cada item. Por exemplo, se "jogador" for Danilo e
  o item da lista for um com título "Ação Games" e descrição "Edição Março 1992", o quadro exibirá o seguinte
```
    Ação Games
    Danilo - Março 1992
```
- Após criar sua lista, existem dois arquivos que podem ser editados: "master_list_eric.mjs" e "master_list_danilo.mjs". Edite o arquivo correspondente ao dono da lista.
- Abra esse arquivo e adicione o comando "import" para importar a nova lista que você criou.
- Exemplo, assumindo que estamos acrescentando uma lista para Eric, nosso arquivo "master_list_eric.mjs" está assim

```
import {adicionarLista as adicionarTerminadosEric} from './jogos_terminados_eric.mjs';

adicionarTerminadosEric();
```
Criamos um arquivo "backlog_eric.mjs", então devemos adicionar esse arquivo dessa forma:
```
import {adicionarLista as adicionarTerminadosEric} from './jogos_terminados_eric.mjs';
import {adicionarLista as adicionarBacklogEric} from './backlog_eric.mjs';

adicionarTerminadosEric();
adicionarBacklogEric();
```

# Acrescentando itens para serem exibidos no quadro

- Edite um dos arquivos de lista para acrescentar itens que podem aparecer no quadro.
  Os arquivos fornecidos são "jogos_terminados_eric.mjs" e "jogos_terminados_danilo.mjs". Usaremos esses como exemplo.
- O campo "dados" contém a lista de itens. Para acrescentar um item, coloque uma vírgula após o último
  item e acrescente um novo seguindo a mesma estrutura
- Exemplo: imagine a seguinte lista
```
'dados': [
  {
    'titulo': 'Bioforge',
    'descricao': 'PC DOS'
  },
  {
    'titulo': 'Sword of Vermillion',
    'descricao': 'Mega Drive'
  }
 ]
```

- Se quisermos adicionar o jogo "Alex Kid in Miracle World" do console "Master System", a lista ficará assim
```
'dados': [
  {
    'titulo': 'Bioforge',
    'descricao': 'PC DOS'
  },
  {
    'titulo': 'Sword of Vermillion',
    'descricao': 'Mega Drive'
  },           // <----- Adicionamos uma vírgula aqui
  {
    'titulo': 'Alex Kid in Miracle World',
    'descricao': 'Master System'
  }            // <----- Último item não tem vírgula
]
```
