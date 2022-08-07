export interface Order {
	id: number;
	customerId: number;
	orderDate: string;
	requiredDate: string;
	shippedDate: string;
	freight: number;
	shipName: string;
	customerKey: string;
	shipStreet: string;
	shipCity: string;
	shipRegion: string;
	shipPostalCode: number;
	shipCountry: string;
	shipperId: number;
}