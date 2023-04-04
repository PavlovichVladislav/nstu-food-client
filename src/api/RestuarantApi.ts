import { IRestuarant } from "../models/restuarant";

class RestuarantApi {
   _baseApi = "https://6325f72270c3fa390f922d7b.mockapi.io/";

   async getRestuarants(campus?: number): Promise<IRestuarant[]> {
      let params = '';

      if (campus) params = `campus=${campus}`;

      const response = await fetch(`${this._baseApi}restuarants?${params}`);
      return response.json();
   }

   // async getByCampus(campus: number): Promise<IRestuarant[]> {
   //    const response = await fetch(`${this._baseApi}restuarants?campus=${campus}`);
   //    return response.json();
   // }
}

export default RestuarantApi;
