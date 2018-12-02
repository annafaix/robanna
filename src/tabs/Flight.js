import React from 'react';
import '../styles/TripMethod.css';

function FlightTrip(props){
  return(
    <div className="tripMethod">
      <div>
        <h1>Flyg</h1>
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
        <h3>Tips!</h3>
        <p>
          Ska du flyga ner så kolla gärna om du känner någon som ska åka ner med
          bil. Det blir avsevärt mycket billigare att enbart ha ett litet
          kabinbagage och inte incheckat bagage, vilket annars nästan är ett
          krav på grund av kostym/klänning mm.
        </p>
        <p>
          Tänk på kostnader som tillkommer för transfer till/från flygplats!
        </p>
      </div>
      <FlightTripPrague/>
      <FlightTripVienna/>
      <FlightTripPoland/>
      <FlightTripBudapest/>
    </div>
  )
}

function FlightTripBudapest(props){
  return(
    <div>
        <h1>Budapest, Ungern</h1>
        <ul>
        <li>Uppskattad tid enkel väg: 2 timmar flyg + 5,5-8 timmar tåg</li>
        <li>Kostnad: Från ca. 1400kr flyg + 700kr tåg</li>
        <li>Flygbolag: <a href="https://wizzair.com/sv-se#/" rel="noopener noreferrer" target="_blank">Wizzair</a></li>
        <li>Tågbolag: <a href="http://elvira.mav-start.hu/" rel="noopener noreferrer" target="_blank">MAV</a></li>
        </ul>
        <h3>Resebeskrivning</h3>
        <p>
          Flyg till Budapest är ofta väldigt billigt om man åker på våren eller
          hösten, vilket dock inte är fallet i nuläget. Detta blir en ganska
          dyr och långsam resväg som dessutom kräver minst ett byte i antingen
          Bratislava eller Kosice.
        </p>
    </div>
  )
}

function FlightTripVienna(props){
  return(
    <div>
        <h1>Wien, Österrike</h1>
        <ul>
        <li>Uppskattad tid enkel väg: 2 timmar flyg + 4 timmar tåg</li>
        <li>Kostnad: Från ca. 2000kr (flyg) + 400kr tåg</li>
        <li>Flygbolag: <a href="https://www.austrian.com/?sc_lang=sv&cc=SE" rel="noopener noreferrer" target="_blank">Austrian</a> eller <a href="https://www.lufthansa.com/se/en/homepage" rel="noopener noreferrer" target="_blank">Lufthansa</a></li>
        <li>Tågbolag: <a href="http://www.slovakrail.sk/en.html" rel="noopener noreferrer" target="_blank">Slovak Rail</a></li>
        </ul>
        <h3>Resebeskrivning</h3>
        <p>
          Det går att flyga från Göteborg till Wien och sedan ta
          flygbuss direkt från Wien till Bratislava. Därifrån går
          sedan tåg direkt till Poprad.
        </p>
    </div>
  )
}

function FlightTripPrague(props){
  return(
    <div>
        <h1>Prag, Tjeckien</h1>
        <ul>
        <li>Uppskattad tid enkel väg: 2 timmar flyg + 6,5 timmar tåg</li>
        <li>Kostnad flyg: Från ca. 800kr flyg + ca. 500kr buss/tåg</li>
        <li>Flygbolag: <a href="https://www.csa.cz/se-en/" rel="noopener noreferrer" target="_blank">Czech Airlines</a> eller <a href="https://www.norwegian.com/se/" rel="noopener noreferrer" target="_blank">Norwegian</a></li>
        <li>Tågbolag: <a href="https://www.regiojet.com/" rel="noopener noreferrer" target="_blank">Regiojet</a></li>
        </ul>
        <h3>Resebeskrivning</h3>
        <p>
          Det går att flyga med Norwegian, Ryanair eller Czech Airlines till
          Prag och sedan ta tåg eller buss därifrån. Resan från
          Prag till Poprad är ca. 6,5 timmar, men det brukar vara
          bra standard och service på både tåg och buss.
        </p>
    </div>
  )
}

function FlightTripPoland(props){
  return(
    <div>
        <h1>Krakow, Polen</h1>
        <ul>
        <li>Uppskattad tid: 2 timmar flyg + 3 timmar bil/taxi</li>
        <li>Uppskattad kostnad: ca. 800kr (flyg) + 1000kr (taxi)</li>
        <li>Flygbolag: <a href="https://www.ryanair.com/se/sv/"  rel="noopener noreferrer" target="_blank">Ryanair</a></li>
        </ul>
        <h3>Resebeskrivning</h3>
        <p>
          Utan tvekan så är detta den snabbaste vägen. Problemet är dock att
          anslutningar till Kezmarok och Poprad är dåliga. Det går att boka taxi
          som kör en hela vägen för ett helt ok pris, ca. 500kr enkel väg. Detta
          pris går att pruta avsevärt om man är flera personer som delar. Ett
          alternativ om man är flera personer är att hyra bil, eller bli
          upphämtad på flygplatsen.
        </p>
    </div>
  )
}

export default FlightTrip;
