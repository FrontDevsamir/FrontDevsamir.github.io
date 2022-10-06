


const datos = {
    'section-grid': {
        'nombre': 'Seccion grid',
        'nivel': 'Principiante',
        'path-img': '../img/grid.jpg',
        'alt': 'Imagen de seccion grid',
        'repo': 'https://github.com/FrontDevsamir/testimonials-grid-section-main',
        'deploy': 'https://frontdevsamir.github.io/testimonials-grid-section-main/',
        'tecnologias': ['fa-html5', 'fa-css3-alt']
    },
    'card-nft': {
        'nombre': 'Card NFT',
        'nivel': 'Junior',
        'path-img': '../img/nft.jpg',
        'alt': 'Imagend e card NFT',
        'repo': 'https://github.com/FrontDevsamir/nft-preview-card-component-main',
        'deploy': 'https://frontdevsamir.github.io/nft-preview-card-component-main/',
        'tecnologias': ['fa-html5', 'fa-css3-alt']
    },
    'landing-page': {
        'nombre': 'Landing Page',
        'nivel': 'Junior',
        'path-img': '../img/landing.jpg',
        'alt': 'Imagend de landing page',
        'repo': 'https://github.com/FrontDevsamir/landing-page-with-curved-sections',
        'deploy': 'https://frontdevsamir.github.io/landing-page-with-curved-sections/',
        'tecnologias': ['fa-html5', 'fa-css3-alt']
    },
    'introduccion': {
        'nombre': 'Seccion de Landing Page',
        'nivel': 'Principiante',
        'path-img': '../img/introduction.jpg',
        'alt': 'Imagend de seccion introductoria',
        'repo': 'https://github.com/FrontDevsamir/Landing-Page-Introduccion',
        'deploy': 'https://frontdevsamir.github.io/Landing-Page-Introduccion/',
        'tecnologias': ['fa-html5', 'fa-css3-alt']
    },
    'order': {
        'nombre': 'Resumen de pedido',
        'nivel': 'Principiante',
        'path-img': '../img/order.jpg',
        'alt': 'Imagend de resumen de pedido',
        'repo': 'https://github.com/FrontDevsamir/order-summary-component-main',
        'deploy': 'https://frontdevsamir.github.io/order-summary-component-main/',
        'tecnologias': ['fa-html5', 'fa-css3-alt']
    },
    'storage': {
        'nombre': 'almacenamiento',
        'nivel': 'Junior',
        'path-img': '../img/storage.jpg',
        'alt': 'Imagend de almacenamiento' ,
        'repo': 'https://github.com/FrontDevsamir/data-storage-component',
        'deploy': 'https://frontdevsamir.github.io/data-storage-component/',
        'tecnologias': ['fa-html5', 'fa-css3-alt', 'fa-square-js']
    },
    'proff': {
        'nombre': 'Profesiones',
        'nivel': 'Junior',
        'path-img': '../img/proff.jpg',
        'alt': 'Imagend de social proff' ,
        'repo': 'https://github.com/FrontDevsamir/social-proof-section',
        'deploy': 'https://frontdevsamir.github.io/social-proof-section/',
        'tecnologias': ['fa-html5', 'fa-css3-alt']
    },
    'feature': {
        'nombre': 'Features',
        'nivel': 'Principiante',
        'path-img': '../img/feature.jpg',
        'alt': 'Imagend de feature' ,
        'repo': 'https://github.com/FrontDevsamir/four-card-feature-section',
        'deploy': 'https://frontdevsamir.github.io/four-card-feature-section/',
        'tecnologias': ['fa-html5', 'fa-css3-alt']
    },
    'card': {
        'nombre': 'Componente principal',
        'nivel': 'Principiante',
        'path-img': '../img/card.jpg',
        'alt': 'Imagend de card main',
        'repo': 'https://github.com/FrontDevsamir/card-component-main',
        'deploy': 'https://frontdevsamir.github.io/card-component-main/',
        'tecnologias': ['fa-html5', 'fa-css3-alt']
    }

}


const container = document.getElementById('container')

const seccion = document.createElement('section')
seccion.classList.add('container__desafios')

container.appendChild(seccion)



/**
 * ...Aqui recorremos todo el objeto datos y creamos un articulo por cada objeto dentro dentro del article agregamos la imagen y el duv de info del articulo .
 */
for (let clave in datos) {
    let article = document.createElement('article')
    article.classList.add('container__desafios--desafio')

    let div_img = document.createElement('div')
    div_img.classList.add('container--desafio--img')

    let img = document.createElement('img')
    img.src = datos[clave]['path-img']
    img.alt = datos[clave]['alt'] 

    div_img.appendChild(img) 

    let info = document.createElement('div')
    info.classList.add('container--desafio--info')

    let nombre = document.createElement('h2')
    nombre.classList.add('desafio--info--title')
    nombre.textContent = datos[clave]['nombre']

    let div_social = document.createElement('div')
    div_social.classList.add('desafio--info--social')

    let nivel = document.createElement('span')
    nivel.classList.add('social--nivel')
    nivel.textContent = datos[clave]['nivel']

    let icono = document.createElement('i')
    icono.classList.add('social--icon', 'fa-solid', 'fa-heart')
    icono.id = 'social--icon'

    if (datos[clave]['nivel'] == 'Principiante'){
        nivel.classList.add('principiante')
    } else if (datos[clave]['nivel'] == 'Junior') {
        nivel.classList.add('junior')
    } else {
        nivel.classList.add('Intermedio')
    }

    div_social.appendChild(nivel)
    div_social.appendChild(icono)

    let div_btns = document.createElement('div')
    div_btns.classList.add('social--info--btns')
    let github = document.createElement('a')
    let icon_github = document.createElement('i')
    icon_github.classList.add('fa-brands', 'fa-github', 'icon-git', 'icon')
    github.textContent = 'Repositorio'
    github.appendChild(icon_github)
    github.href = datos[clave]['repo']
    github.target = '_blank'

    let deploy = document.createElement('a')
    let icon_deploy = document.createElement('i')
    icon_deploy.classList.add('fa-solid', 'fa-rocket', 'icon-deploy', 'icon')
    deploy.textContent = 'Deploy'
    deploy.appendChild(icon_deploy)
    deploy.href = datos[clave]['deploy']
    deploy.target = '_blank'

    div_btns.appendChild(github)
    div_btns.appendChild(deploy)


    let div_tecnologias = document.createElement('div')
    div_tecnologias.classList.add('social--info--tecnologias')
    for (let i = 0; i < datos[clave]['tecnologias'].length; i++) {
        let icon_tecno = document.createElement('i')
        icon_tecno.classList.add('fa-brands', datos[clave]['tecnologias'][i], 'icon-tecno')
        div_tecnologias.appendChild(icon_tecno)
    }




    info.appendChild(nombre)
    info.appendChild(div_social)
    info.appendChild(div_btns)
    info.appendChild(div_tecnologias)

    article.appendChild(div_img)
    article.appendChild(info)

    seccion.appendChild(article)
 }




// ... AQUI LE AGREGAMOS EL EVENTO A CADA UNO DE LOS ELEMENTOS CON LA CLASE SOCIAL--ICON Y ADEMAS LE AGREGAMOS O QUITAMOS LA CLASE ACTIVE SI TIENE LA CLASE SE LA AGREGA DE LO CONTRARIO SE LA ELIMINA ESTO LO HACE EL METODO toggle .

const icono = document.getElementsByClassName('social--icon')

for (let i = 0; i < icono.length; i++) {
    icono[i].addEventListener('click', e => {
        icono[i].classList.toggle('active')
    })
}

