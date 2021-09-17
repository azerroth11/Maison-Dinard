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
polygonTemplate.events.on('hit', function (ev) {
    const region = document.querySelector('.regionH1')
    let regionID = ev.target.dataItem.dataContext.name
    region.innerText = regionID
    const grandEst = document.querySelector('.grand-est')
    const auvergne = document.querySelector('.auvergne')
    if (regionID == 'Grand Est') {
        hideRegions()
        grandEst.classList.remove('invisible')
    } else if (regionID == 'Auvergne-Rhône-Alpes') {
        hideRegions()
        auvergne.classList.remove('invisible')
    } else if (regionID == 'Bourgogne-Franche-Comté') {
        hideRegions()
        const bourgogne = document.querySelector('.bourgogne')
        bourgogne.classList.remove('invisible')
    } else if (regionID == 'Nouvelle-Aquitaine') {
        hideRegions()
        const aquitaine = document.querySelector('.nouvelle-aquitaine')
        aquitaine.classList.remove('invisible')
    } else if (regionID == 'Occitanie') {
        hideRegions()
        const occitanie = document.querySelector('.languedoc')
        occitanie.classList.remove('invisible')
    } else if (regionID == 'Pays de la Loire') {
        hideRegions()
        const loire = document.querySelector('.loire')
        loire.classList.remove('invisible')
    } else if (regionID == "Provence-Alpes-Côte d'Azur") {
        hideRegions()
        const provence = document.querySelector('.provence')
        provence.classList.remove('invisible')
    } else {
        hideRegions()
    }
})

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

wine.addEventListener('click', () => {
    beverageSection.classList.add('invisible')
    if (window.innerWidth < 1850) {
        const sectionMobile = body.insertBefore(
            document.createElement('section'),
            footer
        )
        sectionMobile.classList.add('domainsMobile')
        const regionsList = document.querySelectorAll('.region')
        regionsList.forEach(e => {
            const regionDiv = sectionMobile.appendChild(
                document.createElement('div')
            )
            regionDiv.classList.add('regionDiv')
            let regionH1 = regionDiv.appendChild(document.createElement('h1'))
            regionH1.innerHTML = e.id
            let domainList = e.children
            domainList.forEach(i => {
                let domain = regionDiv.appendChild(
                    document.createElement('div')
                )
                domain.insertAdjacentHTML('beforeend', i.innerHTML)
            })
        })
    } else {
        const map = document.querySelector('.map')
        map.classList.remove('invisible')
    }
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
