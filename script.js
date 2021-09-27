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
const sectionMap = document.querySelector('.sectionMap')
const sectionMapDiv = document.querySelector('.map')
const sectionMobileChoice = document.querySelector('.mobileChoice')
vinsSelection.addEventListener('click', () => {
    const beverageSection = document.querySelector('.beverage-choice')
    beverageSection.classList.add('invisible')
    sectionMap.classList.remove('invisible')
    sectionMapDiv.classList.remove('invisible')
    sectionMobileChoice.classList.remove('invisible')
})

// DATA
const auvergne = {
    id: 'Auvergne-Rhône-Alpes',
    domains: [
        {
            id: 'CHATEAU DE PIZAY',
            cepages: [
                { id: 'MORGON' },
                { id: 'BEAUJOLAIS' },
                { id: 'BOURGOGNE' },
            ],
        },
        {
            id: 'DOMAINE FAURY',
            cepages: [{ id: 'CÔTE-RÔTIE' }],
        },
        {
            id: 'DOMAINE YANN CHAVE',
            cepages: [{ id: 'CROZES HERMITAGE' }],
        },
        {
            id: 'DOMAINE DE BEAURENARD',
            cepages: [{ id: 'CHATEAUNEUF DU PAPE' }],
        },
        {
            id: 'DOMAINE DE MONTVAC',
            cepages: [{ id: 'VACQUEYRAS' }],
        },
        {
            id: 'DOMAINE DE LA GUICHARDE',
            cepages: [{ id: 'CÔTES DU RHÔNE' }],
        },
        {
            id: 'DOMAINE DE LA TOURADE',
            cepages: [
                {
                    id: 'CÔTES DU RHÔNE VILLAGE',
                },
            ],
        },
        {
            id: 'DOMAINE FRANCOIS VILLARD',
            cepages: [{ id: 'LES RHONES NORD' }],
        },
        {
            id: 'CUILLERON GAILLARD VILLARD',
            cepages: [{ id: 'LES VINS DE VIENNE' }],
        },
        {
            id: 'CHATEAU MAS NEUF',
            cepages: [{ id: 'COSTIERES DE NÎMES' }],
        },
    ],
}

