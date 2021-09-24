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

const vinsSelection = document.querySelector('.vins')
const sectionMap = document.querySelector('.map')
const sectionMobileChoice = document.querySelector('.mobileChoice')
vinsSelection.addEventListener('click', () => {
    const beverageSection = document.querySelector('.beverage-choice')
    beverageSection.classList.add('invisible')
    sectionMap.classList.remove('invisible')
    sectionMobileChoice.classList.remove('invisible')
})

// DATA
const auvergne = {
    id: 'Auvergne-Rhône-Alpes',
    domains: [
        {
            id: 'CHATEAU DE PIZAY',
            cepages: [
                { id: 'MORGON', robes: ['Rouge'] },
                { id: 'BEAUJOLAIS', robes: ['Blanc', 'Rosé', 'Rouge'] },
                { id: 'BOURGOGNE', robes: ['Blanc', 'Rouge'] },
            ],
        },
        {
            id: 'DOMAINE FAURY',
            cepages: [{ id: 'CÔTE-RÔTIE', robes: ['Blanc', 'Rouge'] }],
        },
        {
            id: 'DOMAINE YANN CHAVE',
            cepages: [{ id: 'CROZES HERMITAGE', robes: ['Blanc', 'Rouge'] }],
        },
        {
            id: 'DOMAINE DE BEAURENARD',
            cepages: [{ id: 'CHATEAUNEUF DU PAPE', robes: ['Blanc', 'Rouge'] }],
        },
        {
            id: 'DOMAINE DE MONTVAC',
            cepages: [{ id: 'VACQUEYRAS', robes: ['Blanc', 'Rosé', 'Rouge'] }],
        },
        {
            id: 'DOMAINE DE LA GUICHARDE',
            cepages: [
                { id: 'CÔTES DU RHÔNE', robes: ['Blanc', 'Rosé', 'Rouge'] },
            ],
        },
        {
            id: 'DOMAINE DE LA TOURADE',
            cepages: [
                {
                    id: 'CÔTES DU RHÔNE VILLAGE',
                    robes: ['Blanc', 'Rosé', 'Rouge'],
                },
            ],
        },
        {
            id: 'DOMAINE FRANCOIS VILLARD',
            cepages: [{ id: 'LES RHONES NORD', robes: ['Blanc', 'Rouge'] }],
        },
        {
            id: 'CUILLERON GAILLARD VILLARD',
            cepages: [{ id: 'LES VINS DE VIENNE', robes: ['Blanc', 'Rouge'] }],
        },
        {
            id: 'CHATEAU MAS NEUF',
            cepages: [
                { id: 'COSTIERES DE NÎMES', robes: ['Blanc', 'Rosé', 'Rouge'] },
            ],
        },
    ],
}

const bourgogne = {
    id: 'Bourgogne-Franche-Comté',
    domains: [
        {
            id: 'DOMAINE LAMY-PILLOT',
            cepages: [{ id: 'BOURGOGNES', robes: ['Blanc', 'Rouge'] }],
        },
        {
            id: 'DOMAINE NATHALIE & GILLES FEVRE',
            cepages: [{ id: 'CHABLIS', robes: ['Blanc'] }],
        },
        {
            id: 'DOMAINE DEVILLARD',
            cepages: [
                { id: 'MERCUREY', robes: ['Blanc', 'Rouge'] },
                { id: 'GIVRY', robes: ['Blanc', 'Rouge'] },
                { id: 'NUITS SAINT GEORGES', robes: ['Blanc', 'Rouge'] },
            ],
        },
        {
            id: 'DOMAINE SAINT AMANT',
            cepages: [{ id: 'BEAUMES-DE-VENISE', robes: ['Blanc', 'Rouge'] }],
        },
    ],
}

const grandEst = {
    id: 'Grand Est',
    domains: [
        {
            id: 'DOMAINE DES COMTES DE LUPFEN',
            cepages: [
                { id: "VIN D'ALSACE", robes: ['Blanc'] },
                { id: 'EAU DE VIE', robes: ['Blanc'] },
            ],
        },
    ],
}

