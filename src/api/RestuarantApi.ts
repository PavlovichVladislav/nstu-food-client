import { IMenuItem } from "../models/menuItem";
import { IRestuarant } from "../models/restuarant";

interface getRestMenuRespone {
   menu: IMenuItem[];
   name: string;
}

class RestuarantApi {
   _baseApi = "https://6325f72270c3fa390f922d7b.mockapi.io/";

   async getRestuarants(
      campus?: number,
      page: number = 1,
      limit: number = 8,
      searchValue?: string
   ): Promise<IRestuarant[]> {
      let params = "";

      if (campus) params = `campus=${campus}`;
      page ? (params += `&page=${page}`) : (params += `&page=1`);
      params += `&limit=${limit}`;
      if (searchValue) params += `&search=${searchValue}`;

      const response = await fetch(`${this._baseApi}restuarants?${params}`);
      return response.json();
   }

   async getRestuarntMenu(id: string, sort: number | undefined): Promise<getRestMenuRespone> {
      let params = "";

      const sortValue = () => {
         switch (sort) {
            case 0:
               return "rate";
            case 1:
               return "price";
            case 2:
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