const bourgogne = {
    id: 'Bourgogne-Franche-Comté',
    domains: [
        {
            id: 'DOMAINE LAMY-PILLOT',
            cepages: [{ id: 'BOURGOGNES' }],
        },
        {
            id: 'DOMAINE NATHALIE & GILLES FEVRE',
            cepages: [{ id: 'CHABLIS' }],
        },
        {
            id: 'DOMAINES DEVILLARD',
            cepages: [
                {
                    id: 'MERCUREY',
                    ref: [
                        {
                            id: 'Mercurey',
                            link: './PDF/Vin/BOURGOGNE/Château de Chamirey/MERCUREY-BLANC.pdf',
                            color: 'Blanc',
                            bio: true,
                        },
                        {
                            id: 'Mercurey',
                            link: './PDF/Vin/BOURGOGNE/Château de Chamirey/MERCUREY-ROUGE.pdf',
                            color: 'Rouge',
                            bio: true,
                        },
                        {
                            id: 'Mercurey 1er Cru La Mission',
                            link: './PDF/Vin/BOURGOGNE/Château de Chamirey/MERCUREY-BLANC-PREMIER-CRU-LA-MISSION.pdf',
                            color: 'Blanc',
                            bio: true,
                        },
                        {
                            id: 'Mercurey 1er Cru Les Ruelles',
                            link: './PDF/Vin/BOURGOGNE/Château de Chamirey/MERCUREY-ROUGE-1C-LES-RUELLES.pdf',
                            color: 'Rouge',
                            bio: true,
                        },
                        {
                            id: 'Mercurey en Pierrelet',
                            link: './PDF/Vin/BOURGOGNE/Château de Chamirey/MERCUREY-BLANC-EN-PIERRELET.pdf',
                            color: 'Blanc',
                            bio: true,
                        },
                    ],
                },
                {
                    id: 'NUITS SAINT GEORGES',
                    ref: [
                        {
                            id: 'Bourgogne Pinot Noir',
                            link: './PDF/Vin/BOURGOGNE/Domaine des Perdrix/bourgogne-pinot-noir-2018.pdf',
                            color: 'Rouge',
                            bio: true,
                        },
                        {
                            id: 'Echezeaux Grand Cru',
                            link: './PDF/Vin/BOURGOGNE/Domaine des Perdrix/echezeaux-grand-cru-2018.pdf',
                            color: 'Rouge',
                            bio: true,
                        },
                        {
                            id: 'Nuits Saint Georges',
                            link: './PDF/Vin/BOURGOGNE/Domaine des Perdrix/nuits-saint-georges-2018.pdf',
                            color: 'Rouge',
                            bio: true,
                        },
                        {
                            id: '1er Cru, « Aux 8 ouvrées »',
                            link: './PDF/Vin/BOURGOGNE/Domaine des Perdrix/nuits-saint-georges-premier-cru-aux-perdrix-cuvee-les-8-ouvrees-2018.pdf',
                            color: 'Rouge',
                            bio: true,
                        },
                        {
                            id: '1er Cru, « Les terres blanches »',
                            link: './PDF/Vin/BOURGOGNE/Domaine des Perdrix/nuits-saint-georges-premier-cru-les-terres-blanches-rouge-2018.pdf',
                            color: 'Rouge',
                            bio: true,
                        },
                        {
                            id: 'Vosne-Romanée',
                            link: './PDF/Vin/BOURGOGNE/Domaine des Perdrix/vosne-romanee-2018.pdf',
                            color: 'Rouge',
                            bio: true,
                        },
                    ],
                },
                {
                    id: 'GIVRY',
                    ref: [
                        {
                            id: 'Givry',
                            link: './PDF/Vin/BOURGOGNE/Domaine de la Ferté/givry-2018.pdf',
                            color: 'Rouge',
                            bio: true,
                        },
                        {
                            id: 'Givry 1er Cru « Servoisine »',
                            link: './PDF/Vin/BOURGOGNE/Domaine de la Ferté/givry-1er-cru-servoisine-2018.pdf',
                            color: 'Rouge',
                            bio: true,
                        },
                    ],
                },
            ],
        },
        {
            id: 'DOMAINE SAINT AMANT',
            cepages: [{ id: 'BEAUMES-DE-VENISE' }],
        },
    ],
}

const grandEst = {
    id: 'Grand Est',
    domains: [
        {
            id: 'DOMAINE DES COMTES DE LUPFEN',
            cepages: [{ id: "VIN D'ALSACE" }, { id: 'EAU DE VIE' }],
        },
    ],
}

