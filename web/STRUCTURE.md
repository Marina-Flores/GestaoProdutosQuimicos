## Estruturação 

Olá, aqui vou explicar brevemente sobre a organização das pastas 
e como não fugir da estruturação padrão:

### Sobre as pastas

> A pasta "assets", deve conter todas as informações de mídia (separando por tipo), por exemplo, se é uma imagem privada,
então esta imagem deve ficar na pasta assets/img, se for um vídeo então deverá ficar na pasta assets/video...

> A pasta "pages", deve conter todas as informações sobre as páginas, separadas por tipo de páginas, por exemplo:
para criar uma página para login, deve-se seguir o padrão pages/login e dentro desta página, o arquivo de login: Login.jsx

> A pasta "styles", deve seguir o mesmo padrão da pasta pages, mas para os arquivos .css 

> A pasta "components", deve conter todos os componentes que serão utiizados mais de uma vez (inclusive, quando criar um componente? Sempre
que um pedaço de código for se repetir, crie um componente)

> A pasta "services", deve conter todos os arquivos .js de serviço

### Mais sobre componentes

Como criar um componente funcional:
* obs: por padrão, deve-se começar com letra maiúscula (utilizar PascalCase no nome (semelhante ao C#))
* para cada arquivo, deve-se criar seu respectivo arquivo.css
* utilizar ponto e vírgula ; 

~~~javascript 
export default function NomeDoComponente() {
    return (
        // TODO seu componente
    );
}
~~~

### Recomendações de vídeos

>> evitar renderizações desnecessárias por uso inadequado do useEffect > https://www.youtube.com/watch?v=kCpca2z2cls

