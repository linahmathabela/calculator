const buttons = Array.from(document.querySelectorAll('.btn'))
const screen = document.querySelector('.display')


buttons.map( button => {
  button.addEventListener('click', (e)=>{
    switch(e.target.innerText){
      case 'AC':
        screen.innerText = '';
        break;
      case 'DEL': 
        if(screen.innerText){
          screen.innerText = screen.innerText.slice(0, -1);
        }
        break;
      case '=':
        screen.innerText = eval(screen.innerText);
        break;
      default:
        screen.innerText += e.target.innerText;
    }
    
  })

})