const nouvelleAquitaine = {
    id: 'Nouvelle-Aquitaine',
    domains: [
        {
            id: 'MAISON H. CUVELIER & FILS',
            cepages: [
                {
                    id: 'SAINT ESTEPHE',
                    ref: [
                        {
                            id: 'Château Le Crock',
                            link: './PDF/Vin/BORDEAUX/H.Cuvelier/SAINT ESTEPHE/Château le Crock.pdf',
                            color: 'Rouge',
                            bio: true,
                        },
                        {
                            id: 'Château La Croix Saint Estephe',
                            link: './PDF/Vin/BORDEAUX/H.Cuvelier/SAINT ESTEPHE/Château la Croix St Estephe.pdf',
                            color: 'Rouge',
                            bio: true,
                        },
                    ],
                },
                {
                    id: 'SAINT JULIEN',
                    ref: [
                        {
                            id: 'Château Leoville Poyferre',
                            link: './PDF/Vin/BORDEAUX/H.Cuvelier/SAINT JULIEN/Chateau Léoville Poyferré.pdf',
                            color: 'Rouge',
                            bio: true,
                        },
                        {
                            id: 'Château Moulin Riche',
                            link: './PDF/Vin/BORDEAUX/H.Cuvelier/SAINT JULIEN/Château Moulin Riche.pdf',
                            color: 'Rouge',
                            bio: true,
                        },
                        {
                            id: 'Pavillon Leoville Poyferre',
                            link: './PDF/Vin/BORDEAUX/H.Cuvelier/SAINT JULIEN/Pavillon de Léoville Poyferré.pdf',
                            color: 'Rouge',
                            bio: true,
                        },
                        {
                            id: 'Saint Julien Cuvelier',
                            color: 'Rouge',
                            bio: true,
                        },
                    ],
                },
                {
                    id: 'GRANDS VINS DE BDX',
                    ref: [
                        {
                            id: 'Château Crabitey',
                            link: './PDF/Vin/BORDEAUX/H.Cuvelier/GRAND VINS DE BORDEAUX/Château Crabitey.pdf',
                            color: 'Rouge',
                        },
                        {
                            id: 'Château Chasse Spleen',
                            link: './PDF/Vin/BORDEAUX/H.Cuvelier/GRAND VINS DE BORDEAUX/L’Héritage de Chasse Spleen.pdf',
                            color: 'Rouge',
                        },
                    ],
                },
            ],
            topo: 'Le savoir-faire de la maison H.Cuvelier & Fils naît de son excellente connaissance du terroir et de la production, grâce à la détention de plusieurs châteaux familiaux ainsi que l’exclusivité sur des grands vins de Bordeaux.',
        },
        {
            id: 'VIGNOBLES ANDRE LURTON',
            cepages: [
                {
                    id: 'BORDEAUX ET ENTRE-DEUX-MERS',
                    ref: [
                        {
                            id: 'Château Bonnet',
                            link: './PDF/Vin/BORDEAUX/Vignobles André Lurton/BORDEAUX ET ENTRE DEUX MERS/Château Bonnet/Chateau Bonnet - Bordeaux.pdf',
                            color: 'Rouge',
                            bio: true,
                        },
                        {
                            id: 'Château Bonnet',
                            link: './PDF/Vin/BORDEAUX/Vignobles André Lurton/BORDEAUX ET ENTRE DEUX MERS/Château Bonnet/Chateau Bonnet - Entre-deux-mers.pdf',
                            color: 'Blanc',
                            bio: true,
                        },
                        {
                            id: 'Château Bonnet',
                            link: './PDF/Vin/BORDEAUX/Vignobles André Lurton/BORDEAUX ET ENTRE DEUX MERS/Château Bonnet/Château Bonnet - Réserve Rouge.pdf',
                            color: 'Rouge Réserve',
                            bio: true,
                        },
                        {
                            id: 'Château Tour de Bonnet',
                            link: './PDF/Vin/BORDEAUX/Vignobles André Lurton/BORDEAUX ET ENTRE DEUX MERS/Château Tour de Bonnet/Château Tour de Bonnet - Blanc.pdf',
                            color: 'Blanc',
                            bio: true,
                        },
                        {
                            id: 'Château Tour de Bonnet',
                            link: './PDF/Vin/BORDEAUX/Vignobles André Lurton/BORDEAUX ET ENTRE DEUX MERS/Château Tour de Bonnet/Château Tour de Bonnet - Rouge.pdf',
                            color: 'Rouge',
                            bio: true,
                        },
                    ],
                },
                {
                    id: 'MARGAUX',
                    ref: [
                        {
                            id: 'Château Dauzac',
                            link: './PDF/Vin/BORDEAUX/Vignobles André Lurton/MARGAUX/Château Dauzac/Château Dauzac - Rouge.pdf',
                            color: 'Rouge',
                            bio: true,
                        },
                        {
                            id: 'Labastide Dauzac',
                            link: './PDF/Vin/BORDEAUX/Vignobles André Lurton/MARGAUX/Labastide Dauzac/Labastide Dauzac - Rouge.pdf',
                            color: 'Rouge',
                            bio: true,
                        },
                    ],
                },
                {
                    id: 'PESSAC-LÉOGNAN',
                    ref: [
                        {
                            id: 'Château Coucheroy',
                            link: './PDF/Vin/BORDEAUX/Vignobles André Lurton/PESSAC LEOGNAN/Château Coucheroy/Château Coucheroy - Blanc.pdf',
                            color: 'Blanc',
                            bio: true,
                        },
                        {
                            id: 'Château Coucheroy',
                            link: './PDF/Vin/BORDEAUX/Vignobles André Lurton/PESSAC LEOGNAN/Château Coucheroy/Château Coucheroy - Rouge.pdf',
                            color: 'Rouge',
                            bio: true,
                        },
                        {
                            id: 'Château Couhins-Lurton',
                            link: './PDF/Vin/BORDEAUX/Vignobles André Lurton/PESSAC LEOGNAN/Château Couhins-Lurton/Château Couhins Lurton - Blanc.pdf',
                            color: 'Blanc',
                            bio: true,
                        },
                        {
                            id: 'Château Couhins-Lurton',
                            link: './PDF/Vin/BORDEAUX/Vignobles André Lurton/PESSAC LEOGNAN/Château Couhins-Lurton/Château Couhins Lurton - Rouge.pdf',
                            color: 'Rouge',
                            bio: true,
                        },
                        {
                            id: 'Château de Cruzeau',
                            link: './PDF/Vin/BORDEAUX/Vignobles André Lurton/PESSAC LEOGNAN/Château de Cruzeau/Château de Cruzeau - Blanc.pdf',
                            color: 'Blanc',
                            bio: true,
                        },
                        {
                            id: 'Château de Cruzeau',
                            link: './PDF/Vin/BORDEAUX/Vignobles André Lurton/PESSAC LEOGNAN/Château de Cruzeau/Château de Cruzeau - Rouge.pdf',
                            color: 'Rouge',
                            bio: true,
                        },
                        {
                            id: 'Château de Quantin',
                            link: './PDF/Vin/BORDEAUX/Vignobles André Lurton/PESSAC LEOGNAN/Château de Quantin/Château de Quantin - Rouge.pdf',
                            color: 'Rouge',
                            bio: true,
                        },
                        {
                            id: 'Château de Rochemorin',
                            link: './PDF/Vin/BORDEAUX/Vignobles André Lurton/PESSAC LEOGNAN/Château de Rochemorin/Château de Rochemorin - Blanc.pdf',
                            color: 'Blanc',
                            bio: true,
                        },
                        {
                            id: 'Château de Rochemorin',
                            link: './PDF/Vin/BORDEAUX/Vignobles André Lurton/PESSAC LEOGNAN/Château de Rochemorin/Château de Rochemorin - Rouge.pdf',
                            color: 'Rouge',
                            bio: true,
                        },
                        {
                            id: 'Château La Louvière',
                            link: './PDF/Vin/BORDEAUX/Vignobles André Lurton/PESSAC LEOGNAN/Château La Louvière/Château La Louvière - Blanc.pdf',
                            color: 'Blanc',
                            bio: true,
                        },
                        {
                            id: 'Château La Louvière',
                            link: './PDF/Vin/BORDEAUX/Vignobles André Lurton/PESSAC LEOGNAN/Château La Louvière/Château La Louvière - Rouge.pdf',
                            color: 'Rouge',
                            bio: true,
                        },
                    ],
                },
                {
                    id: 'LUSSAC-SAINT-ÉMILION',
                    ref: [
                        {
                            id: 'Château Tour de Ségur',
                            link: './PDF/Vin/BORDEAUX/Vignobles André Lurton/LUSSAC SAINT EMILION/Château Tour de Ségur/Château Tour de Ségur - Rouge.pdf',
                            color: 'Rouge',
                            bio: true,
                        },
                    ],
                },
            ],
        },
        {
            id: 'CHATEAU RAMAGE LA BATISSE',
            cepages: [{ id: 'HAUT-MEDOC', ref: [] }],
        },
        {
            id: 'CHATEAU DE BELCIER',
            cepages: [{ id: 'CÔTES DE CASTILLON', ref: [] }],
        },
    ],
}

