var nome = prompt(`Quem vem lá ?`);
alert(`Seja Bem-Vindo(a) ${nome}`)

if (nome = ''){
    window.document.body.style.background = 'black'
}

var insignia = window.document.getElementById('insignia')

if (nome.includes('\__|__/')){
    insignia.style.display = 'flex';
}else{
    insignia.style.display = 'none'
}

