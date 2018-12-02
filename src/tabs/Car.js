import React from 'react';
import '../styles/TripMethod.css';

function CarTrip(props){
  return(
    <div className="tripMethod">
      <div>
        <h1>Bil</h1>
        <p>
          Nedan följer lite rekommendationer när det kommer till bilresor. Fördelen
          med bil är att du kommer direkt till Kežmarok och har möjlighet att stanna
          längs med vägen. Uppskattade priser är tur och retur för två personer med
          vanlig personbil och utgångsort Göteborg.
        </p>
        <h3>Tips!</h3>
        <p>
          Om man vill köra på motorvägen i Slovakien behöver man en elektronisk
          vinjett. De går att köpa online och då behöver du inte ha något
          klistermärke i fönstret (du registrerar bilens registreringsnummer).
          En vinjett för 10 dagar kostar ca 100 SEK och kan beställa på
          hemsidan <a href="https://eznamka.sk/en" rel="noopener noreferrer" target="_blank">Eznamka</a>.
        </p>
        <p>
          Kolla upp angående fri datatrafik i Europa, det brukar ingå i de flesta
          abonnemang men kan behövas beställas separat med kontantkort. Det är
          jättebra att ha GPS med exempelvis Google Maps under resan då olyckor
          eller ombyggnationer längs vägen kraftigt kan påverka restiden.
        </p>
       </div>
       <CarTripPoland/>
       <CarTripGermany/>
    </div>
  )
}

function CarTripPoland(props){
  return(
    <div>
        <h1>Polen</h1>
        <ul>
        <li>Distans att köra: 30 mil till Trelleborg samt 88 mil från Świnoujście till Kezmarok</li>
        <li>Körtid: ca. 13 timmar</li>
        <li>Uppskattad tid enkel väg: 2 dagar (En övernattning på vägen)</li>
        <li>Trelleborg/Świnoujście: ca. 2000kr (utan hytt).
            Hytt kostar ca. 400kr enkel väg (Dubbla priser över natten)</li>
        <li>Färjeföretag: <a href="https://www.ttline.com/sv/passagerare/">TT Lines</a></li>
        </ul>
        <p>
            Det går att ta färjan mellan Trelleborg och Świnoujście, Polen, och
            sen köra bil ner genom Polen. Det går färjor på dagen, men finns
            även nattfärjor. Färjeresan tar ca. 5,5 timmar på dagen och 7,5
            timmar på natten, så det är möjligt att få en nattvila. Det är
            antagligen billigare att ta en dagfärja och sen stanna en natt
            någonstans längs vägen i Polen. Denna rutt ger också minst körsträcka.
        </p>
    </div>
  )
}

function CarTripGermany(props){
  return(
    <div>
      <h1>Tyskland</h1>
      <ul>
          <li>Distans att köra: ca. 155 mil</li>
          <li>Körtid: ca. 14-16 timmar</li>
          <li>Uppskattad tid enkel väg: 2-3 dagar (Minst en övernattning på vägen)</li>
          <li>(Alt 1) Rödby/Puttgarden (Inkl. Helsingborg/Helsingör): ca. 2400kr</li>
          <li>(Alt 2) Gedser/Rostock (Inkl. Helsingborg/Helsingör): ca. 3000kr</li>
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
          inkluderar resan mellan Helsingborg och Helsingör. <a href="https://www.scandlines.se/">Scandlines</a> trafikerar alla
          rutter som nämndes ovan.<br/>
      </p>

      <h3>Alternativ resväg: Kielfärjan</h3>
      <ul>
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
          man ta det i ett lugnt tempo och njuta av lite
          stopp på vägen. <a href="https://www.stenaline.se/till-tyskland">Stena Line</a> trafikerar
          sträckan mellan Göteborg och Kiel.
      </p>
    </div>
  )
}

export default CarTrip;
