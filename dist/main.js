"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Main {
    constructor() {
        this.typeGuards();
        this.checkInterface();
        this.lookupTypes();
    }
    static logInputContent(inputId) {
        let input = document.getElementById(inputId);
        if (input)
            console.log(input.value);
    }
    typeGuards() {
        console.log('***** TYPE GUARDS *****');
        const blueDocument = {
            _typeName: 'BlueDocument',
            title: 'This is a blue document',
            content: 'lorem ipsum dolor sit amet...',
            color: 'blue',
            yetAnotherProp: 10
        };
        const whiteDocument = {
            _typeName: 'WhiteDocument',
            title: 'This is a blue document',
            content: 'lorem ipsum dolor sit amet...',
            color: 'white',
            otherProp: 20
        };
        const genericDocument = {
            _typeName: 'BlueDocument',
            title: 'This is a generic document',
            content: 'lorem ipsum dolor sit amet...',
            color: 'blue',
            yetAnotherProp: 10
        };
        const isBlueDocument = (doc) => {
            return doc._typeName === 'BlueDocument';
        };
        const isWhiteDocument = (doc) => {
            return doc._typeName === 'WhiteDocument';
        };
        const logDocument = (doc) => {
            if (isWhiteDocument(doc))
                console.log(doc.otherProp);
            else if (isBlueDocument(doc))
                console.log(doc.yetAnotherProp);
        };
        logDocument(genericDocument);
        console.log('***** /TYPE GUARDS *****');
    }
    checkInterface() {
        console.log('***** CHECK INTERFACE *****');
        const p = {
            name: 'Tizio',
            lastName: 'De Tizis'
        };
        const d = {
            name: 'Buck',
            hasTicks: true
        };
        const isPerson = (object) => {
            return ("lastName" /* LastName */ in object);
        };
        const isDoggo = (object) => {
            return ("hasTicks" /* HasTicks */ in object);
        };
        console.log(`Is this object {${JSON.stringify(p)}} a person? ---> `, isPerson(p) ? 'YES!' : 'NOPE!');
        console.log(`Is this object {${JSON.stringify(d)}} a doggo? ---> `, isDoggo(d) ? 'YES!' : 'NOPE!');
        console.log('***** /CHECK INTERFACE *****');
    }
    lookupTypes() {
        console.log('***** LOOKUP TYPES *****');
        const origin = {
            city: 'Rome',
            state: 'Italy',
            departureFee: 20
        };
        const destination = {
            city: 'Bangkok',
            state: 'Thailand',
            arrivalFee: 10
        };
        console.log('Origin --->', JSON.stringify(origin));
        console.log('Destination --->', JSON.stringify(destination));
        console.log('***** /LOOKUP TYPES *****');
    }
}
const main = new Main();
