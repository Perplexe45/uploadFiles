/*****************Liste des variables *****************/
let section1 = document.getElementById('section1');


/***************** Liste des fonctions *****************/
let FonctionRecuperer = (fichiers) => {
    for(let i = 0; i < fichiers.length; i+=1) {
        console.log(fichiers[i]['name']);
    }
}

let over = (e) => {
    e.preventDefault(); //action par défaut ne va pas être exécutée comme elle l'est normalement.
    e.target.classList.add('active'); //Rajout de la classe "active" travaillée par le CSS.
}

let leave = (e) => {
    e.target.classList.remove('active');
}

let drop = (e) => {
    e.preventDefault();
    let fichiers = e.dataTransfer.files; //'dataTransfer.files'--> Fonction native du JS pour le drag & drop (Infos des fichiers du drop)
    console.log(fichiers);
    FonctionRecuperer(fichiers);
    e.target.classList.remove('active');
}


/***************** Liste des événements ********************/
section1.addEventListener('dragover', over); //evènement : 'dragover' et 'over' --> fonction de call back --> entrée dans la section1 (DASHED)
section1.addEventListener('dragleave', leave); //suppression des effets du CSS lors de la sortie de la section1
section1.addEventListener('drop', drop);