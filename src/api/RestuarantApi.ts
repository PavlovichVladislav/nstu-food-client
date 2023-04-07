import { IMenuItem } from "../models/menuItem";
import { IRestuarant } from "../models/restuarant";

interface getRestMenuRespone {
   menu: IMenuItem[];
   name: string;
}

class RestuarantApi {
   _baseApi = "https://6325f72270c3fa390f922d7b.mockapi.io/";

   async getRestuarants(campus?: number): Promise<IRestuarant[]> {
      let params = "";

      if (campus) params = `campus=${campus}`;

      const response = await fetch(`${this._baseApi}restuarants?${params}`);
      return response.json();
   }

   async getRestuarntMenu(id: string): Promise<getRestMenuRespone> {
      const response = await fetch(`${this._baseApi}restuarant_menu/${id}`);
      return response.json();
   }
}

export default RestuarantApi;
