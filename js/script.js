//Galeria Imagem

const galeria = document.querySelectorAll('.imagem-produto img');
    const galeriaPrincipal = document.querySelector('.imagem-principal img');
  
    function trocarImagem(event) {
      const img = event.currentTarget;
      galeriaPrincipal.src = img.src;

      galeria.forEach(imagem => imagem.classList.remove('ativa'));

      img.classList.add('ativa');
    }
  
    function eventosGaleria(img) {
      img.addEventListener('click', trocarImagem);
    }
  
    galeria.forEach(eventosGaleria);

    //Selecionar Tamnho     
    const tamanhos = document.querySelectorAll('.tamanhos-container li');

    tamanhos.forEach(tamanho => {
      tamanho.addEventListener('click', () => {
        tamanhos.forEach(i => i.classList.remove('selecionado'));
    
        tamanho.classList.toggle('selecionado');
      });
    });