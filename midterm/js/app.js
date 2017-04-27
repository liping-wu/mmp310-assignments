let body = document.querySelector('body'),
    scriptNav = document.createElement('script'),
    scriptContent = document.createElement('script');

//nav
function headerNav(data) {
    var nav = document.getElementsByTagName('nav')[0],
        navBar = '<ul>';

    for(var x = 0; x < data.items.length; x ++){
        if(data.items[x].items.length > 0){
            navBar += '<li> <a href = " '+ data.items[x].url +'" >';
            navBar += data.items[x].label + '</a>';
            navBar += '<ul>';

            for(var y = 0; y <data.items[x].items.length; y++){
                navBar += '<li> <a href =" '+ data.items[x].items[y].url + '">';
                navBar += data.items[x].items[y].label + '</a></li>';
            }
            navBar += '</ul>';
        }   else {
            navBar += '<li> <a href=" '+data.items[x].url+' ">';
            navBar += data.items[x].label + '</a></li>' ;
        }
    }
    navBar += '</ul>';
    nav.innerHTML = navBar;

}
scriptNav.setAttribute('src','data/nav.json');
body.appendChild(scriptNav);

//content
function content(data) {
    var list = document.querySelectorAll('main > ul > li'),
        content = document.querySelector('content'),
        h1 = document.getElementsByTagName('h1')[0],
        h2 = document.getElementsByTagName('h2')[0],
        h3 = document.getElementsByTagName('h3')[0],
        p = document.getElementsByTagName('p')[0],
        blockquote = document.getElementsByTagName('blockquote')[0];

    h1.innerHTML = data.h1;
    h2.innerHTML = data.h2;
    h3.innerHTML = data.h3;
    p.innerHTML= data.p;
    blockquote.innerHTML = data.blockquote;

    for (var i = 0; i < data.list[0].content.length; i ++){
        list[i].innerHTML = data.list[i].content;
    }

}
scriptContent.setAttribute('src','data/content.json');
body.appendChild(scriptContent);

//footer
span = document.querySelectorAll('span');
span[0].innerHTML = '<i class="fa fa-facebook"></i>';
span[1].innerHTML = '<i class="fa fa-twitter" ></i>';
span[2].innerHTML = '<i class="fa fa-instagram"></i>';
span[3].innerHTML = '<i class="fa fa-youtube"></i>';