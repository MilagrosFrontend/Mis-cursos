const datos = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae recusandae sit excepturi, consequatur neque in, quo deserunt, cum expedita explicabo et sed provident ducimus repellat fugit accusantium facere nam sequi!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae recusandae sit excepturi, consequatur neque in, quo deserunt, cum expedita explicabo et sed provident ducimus repellat fugit accusantium facere nam sequi!'
const web = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae recusandae sit excepturi, consequatur neque in, quo deserunt, cum expedita explicabo et sed provident ducimus repellat fugit accusantium facere nam sequi!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae recusandae sit excepturi, consequatur neque in, quo deserunt, cum expedita explicabo et sed provident ducimus repellat fugit accusantium facere nam sequi!'
const cripto = 'En los cursos de criptomonedas aprendi: <li>Los conceptos basicos y fundamentos del ecosistema blockchain y las criptomonedas.</li> <li>Como funcionan.</li> <li>Sus propiedas principales.</li> <li>Los riesgos que implican utilizarlas.</li> <li>Como navegar de forma segura y con responsabilidad en blockchain.</li>  ' //<li>Falta el audiocurso de Historia de Bitcoin y Criptomonedas</li>
const ingles = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae recusandae sit excepturi, consequatur neque in, quo deserunt, cum expedita explicabo et sed provident ducimus repellat fugit accusantium facere nam sequi!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae recusandae sit excepturi, consequatur neque in, quo deserunt, cum expedita explicabo et sed provident ducimus repellat fugit accusantium facere nam sequi!'
const software = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae recusandae sit excepturi, consequatur neque in, quo deserunt, cum expedita explicabo et sed provident ducimus repellat fugit accusantium facere nam sequi!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae recusandae sit excepturi, consequatur neque in, quo deserunt, cum expedita explicabo et sed provident ducimus repellat fugit accusantium facere nam sequi!'
const softskills = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae recusandae sit excepturi, consequatur neque in, quo deserunt, cum expedita explicabo et sed provident ducimus repellat fugit accusantium facere nam sequi!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae recusandae sit excepturi, consequatur neque in, quo deserunt, cum expedita explicabo et sed provident ducimus repellat fugit accusantium facere nam sequi!'
const inclusion = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae recusandae sit excepturi, consequatur neque in, quo deserunt, cum expedita explicabo et sed provident ducimus repellat fugit accusantium facere nam sequi!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae recusandae sit excepturi, consequatur neque in, quo deserunt, cum expedita explicabo et sed provident ducimus repellat fugit accusantium facere nam sequi!'
const design = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae recusandae sit excepturi, consequatur neque in, quo deserunt, cum expedita explicabo et sed provident ducimus repellat fugit accusantium facere nam sequi!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae recusandae sit excepturi, consequatur neque in, quo deserunt, cum expedita explicabo et sed provident ducimus repellat fugit accusantium facere nam sequi!'

const escuelas = [
    {
        'Titulo':'Desarrollo web',
        'Parrafo': web,
    },
    {
        'Titulo':'Inglés',
        'Parrafo': ingles,
    },
    {
        'Titulo':'Diseño Web',
        'Parrafo': design,
    },
    {
        'Titulo':'Habilidades blandas',
        'Parrafo': softskills,
    },
    {
        'Titulo':'Criptomonedas',
        'Parrafo': cripto,
    },
    {
        'Titulo':'Inclusión social',
        'Parrafo': inclusion,
    },

]

const titulo_end = ' <span onclick="modalDeactivated()"></span>'


function modalActivated(valor)
{
    document.querySelector('.titulo-modal').innerHTML = escuelas[valor].Titulo + titulo_end;
    document.querySelector('.parrafo-modal').innerHTML = escuelas[valor].Parrafo;

    document.getElementById('overlay').style = 'display:block';
    setTimeout(function(){
        console.log("Hola Mundo");
        document.getElementById('modal').classList.add('activado');
    }, 20);

}

function modalDeactivated()
{
    document.getElementById('overlay').style = 'display:none';
    document.getElementById('modal').classList.remove('activado');

}