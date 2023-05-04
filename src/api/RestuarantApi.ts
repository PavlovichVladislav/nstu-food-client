import { IMenuItem } from "../models/menuItem";
import { IRestuarant } from "../models/restuarant";

interface getRestMenuRespone {
   menu: IMenuItem[];
   name: string;
}

interface getRestsResponse {
   count: number;
   rows: IRestuarant[];
}

class RestuarantApi {
   _baseApi = "http://localhost:7000/api/";

   async getRestuarants(
      campus?: number,
      page: number = 1,
      limit: number = 8,
      searchValue?: string
   ): Promise<getRestsResponse> {
      let params = "";

      if (campus) params = `campus=${campus}`;
      page ? (params += `&page=${page}`) : (params += `&page=1`);
      params += `&limit=${limit}`;
      if (searchValue) params += `&search=${searchValue}`;

      const response = await fetch(`${this._baseApi}restuarant?${params}`);
      return response.json();
   }

   async getRestuarntMenu(id: string, sort: string): Promise<getRestMenuRespone> {
      let params = "";

      const sortValue = () => {
         switch (sort) {
            case 'rating':
               return "rate";
            case 'priceAscending':
               return "price";
            case 'priceDescending':
               return "price";
            default:
               break;
         }
      };

      if (sort) params = `sortBy=${sortValue()}`;

      const response = await fetch(`${this._baseApi}restuarant_menu/${id}?${params}`);
      return response.json();
   }
}

export default RestuarantApi;
