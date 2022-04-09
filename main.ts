import { BlueDocument, WhiteDocument, Document, Person, Doggo, PersonProps, DoggoProps, Origin, Destination } from "models/models";

class Main {

  constructor() {
    this.typeGuards();
    this.checkInterface();
    this.lookupTypes();
  }

  public static logInputContent(inputId: string): void {
    let input: HTMLInputElement | null = document.getElementById(inputId) as HTMLInputElement;
  
    if (input) 
      console.log(input.value);
  }

  private typeGuards(): void {

    console.log('***** TYPE GUARDS *****');

    const blueDocument: BlueDocument = {
      _typeName: 'BlueDocument',
      title: 'This is a blue document',
      content: 'lorem ipsum dolor sit amet...',
      color: 'blue',
      yetAnotherProp: 10
    };

    const whiteDocument: WhiteDocument = {
      _typeName: 'WhiteDocument',
      title: 'This is a blue document',
      content: 'lorem ipsum dolor sit amet...',
      color: 'white',
      otherProp: 20
    };

    const genericDocument: Document = {
      _typeName: 'BlueDocument',
      title: 'This is a generic document',
      content: 'lorem ipsum dolor sit amet...',
      color: 'blue',
      yetAnotherProp: 10
    };

    const isBlueDocument = (doc: Document): doc is BlueDocument => {
      return doc._typeName === 'BlueDocument';
    };

    const isWhiteDocument = (doc: Document): doc is WhiteDocument => {
      return doc._typeName === 'WhiteDocument';
    };

    const logDocument = (doc: Document): void => {
      if (isWhiteDocument(doc)) 
        console.log(doc.otherProp)
      else if (isBlueDocument(doc))
        console.log(doc.yetAnotherProp)
    };

    logDocument(genericDocument);

    console.log('***** /TYPE GUARDS *****');
  }

  private checkInterface(): void {

    console.log('***** CHECK INTERFACE *****');

    const p: Person = {
      name: 'Tizio',
      lastName: 'De Tizis'
    };

    const d: Doggo = {
      name: 'Buck',
      hasTicks: true
    };

    const isPerson = (object: any): object is Person => {
      return (PersonProps.LastName in object);
    }

    const isDoggo = (object: any): object is Doggo => {
      return (DoggoProps.HasTicks in object);
    }

    console.log(`Is this object {${JSON.stringify(p)}} a person? ---> `, isPerson(p) ? 'YES!' : 'NOPE!');
    console.log(`Is this object {${JSON.stringify(d)}} a doggo? ---> `, isDoggo(d) ? 'YES!' : 'NOPE!');

    console.log('***** /CHECK INTERFACE *****');
  }

  private lookupTypes(): void {

    console.log('***** LOOKUP TYPES *****');

    const origin: Origin = {
      city: 'Rome',
      state: 'Italy',
      departureFee: 20
    };

    const destination: Destination = {
      city: 'Bangkok',
      state: 'Thailand',
      arrivalFee: 10
    };

    console.log('Origin --->', JSON.stringify(origin))
    console.log('Destination --->', JSON.stringify(destination))

    console.log('***** /LOOKUP TYPES *****');
  }
  
}

const main: Main = new Main();
