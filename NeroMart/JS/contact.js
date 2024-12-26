const TOKEN = "7717926189:AAFGvNSEekPuHsiACVc30lfMe29U08ceB38"
const CHAT_ID = '6963415091'
const URI_API = `https://api.telegram.org/bot${ TOKEN }/sendMessage`


document.getElementById('tg').addEventListener('submit', function(e){
    e.preventDefault()

    axios.get('https://api.ipify.org?format=json')

    let message = '<b>-----New Commande-----</b>\n'
    message += `<b>•Name: </b>${this.name.value} \n`
    message += `<b>•Prenom: </b>${this.prenom.value} \n`
    message += `<b>•Telephone: </b>${this.tel.value} \n`
    message += `<b>•Message: </b>${this.message.value} \n`

    axios.post(URI_API, {
        chat_id: CHAT_ID,
        parse_mode: 'html',
        text: message
    })
})


function handleSubmit(event) {
    event.preventDefault(); // Empêche le rechargement de la page

    // Affiche l'alerte
    const alertBox = document.getElementById('successAlert');
    alertBox.classList.add('show');

    // Cache l'alerte après 3 secondes
    setTimeout(() => {
        alertBox.classList.remove('show');
    }, 20000);

    // Réinitialise le formulaire
    document.getElementById('myForm').reset();
}



// toggle menu //

function toggleMenu() {
    const menu = document.querySelector('.nav-links');
    menu.classList.toggle('active');
}