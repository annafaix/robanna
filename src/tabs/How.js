import React,  {Component} from 'react';

export default class How extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
    <div>
      <div className="whenWhere">
          <h2>När och var? </h2>
          <img src="img/lokal.jpg" alt="lokalen"/>
          <p>Både vigsel och festen är i Kezmarok. </p>
      </div>
      <div className="howToCome">
          <h2>Hur kommer jag dit?</h2>
          <p>
              Det finns många sätt att ta sig till Kezmarok. Tyvärr finns det ingen
              självklar och enkel väg. Nedan finns exempel på resvägar både med bil
              samt flyg och buss/tåg.
          </p>
          <div className="howToComeBil">
                  <h3>Bil</h3>
                  <p>
                      Nedan följer lite rekommendationer när det kommer till bilresor. Fördelen
                      med bil är att du kommer direkt till Kezmarok och har möjlighet att stanna
                      längs med vägen. Uppskattade priser är tur och retur för två personer med
                      vanlig personbil.
                  </p>
                  <h5>Tips!</h5>
                  <p>
                      Kolla upp angående fri datatrafik i Europa, det brukar ingå i de flesta
                      abonnemang men kan behövas beställas separat med kontantkort. Det är
                      jättebra att ha GPS med exempelvis Google Maps under resan då olyckor
                      eller ombyggnationer längs vägen kan kraftigt påverka restiden.
                  </p>
              </div>
            </div>
            <div className="column right">
                <h4>Bil genom Tyskland</h4>
                <ul>
                    <li>Distans att köra: ca. 155 mil</li>
                    <li>Körtid: ca. 14-16 timmar</li>
                    <li>Uppskattad tid enkel väg: 2-3 dagar (Minst en övernattning på vägen)</li>
                    <li>Rödby/Puttgarden (Inkl. Helsingborg/Helsingör): ca. 2400kr</li>
                    <li>Gedser/Rostock (Inkl. Helsingborg/Helsingör): ca. 3000kr</li>
                </ul>
                <p>
                    Det finns två vägar till Danmark så som via Helsingborg/Helsingör eller
                    Öresundsbron, det är ungefär samma pris oavsett väg. Det finns även två
                    vägar mellan Danmark och Tyskland, antingen Rödby/Puttgarden eller
                    Gedser/Rostock. Färjan mellan Rödby/Puttgarden är lite billigare,
                    ca. en timma snabbare och går oftare men det blir ca. 1,5 timmar längre
                    resväg med bil istället för en timme extra på färja.
                </p>
                <p>
                    Det går att köpa kombobiljett för resan mellan Danmark och Tyskland som
                    inkluderar resan mellan Helsingborg och Helsingör.
                    <a href="https://www.scandlines.se/">Scandlines</a> trafikerar alla
                    rutter som nämndes ovan.<br/>
                </p>
            </div>
            <div className="column left">
                <img src="img/PC200942.JPG"/>
            </div>
            <div className="column right">
                <ul>
                  <h5>Alternativ resväg: Kielfärjan</h5>
                  <li>Distans att köra: 110 mil</li>
                  <li>Körtid: ca. 11 timmar</li>
                  <li>Uppskattad tid enkel väg: 2-3 dagar (Minst en övernattning på vägen)</li>
                  <li>Göteborg/Kiel: ca. 2800kr</li>
                </ul>
                <p>
                    Det går att ta Kielfärjan på kvällen från Stena Tysklandsterminal i
                    Göteborg. Då kommer man ner till Kiel, Tyskland, tidigt på morgonen.
                    Resterande väg är ca. 11 timmar, så det går att köra på en dag även om
                    det blir väldigt mycket körande. Stannar man en gång på vägen så kan
                    man ta det i ett lugnt tempo och njuta av lite stopp på vägen.
                    <a href="https://www.stenaline.se/till-tyskland">Stena Line</a>
                    trafikerar sträckan mellan Göteborg och Kiel.
                </p>
            </div>
            <div>
                <h4>Bil genom Polen</h4>
                <ul>
                <li>Distans att köra: 30 mil till Trelleborg + 88 mil till Kezmarok</li>
                <li>Körtid: ca. 13 timmar</li>
                <li>Uppskattad tid enkel väg: 2 dagar (En övernattning på vägen)</li>
                <li>Trelleborg/Świnoujście: ca. 2000kr (utan hytt).
                    Hytt kostar ca. 400kr enkel väg (Dubbla priser över natten)</li>
                </ul>
                <p>
                    Det går att ta färjan mellan Trelleborg och Świnoujście och sen köra
                    bil ner genom Polen. Det går färjor på dagen, men finns även nattfärjor.
                    Färjeresan tar ca. 5,5 timmar på dagen och 7,5 timmar på natten, så det
                    är möjligt att få en nattvila. Det är antagligen billigare att ta en
                    dagfärja och sen stanna en natt någonstans längs vägen i Polen. Denna
                    rutt ger också minst körsträcka.
                </p>
            </div>
            <div className="howToComeFlyg">
                <h3>Flyg och buss/tåg</h3>
                <p>
                    Har du inte tid eller möjlighet att köra ner så finns det flera olika
                    destinationer du kan flyga till för att snabba på resan. Priser nedan
                    är beräknade för tur och retur för en person utan incheckat bagage.
                </p>
                <p>
                    För resor med flyg och tåg så är alla resor beräknade fram till till
                    Poprad som är lite större stad ca. 20 minuter bilväg från Kezmarok.
                    Det bör inte vara några problem att bli upphämtad där eller ta taxi
                    därifrån, det går även att boka tåg.
                </p>
                <h5>Tips!</h5>
                <p>
                    Ska du flyga ner så kolla gärna om du känner någon som ska åka ner med
                    bil. Det blir avsevärt mycket billigare att enbart ha ett litet
                    kabinbagage och inte incheckat bagage, vilket annars nästan är ett
                    krav på grund av kostym/klänning mm.
                </p>
                <p>
                    Tänk på kostnader som tillkommer för transfer till/från flygplats!
                </p>
                <p>
                    Lägg gärna en liten extra slant för att reservera plats eller till och
                    med Business Class. Det brukar inte kosta mycket mer och resan blir
                    avsevärt mycket behagligare.
                </p>
              </div>
              <div>
                  <h4>Flyg till Budapest och tåg till Poprad-Tatry</h4>
                  <ul>
                  <li>Uppskattad tid enkel väg: 2 timmar flyg + 5,5-8 timmar tåg</li>
                  <li>Kostnad: Från ca. 1400kr flyg + 700kr tåg</li>
                  <li>Flygbolag: Wizzair</li>
                  </ul>
                  <p>
                      Flyg till Budapest är ofta väldigt billigt om man åker på våren eller
                      hösten, vilket dock inte är fallet i nuläget. Detta blir en ganska
                      dyr och långsam resväg som dessutom kräver minst ett byte i antingen
                      Bratislava eller Kosice.
                  </p>
                  <p>
                      Flyg: <a href="https://wizzair.com/sv-se#/">Wizzair</a><br/>
                      Tåg: <a href="http://elvira.mav-start.hu/">Tåg</a>
                  </p>
              </div>
              <div>
                  <h4>Flyg till Wien och tåg till Poprad-Tatry</h4>
                  <ul>
                  <li>Uppskattad tid enkel väg: 2 timmar flyg + 4 timmar tåg</li>
                  <li>Kostnad: Från ca. 2000kr (flyg) + 400kr tåg</li>
                  <li>Flygbolag: Austrian, Lufthansa</li>
                  </ul>
                  <p>
                      Det går att flyga från Göteborg till Wien och sedan ta
                      flygbuss direkt från Wien till Bratislava. Därifrån går
                      sedan tåg direkt till Poprad.
                  </p>
                  <p>
                      Flyg: <a href="https://www.skyscanner.se">Skyscanner</a><br/>
                      Tåg: <a href="http://www.slovakrail.sk/en.html">SlovakRail</a>
                  </p>
              </div>
              <div>
                  <h4>Flyg till Prag och buss/tåg till Poprad-Tatry</h4>
                  <ul>
                  <li>Uppskattad tid enkel väg: 2 timmar flyg + 6,5 timmar tåg</li>
                  <li>Kostnad flyg: Från ca. 800kr flyg + ca. 500kr buss/tåg</li>
                  <li>Flygbolag: Czech Airlines, Ryanair</li>
                  </ul>
                  <p>
                      Det går att flyga med Ryanair eller Czech Airlines till
                      Prag och sedan ta tåg eller buss därifrån. Resan från
                      Prag till Poprad är ca. 6,5 timmar, men det brukar vara
                      bra standard och service på både tåg och buss.
                  </p>
                  <p>
                      Flyg: <a href="https://www.skyscanner.se">Skyscanner</a><br/>
                      Tåg: <a href="https://www.regiojet.com/">Regiojet</a>
                  </p>
              </div>
              <div>
                  <h4>Flyg till Krakow och taxi/hyrbil till Kezmarok</h4>
                  <ul>
                  <li>Uppskattad tid: 2 timmar flyg + 3 timmar bil/taxi</li>
                  <li>Uppskattad kostnad: ca. 800kr (flyg) + 1000kr (taxi)</li>
                  <li>Flygbolag: Ryanair</li>
                  </ul>
                  <p>
                      Utan tvekan så är detta den snabbaste vägen. Problemet
                      är dock att anslutningar till Kezmarok och Poprad är
                      dåliga. Det går att boka taxi som kör en hela vägen för
                      ett helt ok pris, ca. 500kr enkel väg. Detta pris går
                      att pruta avsevärt om man är flera personer som delar.
                      Ett alternativ om man är flera personer är att hyra
                      bil, eller bli upphämtad på flygplatsen.
                  </p>
                  <p>
                      Flyg: <a href="https://www.ryanair.com/se/sv/">Ryanair</a><br/>
                  </p>
              </div>
          </div>
    )
  }
}
