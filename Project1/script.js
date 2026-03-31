const buttons=document.querySelectorAll('.button');
const body = document.querySelector('body')
buttons.forEach((button)=>
{
    button.addEventListener('click',function(e)
    {
        switch(e.target.id)
        {
            case "Yellow":
                body.style.backgroundColor = 'yellow'
                break;
            case 'Green':
                body.style.backgroundColor = e.target.id
                break;
            case 'Red': 
                body.style.backgroundColor = 'red'
                break;
            case 'Blue':
                body.style.backgroundColor = 'blue'
                break;
            default:
                break;
        }
    }
)
});