const paysDeLaLoire = {
    id: 'Pays de la Loire',
    domains: [
        {
            id: 'MAISON LAPORTE',
            cepages: [{ id: 'SANCERRE' }, { id: 'POUILLY-FUME' }],
        },
        {
            id: 'DOMAINES TATIN',
            cepages: [{ id: 'QUINCY' }, { id: 'REUILLY' }],
        },
        {
            id: 'DOMAINE MAISON & FILS',
            cepages: [{ id: 'CHEVERNY' }],
        },
        {
            id: 'PASCAL & ALAIN LORIEUX',
            cepages: [{ id: 'ST NICOLAS DE BOURGUEIL' }, { id: 'CHINON' }],
        },
        {
            id: 'DOMAINE FILLIATREAU',
            cepages: [{ id: 'SAUMUR' }, { id: 'SAUMUR CHAMPIGNY' }],
        },
        {
            id: 'DOMAINE PIERRE LUNEAU-PAPIN',
            cepages: [{ id: 'MUSCADET' }],
        },
    ],
}

const provence = {
    id: "Provence-Alpes-Côte d'Azur",
    domains: [
        {
            id: 'DOMAINE DE LA BEGUDE',
            cepages: [{ id: 'BANDOL' }],
        },
        {
            id: 'CHATEAU PAS DU CERF',
            cepages: [
                {
                    id: 'CÔTES DE PROVENCE',
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
            cepages: [
                {
                    id: 'LANGUEDOC',
                    ref: [
                        {
                            id: 'La Closerie-du-Pic',
                            link: './PDF/Vin/LANGUEDOC/Château Puech-Haut/Cuvées Pic Saint loup/La Closerie du Pic - Rosé.pdf',
                            color: 'Rosé',
                            bio: true,
                        },
                        {
                            id: 'Le Loup du Pic Rouge',
                            link: './PDF/Vin/LANGUEDOC/Château Puech-Haut/Cuvées Pic Saint loup/Le Loup du Pic - Rouge.pdf',
                            color: 'Rouge',
                            bio: true,
                        },
                        {
                            id: 'Cuvée Prestige',
                            link: './PDF/Vin/LANGUEDOC/Château Puech-Haut/Cuvées Prestige/Rosé.pdf',
                            color: 'Rosé',
                            bio: true,
                        },
                        {
                            id: 'Cuvée Prestige',
                            link: './PDF/Vin/LANGUEDOC/Château Puech-Haut/Cuvées Prestige/Rouge.pdf',
                            color: 'Rouge',
                            bio: true,
                        },
                        {
                            id: 'Cuvées Tête de Bélier',
                            link: './PDF/Vin/LANGUEDOC/Château Puech-Haut/Cuvées Tête de Bélier/Rosé.pdf',
                            color: 'Rosé',
                            bio: true,
                        },
                        {
                            id: 'Cuvées Tête de Bélier',
                            link: './PDF/Vin/LANGUEDOC/Château Puech-Haut/Cuvées Tête de Bélier/Rouge.pdf',
                            color: 'Rouge',
                            bio: true,
                        },
                    ],
                },
            ],
        },
        {
            id: 'DOMAINE SAINTE LEOCADIE',
            cepages: [
                {
                    id: 'MINERVOIS',
                    ref: [
                        {
                            id: 'La cuvée Leukadios',
                            link: './PDF/Vin/LANGUEDOC/Domaine Sainte Leocadie/Cuvée Leukadios.pdf',
                            color: 'Rouge',
                            bio: true,
                        },
                        { id: 'Les Clauses', link: undefined, bio: true },
                        {
                            id: 'La cuvée Fernand Averoux',
                            link: './PDF/Vin/LANGUEDOC/Domaine Sainte Leocadie/Cuvée Fernand.pdf',
                            color: 'Rouge',
                            bio: true,
                        },
                        { id: 'La cuvée Eden', link: undefined, bio: true },
                    ],
                },
            ],
        },
        {
            id: 'DOMAINE DE LA CENDRILLON',
            cepages: [
                {
                    id: 'IGP & AOP CORBIERES',
                    ref: [
                        {
                            id: 'Atypique',
                            link: './PDF/Vin/LANGUEDOC/Domaine de la Cendrillon/Atypique 2016.pdf',
                            color: 'Rouge',
                            bio: true,
                        },
                        {
                            id: 'Classique',
                            link: './PDF/Vin/LANGUEDOC/Domaine de la Cendrillon/Classique 2014.pdf',
                            color: 'Rouge',
                            bio: true,
                        },
                        {
                            id: 'Inédite',
                            link: './PDF/Vin/LANGUEDOC/Domaine de la Cendrillon/Inedite 2012.pdf',
                            color: 'Rouge',
                            bio: true,
                        },
                        {
                            id: 'Minuit',
                            link: './PDF/Vin/LANGUEDOC/Domaine de la Cendrillon/Minuit 2016.pdf',
                            color: 'Rosé',
                            bio: true,
                        },
                        {
                            id: 'N°1',
                            link: './PDF/Vin/LANGUEDOC/Domaine de la Cendrillon/N1 2012.pdf',
                            color: 'Rouge',
                            bio: true,
                        },
                    ],
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
    sectionMapDiv.classList.add('blur')
    sectionMobileChoice.classList.add('blur')
    if (window.innerWidth > 1000) {
        mapOverlay.classList.add('mapOverlayDesktop')
        sectionMapDiv.classList.remove('blur')
        sectionMobileChoice.classList.add('blur')
    }
    let clickedRegion = ev.target.dataItem.dataContext.name
    overlayH1.innerHTML = clickedRegion
    const closeBtnWine = document.querySelector('.fa-times')
    closeBtnWine.addEventListener('click', () => {
        mapOverlay.classList.add('invisible')
        sectionMapDiv.classList.remove('blur')
        sectionMobileChoice.classList.remove('blur')
    })
    const selectedRegion = regionList.filter(i => i.id === clickedRegion)[0]
    if (selectedRegion) {
        resetDomains()
        populateDomains(selectedRegion, mapOverlay)
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

function populateDomains(selectedRegion, mapOverlay) {
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
}

function resetDomains() {
    const domainsDivList = document.querySelectorAll('.domainDiv')
    domainsDivList.forEach(e => {
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
        if (document.querySelector('.domainDivActive') == null) {
            const cepagesDiv = domainDiv.insertBefore(
                document.createElement('div'),
                null
            )
            cepagesDiv.classList.add('cepagesDiv')
            resetCepages()
            domainDiv.classList.add('domainDivActive')
            domainDiv.firstChild.firstChild.style.rotate = '-90deg'
            createCepagesList(domain, cepagesDiv)
            const domainDivList = Array.from(
                document.querySelectorAll('.domainDiv')
            )
            domainActive = document.querySelector('.domainDivActive')
            const domainActiveIndex = domainDivList.indexOf(domainActive)
            domainDivList.splice(domainActiveIndex, 1)
            toggleOtherDomains(domainDivList)
        } else {
            domainActive = document.querySelector('.domainDivActive')
            domainActive.lastChild.remove()
            domainActive.classList.remove('domainDivActive')
            const domainDivList = Array.from(
                document.querySelectorAll('.domainDiv')
            )
            const domainActiveIndex = domainDivList.indexOf(domainActive)
            domainDivList.splice(domainActiveIndex, 1)
            toggleOtherDomains(domainDivList)
            resetCepages()
        }
    })
}

// Toggle domains which arene't active
function toggleOtherDomains(domainDivList) {
    domainDivList.forEach(i => {
        i.classList.toggle('invisible')
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
        const cepagesInnerDivH4 = cepagesInnerDiv.insertBefore(
            document.createElement('h4'),
            null
        )
        cepagesInnerDivH4.innerHTML = cepage.id
        if (cepage.ref != undefined) {
            cepage.ref.forEach(reference => {
                if (
                    reference.id != undefined &&
                    reference.link != undefined &&
                    reference.link != ''
                ) {
                    const chateauDiv = cepagesInnerDiv.insertBefore(
                        document.createElement('div'),
                        null
                    )
                    chateauDiv.classList.add('chateauDiv')
                    chateauDiv.innerHTML = `<a href="${reference.link}"><i class="fas fa-file-download"></i><p>${reference.id}</p></a><p class="color">- ${reference.color}</p>`
                } else {
                    console.log(`Link for ${reference.id} not defined`)
                    const chateauDiv = cepagesInnerDiv.insertBefore(
                        document.createElement('div'),
                        null
                    )
                    chateauDiv.classList.add('chateauDiv')
                    chateauDiv.innerHTML = `<a href="javascript:;"><i class="fas fa-file-download"></i><p>${reference.id}</p></a><p class="color">- PDF manquant</p>`
                }
            })
        }
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
