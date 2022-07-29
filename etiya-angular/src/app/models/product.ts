//json2ts eklentisi aracılığıyla alınca yapıştırıken crtl+alt+v olarak 
//yapıştırılırsa direk değişken değerleriyle alır.
//export default da diyebiliriz. Tek bir bileşene verebiliriz default'u.

export default interface Product{  
	id: number;
	supplierId: number;
	categoryId: number;
	quantityPerUnit: string;
	unitPrice: number;
	unitsInStock: number;
	unitsOnOrder: number;
	reorderLevel: number;
	discontinued: boolean;
	name: string;

}