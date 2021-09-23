const map = am4core.create('chartdiv', am4maps.MapChart)
map.geodata = am4geodata_franceHigh
map.projection = new am4maps.projections.Mercator()
const polygonSeries = new am4maps.MapPolygonSeries()
polygonSeries.useGeodata = true
map.series.push(polygonSeries)
// Populate series data
const polygonTemplate = polygonSeries.mapPolygons.template
polygonTemplate.tooltipText = '{name}'
polygonTemplate.fill = am4core.color('#74B266')
// Hover state
const hs = polygonTemplate.states.create('hover')
hs.properties.fill = am4core.color('#633640')
polygonTemplate.propertyFields.fill = 'fill'
// Disabled zoom
map.seriesContainer.draggable = false
map.seriesContainer.resizable = false
map.maxZoomLevel = 1
map.seriesContainer.events.disableType('doublehit')
map.chartContainer.background.events.disableType('doublehit')
// Enabled scroll through
map.chartContainer.wheelable = false
// Custom legends
// polygonTemplate.events.on('hit', function (ev) {
//     const region = document.querySelector('.regionH1')
//     let regionID = ev.target.dataItem.dataContext.name
//     region.innerText = regionID
//     const grandEst = document.querySelector('.grand-est')
//     const auvergne = document.querySelector('.auvergne')
// })

function hideRegions() {
    const regions = document.querySelectorAll('.region')
    for (const elem of regions) {
        elem.classList.add('invisible')
    }
}

// Wines selection
const body = document.querySelector('body')
const footer = document.querySelector('footer')
const beverageSection = document.querySelector('.beverage-choice')
const mapSection = document.querySelector('.map')
const wine = document.querySelector('.vins')

const auvergne = {
    id: 'Auvergne-Rhône-Alpes',
    domains: [
        {
            id: 'CHATEAU DE PIZAY',
            cepages: ['MORGON', 'BEAUJOLAIS', 'BOURGOGNE'],
        },
        {
            id: 'DOMAINE FAURY',
            cepages: ['COTE-ROTIE'],
        },
        {
            id: 'DOMAINE YANN CHAVE',
            cepages: ['CROZES HERMITAGE'],
        },
        {
            id: 'DOMAINE DE BEAURENARD',
            cepages: ['CHATEAUNEUF DU PAPE'],
        },
        {
            id: 'DOMAINE DE MONTVAC',
            cepages: ['VACQUEYRAS'],
        },
        {
            id: 'DOMAINE DE LA GUICHARDE',
            cepages: ['CÔTES DU RHONE'],
        },
        {
            id: 'DOMAINE DE LA TOURADE',
            cepages: ['CÔTES DU RHONE VILLAGE'],
        },
        {
            id: 'DOMAINE FRANCOIS VILLARD',
            cepages: ['LES RHONES NORD'],
        },
        {
            id: 'CUILLERON GAILLARD VILLARD',
            cepages: ['LES VINS DE VIENNE'],
        },
        {
            id: 'CHATEAU MAS NEUF',
            cepages: ['COSTIERES DE NIMES'],
        },
    ],
}

const bourgogne = {
    id: 'Bourgogne-Franche-Comté',
    domains: [
        { id: 'DOMAINE LAMY-PILLOT', cepages: ['BOURGOGNES'] },
        { id: 'DOMAINE NATHALIE & GILLES FEVRE', cepages: ['CHABLIS'] },
        {
            id: 'DOMAINE DEVILLARD',
            cepages: ['MERCUREY', 'GIVRY', 'NUITS SAINT GEORGES'],
        },
        { id: 'DOMAINE SAINT AMANT', cepages: ['BEAUMES-DE-VENISE'] },
    ],
}

const grandEst = {
    id: 'Grand Est',
    domains: [
        {
            id: 'DOMAINE DES COMTES DE LUPFEN',
            cepages: ["VIN D'ALSACE", 'EAU DE VIE'],
        },
    ],
}

const nouvelleAquitaine = {
    id: 'Nouvelle-Aquitaine',
    domains: [
        {
            id: 'MAISON H. CUVELIER & FILS',
            cepages: [
                'SAINT ESTEPHE',
                'SAINT JULIEN',
                'GRANDS VINS DE BORDEAUX',
            ],
        },
        {
            id: 'VIGNOBLES ANDRE LURTON',
            cepages: [
                'BORDEAUX ET ENTRE-DEUX-MERS',
                'MARGAUX ET PESSAC LEOGNAN',
                'LUSSAC SAINT EMILION',
            ],
        },
        { id: 'CHATEAU RAMAGE LA BATISSE', cepages: ['HAUT-MEDOC'] },
        { id: 'CHATEAU DE BELCIER', cepages: ['CÔTES DE CASTILLON'] },
    ],
}

