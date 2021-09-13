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

const beverageSection = document.querySelector('.beverage-choice')
const mapSection = document.querySelector('.map')
const wine = document.querySelector('.vins')
wine.addEventListener('click', () => {
    beverageSection.classList.add('invisible')
    mapSection.classList.remove('invisible')
})
