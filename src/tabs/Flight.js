import React,  {Component} from 'react';
import '../styles/TripMethod.css';

function FlightTrip(props){
  const SelectedFlightTrip = props.SelectedFlightTrip;
  let FlightTripMethod = null;

  if(SelectedFlightTrip === "budapest"){
    FlightTripMethod = <FlightTripBudapest/>
  }else if(SelectedFlightTrip === "vienna"){
    FlightTripMethod = <FlightTripVienna/>
  }else if(SelectedFlightTrip === "prague"){
    FlightTripMethod = <FlightTripPrague/>
  }else if(SelectedFlightTrip === "krakow"){
    FlightTripMethod = <FlightTripPoland/>
  }

  return(
    <div className="tripMethod">
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

        {FlightTripMethod}

      </div>
  )
}

function FlightTripBudapest(props){
  return(
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
  )
}

function FlightTripVienna(props){
  return(
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
  )
}

function FlightTripPrague(props){
  return(
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
  )
}

function FlightTripPoland(props){
  return(
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
  )
}

export default FlightTrip;
