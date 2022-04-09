// TYPE GUARDS
export interface WhiteDocument {
  _typeName: 'WhiteDocument';
  title: string;
  content: string;
  color: 'white';
  otherProp: number;
};

export interface BlueDocument {
  _typeName: 'BlueDocument';
  title: string;
  content: string;
  color: 'blue';
  yetAnotherProp: number;
};

export type Document = BlueDocument | WhiteDocument;

// ENUMS FROM WHICH WE GET PROPERTY NAMES 
export const enum PersonProps {
  Name = 'name',
  LastName = 'lastName'
};

export const enum DoggoProps {
  Name = 'name',
  HasTicks = 'hasTicks'
};

export const enum RouteProps {
  Origin = 'origin',
  Destination = 'destination'
};

// CHECK INTERFACE
export interface Person {
  [PersonProps.Name]: string;
  [PersonProps.LastName]: string;
};

export interface Doggo {
  [DoggoProps.Name]: string;
  [DoggoProps.HasTicks]: boolean;
};

// LOOKUP TYPES
export type Route = {
  [RouteProps.Origin]: {
    city: string;
    state: string;
    departureFee: number;
  };
  [RouteProps.Destination]: {
    city: string;
    state: string;
    arrivalFee: number;
  };
};

export type Origin = Route[RouteProps.Origin];
export type Destination = Route[RouteProps.Destination];



