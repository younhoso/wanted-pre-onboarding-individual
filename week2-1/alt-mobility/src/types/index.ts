export type DatasList = {
  brand: string;
  name: string;
  segment: string;
  fuelType: string;
  imageUrl: string;
}

export type DatasInsurance = {
  name: string;
  description: string;
}

export type DatasProducts = {
  name: string;
  amount: number;
}

export type Datas = {
  id: string;
  startDate: string;
  createdAt: string;
  amount: number;
  attribute: DatasList;
  insurance: DatasInsurance[];
  additionalProducts: DatasProducts[];
}

export type VehicleSegment = 'C' | 'D' | 'E' | 'SUV';
export type VehicleFuelType = 'gasoline' | 'hybrid' | 'ev';

export type CategoryValues = {
  id: number;
  segment: VehicleSegment | '';
  content: string;
};

export enum DeviceTypes {
  PhonedeviceSm = 'PHONESM',
}