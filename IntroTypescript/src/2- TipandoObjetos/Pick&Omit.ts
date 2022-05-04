/*
"Pick" --> Seleciona alguma(s) propriedade(s)
de uma interface ou tipo, e COM BASE NESSAS
propriedades, criar um novo tipo ou interface.

"Omit" --> Selecionamos alguma(s) propriedade(s)
as quais queremos OMITIR de uma interface ou tipo,
e criar com um novo tipo ou interface, SEM AS PROPRIEDADES
que escolhemos OMITIR.
*/

interface Post {
  id: number;
  title: string;
  description: string;
  shortDescription: string;
  comments: string;
  likes: number;
  views: number;
  shares: number;
}

//----------------------Exemplo do Pick:
type PostPreview = Pick<Post, "id" | "title">;
/*Criamos um novo tipo, a partir do id e título
da interface Post*/

//E agora criamos uma nova variável, a partir do novo tipo:
let post1: PostPreview;
/*Possuindo essa variável, os atributos:
id e title, mas não os outros atributos. 
Já que não os definimos no Pick:

post.id;
post.tile;
*/

//-----------------------Exemplo Omit:
type PostPreview1 = Omit<Post, "id" | "title">;
/*Agora, criamos um novo tipo, com todos os atributos
da interface Post, menos os declarados no Omit. Ou seja:
não o id, nem o title. Apenas os outros.
*/
let post2: PostPreview1;
/*Possuindo essa variável, os atributos restantes,
não definidos no Omit:

post.description;
post.shortDescription;
post.comments;
post.likes;
post.views;
post.shares;
*/
