import React, {Component} from 'react'
import '../styles/App.css';
import Gallery from "./Gallery.js"

export default class About extends Component {
/*
  constructor(props) {
    super(props);
  }
*/
  render(){
    return(
      <div className="tab">
        <h1>Hur allt började</h1>
        <p>
          Jo, det frågar vi oss också! Var det kanske när Robert bestämde sig
          att hitta en "Anna" redan när har var liten eftersom han ville att
          Mikaela skulle heta så? Eller började det när Anna bestämde sig att
          plugga svenska utan att ens besöka Sverige innan?
        </p>
        <p>
          Vårt första möte var tack vare en av Annas kompisar, Jana. Den
          4:e februari 2013 behövde Anna och hennes kompis Kristina stanna i
          Göteborg för en natt, deras flyg från Göteborg gick jättetidigt dagen
          efter. Robert var en erfaren couchsurfare som tidigare hostat Jana
          och Anna fick en lapp med Roberts adress och telefonnummer på. Jana sa
          skämtsamt "jag har hittat en brudgum till dig Anna!", Anna var inte
          övertygad vid det tillfället men gick ändå med på att stanna för
          den natten... Detta första möte var dock början på något som vi inte 
          kunde föreställa oss då!
        </p>
        <p>
          Några månader senare besökte Robert och några kompisar Brno där
          Anna bodde eftersom han hostat många personer från just Brno. Vem
          vill inte spendera en långhelg i Tjeckien? Robert och en kompis Kim
          bodde hos Anna och hennes kompisar i en lägenhet och det blev en
          långhelg med många roliga händelser. Vi umgicks allt mer och besöket
          avslutades med en av de första pussarna.
        </p>
        <p>
          Lite senare på våren hade Anna möjligheten att besöka Sverige
          tillsammans med hennes teatergrupp som skulle till Lidköping. Robert
          tog tillfället i akt att med hjälp av Annas kompisar iscensätta
          en överraskning och tog tåget till Lidköping för att stanna med
          dem i ett par dagar. Det var en lyckad överraskning och vi hade 
          en väldigt trevlig tid tillsammans. Direkt efter så åkte Anna med Robert
          hem till Göteborg och stannade i några dagar extra. Det var då vi
          bestämde oss för att försöka bli ett par, trots det besvärliga
          avståndet.
        </p>
        <p>
          Det "enklaste" sättet för oss att träffas lite då och då var i den
          mysiga Budapest. Robert tog billigt flyg från Göteborg och Anna tog
          tåget från Brno. En rolig detalj var att det tog ungefär lika lång
          tid att komma dit för oss båda. Att träffas i Budapest var en
          tradition som vi höll fasta på under hela tiden Anna bodde i
          Tjeckien.
        </p>
        <p>
          Samma sommar åkte vi till Kroatien på en gemensam semester.
          Lite senare, besökte vi varandras familjer för första gången och året avslutades 
          genom att vi firade jul i Slovakien.
        </p>
        <p>
          Sommaren 2014 åkte vi på en galen Eurotrip med fem andra galningar. 
          Totalt var vi borta i ungefär en månad och vi besökte bland annat
          Annas föräldrar i Slovakien och bodde hemma hos dem i några dagar.
          Resan avslutades i Göteborg för både Robert och Anna då vi flyttade
          ihop.
        </p>
        <p>
          För oss var det början på ett liv tillsammans.
          </p>
        <Gallery/>
      </div>
    )
  }
}
