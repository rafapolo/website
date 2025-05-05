graph = new Graph();

var node1 = graph.newNode({label: 'Razao e Ambiente', site: 'http://razaoeambiente.com.br'});
var node3 = graph.newNode({label: 'Pensar Público', site: 'http://extrapolo.com/projeto/pensarpublico'});
var node4 = graph.newNode({label: 'WikiBot', site: 'http://extrapolo.com/projeto/fratura'});
var node5 = graph.newNode({label: 'Agenda Água na Escola', site: 'http://agendaaguanaescola.eco.br'});
var node6 = graph.newNode({label: 'FAQ.tv', site: 'http://faq.tv.br'});
var node7 = graph.newNode({label: 'Rastros', site: 'https://github.com/rafapolo/rastros'});
var node8 = graph.newNode({label: 'Studio Zanini', site: 'http://studiozanini.com.br'});
var node9 = graph.newNode({label: 'Webdoc Graffiti', site: 'http://webdocgraffiti.com.br'});
var node10 = graph.newNode({label: 'Atlantica 1101', site: 'http://atlantica1101.com'});
var node11 = graph.newNode({label: 'Victor Haim', site: 'http://victorhaim.com.br'});
var node12 = graph.newNode({label: 'Comuna', site: 'http://comuna.cc'});
var node13 = graph.newNode({label: 'Gráfica Utópica', site: 'http://graficautopica.net'});
var node14 = graph.newNode({label: 'Etaoin Shrdlu', site: 'http://etaoinshrdlu.net/'});
var node15 = graph.newNode({label: 'Mostre!me', site: 'http://mostre.me/'});
var node16 = graph.newNode({label: 'BaixoGávea', site: 'http://baixogavea.com'});
var node17 = graph.newNode({label: 'Consulta Natural', site: 'https://github.com/rafapolo/consulta-natural/wiki'});
var node18 = graph.newNode({label: 'Acervo MakingOff', site: 'http://mostre.me/acervo'});
var node19 = graph.newNode({label: 'Steganos', site: 'https://github.com/rafapolo/steganos'});
var node20 = graph.newNode({label: 'Links', site: 'http://mostre.me/links'});
var node21 = graph.newNode({label: 'Cultura', site: 'http://mostre.me/cultura'});

var node23 = graph.newNode({label: 'Renda', site: 'https://github.com/rafapolo/tribuna'});
var node24 = graph.newNode({label: 'Tribuna', site: 'https://github.com/rafapolo/tribuna'});
var node25 = graph.newNode({label: 'Ares', site: 'http://git.mostre.me/rafapolo/ares'});
var node26 = graph.newNode({label: 'SubZKU', site: 'http://subzku.space'});


var cat1 = graph.newNode({label: '[DESIGN]'});
var cat2 = graph.newNode({label: '[INTERACTION]'});
var cat3 = graph.newNode({label: '[COLABORATION]'});
var cat4 = graph.newNode({label: '[DATA]'});
var cat5 = graph.newNode({label: '[EXHIBITION]'});


graph.newEdge(node23, cat4);

graph.newEdge(node24, cat4);
graph.newEdge(node24, cat3);

graph.newEdge(node25, cat3);
graph.newEdge(node25, cat4);

graph.newEdge(node26, cat5);
graph.newEdge(node26, cat1);

graph.newEdge(node1, cat2);
graph.newEdge(node1, cat5);

graph.newEdge(node1, cat1);
graph.newEdge(node1, cat2);
graph.newEdge(node1, cat5);

graph.newEdge(node3, cat1);
graph.newEdge(node3, cat2);
graph.newEdge(node3, cat3);
graph.newEdge(node3, cat4);
graph.newEdge(node3, cat5);

graph.newEdge(node4, cat5);

graph.newEdge(node5, cat3);
graph.newEdge(node5, cat4);

graph.newEdge(node6, cat1);
graph.newEdge(node6, cat2);
graph.newEdge(node6, cat3);

graph.newEdge(node7, cat2);

graph.newEdge(node8, cat1);
graph.newEdge(node8, cat5);

graph.newEdge(node9, cat1);
graph.newEdge(node9, cat2);
graph.newEdge(node9, cat3);
graph.newEdge(node9, cat4);
graph.newEdge(node9, cat5);

graph.newEdge(node10, cat2);
graph.newEdge(node10, cat1);

graph.newEdge(node11, cat1);
graph.newEdge(node11, cat2);
graph.newEdge(node11, cat5);

graph.newEdge(node12, cat5);

graph.newEdge(node13, cat1);
graph.newEdge(node13, cat2);
graph.newEdge(node13, cat4);
graph.newEdge(node13, cat5);

graph.newEdge(node14, cat1);
graph.newEdge(node14, cat2);

graph.newEdge(node15, node20);
graph.newEdge(node15, node21);

graph.newEdge(node21, cat2);
graph.newEdge(node21, cat4);

graph.newEdge(node20, cat3);

graph.newEdge(node16, cat4);
graph.newEdge(node16, cat3);

graph.newEdge(node17, cat2);

graph.newEdge(node18, cat2);
graph.newEdge(node18, cat4);

graph.newEdge(node19, cat1);
graph.newEdge(node19, cat4);