const nouvelleAquitaine = {
    id: 'Nouvelle-Aquitaine',
    domains: [
        {
            id: 'MAISON H. CUVELIER & FILS',
            cepages: [
                { id: 'SAINT ESTEPHE', robes: ['Rouge'] },
                { id: 'SAINT JULIEN', robes: ['Rouge'] },
                {
                    id: 'GRANDS VINS DE BORDEAUX',
                    robes: ['Blanc', 'Rosé', 'Rouge'],
                },
            ],
        },
        {
            id: 'VIGNOBLES ANDRE LURTON',
            cepages: [
                {
                    id: 'BORDEAUX ET ENTRE-DEUX-MERS',
                    robes: ['Blanc'],
                },
                { id: 'MARGAUX', robes: ['Rouge'] },
                { id: 'PESSAC-LÉOGNAN', robes: ['Blanc', 'Rouge'] },
                { id: 'LUSSAC-SAINT-ÉMILION', robes: ['Rouge'] },
            ],
        },
        {
            id: 'CHATEAU RAMAGE LA BATISSE',
            cepages: [{ id: 'HAUT-MEDOC', robes: ['Rouge'] }],
        },
        {
            id: 'CHATEAU DE BELCIER',
            cepages: [{ id: 'CÔTES DE CASTILLON', robes: ['Rouge'] }],
        },
    ],
}

const paysDeLaLoire = {
    id: 'Pays de la Loire',
    domains: [
        {
            id: 'MAISON LAPORTE',
            cepages: [
                { id: 'SANCERRE', robes: ['Blanc', 'Rouge'] },
                { id: 'POUILLY-FUME', robes: ['Blanc'] },
            ],
        },
        {
            id: 'DOMAINES TATIN',
            cepages: [
                { id: 'QUINCY', robes: ['Blanc'] },
                { id: 'REUILLY', robes: ['Blanc', 'Rouge'] },
            ],
        },
        {
            id: 'DOMAINE MAISON & FILS',
            cepages: [{ id: 'CHEVERNY', robes: ['Blanc', 'Rosé', 'Rouge'] }],
        },
        {
            id: 'PASCAL & ALAIN LORIEUX',
            cepages: [
                { id: 'ST NICOLAS DE BOURGUEIL', robes: ['Rosé', 'Rouge'] },
                { id: 'CHINON', robes: ['Rosé', 'Rouge'] },
            ],
        },
        {
            id: 'DOMAINE FILLIATREAU',
            cepages: [
                { id: 'SAUMUR', robes: ['Blanc', 'Rosé', 'Rouge'] },
                { id: 'SAUMUR CHAMPIGNY', robes: ['Rouge'] },
            ],
        },
        {
            id: 'DOMAINE PIERRE LUNEAU-PAPIN',
            cepages: [{ id: 'MUSCADET', robes: ['Blanc'] }],
        },
    ],
}

const provence = {
    id: "Provence-Alpes-Côte d'Azur",
    domains: [
        {
            id: 'DOMAINE DE LA BEGUDE',
            cepages: [{ id: 'BANDOL', robes: ['Blanc', 'Rosé', 'Rouge'] }],
        },
        {
            id: 'CHATEAU PAS DU CERF',
            cepages: [
                {
                    id: 'CÔTES DE PROVENCE',
                    robes: ['Blanc', 'Rosé', 'Rouge'],
                },
            ],
        },
    ],
}