const paysDeLaLoire = {
    id: 'Pays de la Loire',
    domains: [
        { id: 'MAISON LAPORTE', cepages: ['SANCERRE', 'POUILLY-FUME'] },
        { id: 'DOMAINES TATIN', cepages: ['QUINCY', 'REUILLY'] },
        { id: 'DOMAINE MAISON & FILS', cepages: ['CHEVERNY'] },
        {
            id: 'PASCAL & ALAIN LORIEUX',
            cepages: ['ST NICOLAS DE BOURGUEIL', 'CHINON'],
        },
        { id: 'DOMAINE FILLIATREAU', cepages: ['SAUMUR', 'SAUMUR CHAMPIGNY'] },
        { id: 'DOMAINE PIERRE LUNEAU-PAPIN', cepages: ['MUSCADET'] },
    ],
}

const provence = {
    id: "Provence-Alpes-Côte d'Azur",
    domains: [
        { id: 'DOMAINE DE LA BEGUDE', cepages: ['BANDOL AOC'] },
        { id: 'CHATEAU PAS DU CERF', cepages: ['AOP CÔTES DE PROVENCE'] },
    ],
}

const occitanie = {
    id: 'Occitanie',
    domains: [
        { id: 'CHATEAU PUECH-HAUT', cepages: ['LANGUEDOC'] },
        { id: 'DOMAINE SAINTE LEOCADIE', cepages: ['MINERVOIS'] },
        { id: 'DOMAINE DE LA CENDRILLON', cepages: ['IGP & AOP CORBIERES'] },
    ],
}

const regionList = [
    auvergne,
    bourgogne,
    grandEst,
    nouvelleAquitaine,
    occitanie,
    paysDeLaLoire,
    provence,
]

// Create the domainList
const domainList = []
regionList.forEach(region => {
    region.domains.forEach(domain => {
        domainList.push(domain.id)
    })
})
// console.log(domainList)

// Create the cepagesList
const cepagesList = []
regionList.forEach(region => {
    region.domains.forEach(domain => {
        domain.cepages.forEach(cepage => {
            cepagesList.push(cepage)
        })
    })
})
cepagesList.sort()
// console.log(cepagesList)

polygonTemplate.events.on('hit', function (ev) {
    const mapOverlay = document.querySelector('.mapOverlay')
    const sectionMap = document.querySelector('.map')
    const sectionMobileChoice = document.querySelector('.mobileChoice')
    const overlayH1 = document.querySelector('.overlayH1')
    mapOverlay.classList.remove('invisible')
    sectionMap.classList.add('blur')
    sectionMobileChoice.classList.add('blur')
    let clickedRegion = ev.target.dataItem.dataContext.name
    overlayH1.innerHTML = clickedRegion
    const selectedRegion = regionList.filter(i => i.id === clickedRegion)[0]
    selectedRegion.domains.forEach(e => {
        const domainP = mapOverlay.insertBefore(
            document.createElement('p'),
            null
        )
        domainP.innerHTML = `${"<i class='fas fa-caret-down'></i>"} ${e.id}`
    })
})

// Champagnes selection
const champagnes = document.querySelector('.champagnes')
const champagne = document.querySelector('.champagne')
const billecart = document.querySelector('.billecart')
const drappier = document.querySelector('.drappier')

// Display champagne houses intro
champagnes.addEventListener('click', () => {
    beverageSection.classList.add('invisible')
    champagne.classList.remove('invisible')
    billecart.classList.remove('invisible')
    drappier.classList.remove('invisible')
})

// Display Billecart champagnes
const discoverBillecart = document.querySelector('.discover-billecart')
const billecartSelection = document.querySelector('.billecart-selection')

discoverBillecart.addEventListener('click', () => {
    if (window.innerWidth > 960) {
        billecartSelection.classList.toggle('invisible')
        billecart.classList.add('blur')
        drappier.classList.add('blur')
    } else {
        billecartSelection.classList.toggle('invisible')
    }
})

// Display Drappier champagnes
const discoverDrappier = document.querySelector('.discover-drappier')
const drappierSelection = document.querySelector('.drappier-selection')

discoverDrappier.addEventListener('click', e => {
    if (window.innerWidth > 960) {
        drappierSelection.classList.toggle('invisible')
        billecart.classList.add('blur')
        drappier.classList.add('blur')
    } else {
        drappierSelection.classList.toggle('invisible')
    }
})

// Close BTN
const closeBTN = document.querySelectorAll('.close-btn')

closeBTN.forEach(e => {
    e.addEventListener('click', () => {
        billecartSelection.classList.add('invisible')
        drappierSelection.classList.add('invisible')
        billecart.classList.remove('blur')
        drappier.classList.remove('blur')
    })
})
