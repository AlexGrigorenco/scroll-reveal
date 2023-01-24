

const data = [
    {
      img: './images/paris.jpg',
      city: 'Paris',
      description: ' (French pronunciation: ​[paʁi] (listen)) is the capital and most populous city of France, with an estimated population of 2,165,423 residents in 2019 in an area of more than 105 km² (41 sq mi),[5] making it the 30th most densely populated city in the world in 2020.[6] Since the 17th century, Paris has been one of the world\'s major centres of finance, diplomacy, commerce, fashion, gastronomy, and science. For its leading role in the arts and sciences, as well as its very early system of street lighting, in the 19th century it became known as "the City of Light".[7] Like London, prior to the Second World War, it was also sometimes called the capital of the world.',
      link: 'https://en.wikipedia.org/wiki/Paris',
    },
    {
      img: './images/london.jpg',
      city: 'London',
      description: ' is the capital and largest city of England and the United Kingdom, with a population of just under 9 million.[1] It stands on the River Thames in south-east England at the head of a 50-mile (80 km) estuary down to the North Sea, and has been a major settlement for two millennia.[9] The City of London, its ancient core and financial centre, was founded by the Romans as Londinium and retains its medieval boundaries.[note 1][10] The City of Westminster, to the west of the City of London, has for centuries hosted the national government and parliament. Since the 19th century,[11] the name "London" has also referred to the metropolis around this core, historically split between the counties of Middlesex, Essex, Surrey, Kent, and Hertfordshire,[12] which largely comprises Greater London,[13] governed by the Greater London Authority.[note 2][14] ',
      link: 'https://en.wikipedia.org/wiki/London',
    },
    {
      img: './images/edinburgh.jpg',
      city: 'Edinburgh',
      description: ' (/ˈɛdɪnbərə/ (listen)[8][9][10] Scots: [ˈɛdɪnbʌrə]; Scottish Gaelic: Dùn Èideann [ˌt̪un ˈeːtʲən̪ˠ]) is the capital city of Scotland and one of its 32 council areas. The city was historically part of the county of Midlothian (formally called the "county of Edinburgh" or Edinburghshire until 1947), but was administered separately from the surrounding county from 1482 onwards. It is located in Lothian on the southern shore of the Firth of Forth. Edinburgh is Scotland\'s second-most populous city, after Glasgow, and the seventh-most populous city in the United Kingdom.',
      link: 'https://en.wikipedia.org/wiki/Edinburgh',
    },
    {
      img: './images/berlin.jpg',
      city: 'Berlin',
      description: ' (/bɜːrˈlɪn/ bur-LIN, German: [bɛɐ̯ˈliːn] (listen))[7] is the capital and largest city of Germany by both area and population.[8][9] Its 3.7 million inhabitants make it the European Union\'s most populous city, according to population within city limits.[2] One of Germany\'s sixteen constituent states, Berlin is surrounded by the State of Brandenburg and contiguous with Potsdam, Brandenburg\'s capital. Berlin\'s urban area, which has a population of around 4.5 million, is the second most populous urban area in Germany after the Ruhr.[3] The Berlin-Brandenburg capital region has around 6.2 million inhabitants and is Germany\'s third-largest metropolitan region after the Rhine-Ruhr and Rhine-Main regions.[10] ',
      link: 'https://en.wikipedia.org/wiki/Berlin',
    },
    {
      img: './images/venice.jpg',
      city: 'Venice',
      description: ' (/ˈvɛnɪs/ VEH-niss; Italian: Venezia [veˈnɛttsja] (listen); Venetian: Venesia or Venexia[citation needed] [veˈnɛsja]) is a city in northeastern Italy and the capital of the Veneto region. It is built on a group of 118 small islands[3] that are separated by canals and linked by over 400 bridges.[3][4] The islands are in the shallow Venetian Lagoon, an enclosed bay lying between the mouths of the Po and the Piave rivers (more exactly between the Brenta and the Sile). In 2020, around 258,685 people resided in greater Venice or the Comune di Venezia, of whom around 55,000 live in the historical island city of Venice (centro storico) and the rest on the mainland (terraferma). Together with the cities of Padua and Treviso, Venice is included in the Padua-Treviso-Venice Metropolitan Area (PATREVE), which is considered a statistical metropolitan area, with a total population of 2.6 million.[5] ',
      link: 'https://en.wikipedia.org/wiki/Venice',
    },
    {
      img: './images/rome.jpg',
      city: 'Rome',
      description: ' (Italian and Latin: Roma [ˈroːma] (listen)) is the capital city of Italy. It is also the capital of the Lazio region, the centre of the Metropolitan City of Rome, and a special comune named Comune di Roma Capitale. With 2,860,009 residents in 1,285 km2 (496.1 sq mi),[2] Rome is the country\'s most populated comune and the third most populous city in the European Union by population within city limits. The Metropolitan City of Rome, with a population of 4,355,725 residents, is the most populous metropolitan city in Italy.[3] Its metropolitan area is the third-most populous within Italy.[4] Rome is located in the central-western portion of the Italian Peninsula, within Lazio (Latium), along the shores of the Tiber. Vatican City (the smallest country in the world)[5] is an independent country inside the city boundaries of Rome, the only existing example of a country within a city. Rome is often referred to as the City of Seven Hills due to its geographic location, and also as the "Eternal City".[6] Rome is generally considered to be the "cradle of Western civilization and Christian culture", and the centre of the Catholic Church.[7][8][9] ',
      link: 'https://en.wikipedia.org/wiki/Rome',
    },
    {
      img: './images/prague.jpg',
      city: 'Prague',
      description: ' (/prɑːɡ/ PRAHG; Czech: Praha [ˈpraɦa] (listen); German: Prag, pronounced [pʁaːk] (listen); Latin: Praga) is the capital and largest city in the Czech Republic,[8] and the historical capital of Bohemia. On the Vltava river, Prague is home to about 1.3 million people.[4] The city has a temperate oceanic climate, with relatively warm summers and chilly winters. ',
      link: 'https://en.wikipedia.org/wiki/Prague',
    },
  ]


  const htmlString = data.map(i => `<div class="city-wrapper">
                                        <div class="img-block">
                                        <div class="img-wrapper" data-reveal="left">
                                            <img src=${i.img} alt="city">
                                        </div>
                                        </div>
                                        <div class="info">
                                            <h2 class="title" data-reveal="left">
                                            ${i.city}
                                            </h2>
                                            <p data-reveal="left">
                                            <span>${i.city}</span>${i.description}
                                            </p>
                                            <a href=${i.link} target="_blank" data-reveal="left">
                                            Link to wikipedia
                                            </a>
                                        </div>
                                        </div>
  `).join('')

  document.querySelector('section').innerHTML = htmlString