const occitanie = {
    id: 'Occitanie',
    domains: [
        {
            id: 'CHATEAU PUECH-HAUT',
            cepages: [{ id: 'LANGUEDOC', robes: ['Blanc', 'Rosé', 'Rouge'] }],
        },
        {
            id: 'DOMAINE SAINTE LEOCADIE',
            cepages: [{ id: 'MINERVOIS', robes: ['Blanc', 'Rouge'] }],
        },
        {
            id: 'DOMAINE DE LA CENDRILLON',
            cepages: [
                {
                    id: 'IGP & AOP CORBIERES',
                    robes: ['Blanc', 'Rosé', 'Rouge'],
                },
            ],
        },
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
domainList.sort()
// console.log(domainList)

// Create the cepagesList
const cepagesList = []
regionList.forEach(region => {
    region.domains.forEach(domain => {
        domain.cepages.forEach(cepage => {
            cepagesList.push(cepage.id)
        })
    })
})
cepagesList.sort()
// console.log(cepagesList)

polygonTemplate.events.on('hit', function (ev) {
    const mapOverlay = document.querySelector('.mapOverlay')
    const overlayH1 = document.querySelector('.overlayH1')
    mapOverlay.classList.remove('invisible')
    sectionMap.classList.add('blur')
    sectionMobileChoice.classList.add('blur')
    let clickedRegion = ev.target.dataItem.dataContext.name
    overlayH1.innerHTML = clickedRegion
    const closeBtnWine = document.querySelector('.fa-times')
    closeBtnWine.addEventListener('click', () => {
        mapOverlay.classList.add('invisible')
        sectionMap.classList.remove('blur')
        sectionMobileChoice.classList.remove('blur')
    })
    const selectedRegion = regionList.filter(i => i.id === clickedRegion)[0]
    if (selectedRegion) {
        resetDomains()
        selectedRegion.domains.forEach(domain => {
            const domainDiv = mapOverlay.insertBefore(
                document.createElement('div'),
                null
            )
            domainDiv.classList.add('domainDiv')
            const domainP = domainDiv.insertBefore(
                document.createElement('p'),
                null
            )
            domainP.innerHTML = `${"<i class='fas fa-caret-down'></i>"} ${
                domain.id
            }`
            createDomainList(domain, domainDiv, domainP)
        })
        const stickerLegend = mapOverlay.insertBefore(
            document.createElement('p'),
            null
        )
        stickerLegend.classList.add('stickerLegend')
        stickerLegend.innerHTML =
            '<i class="fas fa-circle sticker-white"></i>Vin blanc<i class="fas fa-circle sticker-pink"></i>Rosé<i class="fas fa-circle sticker-red"></i>Vin rouge'
    } else {
        resetDomains()
        const domainDiv = mapOverlay.insertBefore(
            document.createElement('div'),
            null
        )
        domainDiv.classList.add('domainDiv')
        const domainP = domainDiv.insertBefore(
            document.createElement('p'),
            null
        )
        domainP.innerText = 'Pas de domaines représentés dans cette région !'
    }
})

// Used when user clicks on a region without domains
function resetDomains() {
    const domainsDivList = document.querySelectorAll('.domainDiv')
    domainsDivList.forEach(e => {
        e.remove()
    })
    const stickerLegend = document.querySelectorAll('.stickerLegend')
    stickerLegend.forEach(e => {
        e.remove()
    })
}

function resetCepages() {
    const cepagesDivList = document.querySelectorAll('.cepagesInnerDiv')
    cepagesDivList.forEach(e => {
        e.parentNode.remove()
    })
    const domainDivList = document.querySelectorAll('.domainDiv')
    domainDivList.forEach(e => {
        e.firstChild.firstChild.style.rotate = '0deg'
        e.classList.remove('domainDivActive')
    })
}

// Create domains div
function createDomainList(domain, domainDiv, domainP) {
    domainP.addEventListener('click', () => {
        const cepagesDiv = domainDiv.insertBefore(
            document.createElement('div'),
            null
        )
        cepagesDiv.classList.add('cepagesDiv')
        resetCepages()
        domainDiv.classList.add('domainDivActive')
        domainDiv.firstChild.firstChild.style.rotate = '-90deg'
        createCepagesList(domain, cepagesDiv)
    })
}

// Create cepages div
function createCepagesList(domain, cepagesDiv) {
    domain.cepages.forEach(cepage => {
        const cepagesInnerDiv = cepagesDiv.insertBefore(
            document.createElement('div'),
            null
        )
        cepagesInnerDiv.classList.add('cepagesInnerDiv')
        const cepagesInnerDivP = cepagesInnerDiv.insertBefore(
            document.createElement('p'),
            null
        )
        let stickers = []
        cepage.robes.forEach(robe => {
            if (robe === 'Blanc') {
                stickers += '<i class="fas fa-circle sticker-white"></i>'
            } else if (robe === 'Rosé') {
                stickers += '<i class="fas fa-circle sticker-pink"></i>'
            } else if (robe === 'Rouge') {
                stickers += '<i class="fas fa-circle sticker-red"></i>'
            } else {
                console.log('Failed')
            }
        })
        cepagesInnerDivP.innerHTML = `${cepage.id} <div class="stickers">${stickers}</div>`
    })
}

// Champagnes selection
const champagnes = document.querySelector('.champagnes')
const champagne = document.querySelector('.champagne')
const billecart = document.querySelector('.billecart')
const drappier = document.querySelector('.drappier')

// Display champagne houses intro
champagnes.addEventListener('click', () => {
    const beverageSection = document.querySelector('.beverage-choice')
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
const closeBtnChampagne = document.querySelectorAll('.close-btn')

closeBtnChampagne.forEach(e => {
    e.addEventListener('click', () => {
        billecartSelection.classList.add('invisible')
        drappierSelection.classList.add('invisible')
        billecart.classList.remove('blur')
        drappier.classList.remove('blur')
    })
})
