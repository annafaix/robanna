import React, {Component} from 'react'
import '../styles/App.css';

export default class About extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div className="tab">
        <h1>Hur allt började</h1>
        <p>
          Jo, det frågar vi oss också! Var det kanske när Robert bestämde sig att hitta en "Anna" redan när har var liten eftersom han ville att Mikaela skulle heta så? Eller började det när Anna bestämde sig att plugga svenska utan att ens besöka Sverige innan?
        </p>
         <p>
          Vår första möte var tack vare en av Annas kompisar, Jana. Den 4:e februari 2013 behövde Anna och hennes kompis Kristina stanna i Göteborg för en natt, deras flyg från Göteborg gick jättetidigt. Robert var en erfaren couchsurfare som tidigare hostat Jana och Anna fick en lapp med Roberts adress och telefonnummer på. Jana sa skämtsamt "jag har hittat en brudgum till dig Anna!", Anna var inte övertygad vid det tillfället...
          Efter detta första möte så höll vi kontakten via facebook och Skype.
          </p>
          <p>
          Några månader senare har Robert med andra kompisar besökt Brno, där Anna bodde. Efter det hade Anna möjligheten att besöka Sverige tillsammans med en teatergrupp som skulle till Lidköping. Robert tog tillfället i akt och med hjälp av Annas kompisar iscensattes en överraskning.
          Det "enklaste" sätt för oss att träffa lite då och då var i den mystiga Budapest. Robert tog billigt flyg från Göteborg och Anna tog tåget från Brno. Sommaren 2013 åkte vi tillsammans på semester till Kroatien, därefter kom Robert till Slovakien och träffade Annas familj... (och blev direkt omtyckt av hennes pappa :) )
          Sommaren 2014 gjorde vi en stor resa runt Europa som avslutades i Göteborg, men för oss var det början för ett liv tillsammans. Att göra det enklare för posten, hitta rätt osv, tänkte vi ta samma efternamn...det är därför vi gifter oss, självklart bli det NYFAIX! Robert har även börjat lära sig slovakiska så att han förstår alla Annas skämt bättre, vi får väl se hur det går!
        </p>
      </div>
    )
  }
}
