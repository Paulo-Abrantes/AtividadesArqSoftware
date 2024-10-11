# AtividadesArqSoftware
1. Quais são as principais desvantagens de concentrar toda a lógica, interface e dados em um único arquivo?

2. Como a separação em camadas facilita a manutenção e a escalabilidade da aplicação?
 
3. Quais são os principais benefícios da arquitetura Pipe e Filtros para sistemas que precisam de flexibilidade nas transformações de dados?

   1- Concentrar toda a lógica, interface e dados em um único arquivo traz várias desvantagens que afetam o desenvolvimento e a manutenção da aplicação. O código fica desorganizado e difícil de entender, o que complica a localização de bugs e a implementação de mudanças. A mistura de responsabilidades prejudica a clareza e torna o fluxo confuso, especialmente para novos desenvolvedores. Além disso, esse formato compromete a escalabilidade, dificultando a adição de novas funcionalidades sem impactar partes já existentes, além de reduzir a reutilização de código e aumentar o esforço de manutenção.
   2- A separação em camadas organiza o sistema de forma modular, dividindo a aplicação em diferentes componentes, cada um com responsabilidades claras e bem definidas. Isso torna o código mais organizado e fácil de manter, já que alterações em uma camada não afetam diretamente as outras, reduzindo o impacto de bugs e facilitando melhorias. Além disso, componentes de uma camada podem ser reutilizados em outros projetos ou partes da aplicação, como os componentes de acesso a dados, que podem ser aproveitados por diferentes módulos sem a necessidade de duplicação de código.
   3- A arquitetura Pipe e Filtros é uma abordagem em que dados fluem através de componentes, chamados filtros, que processam e transformam os dados, conectados por pipes. Essa estrutura é útil para sistemas que realizam várias transformações, permitindo adicionar, remover ou modificar filtros facilmente, sem comprometer a arquitetura. Isso possibilita que o sistema cresça em complexidade mantendo sua organização. Além disso, os filtros podem ser executados em paralelo, melhorando a eficiência em sistemas que processam grandes volumes de dados ou operações em tempo real, e podem ser reutilizados ou rearranjados para formar diferentes pipelines de processamento, promovendo a flexibilidade.






