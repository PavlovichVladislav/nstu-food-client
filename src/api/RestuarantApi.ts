import { IRestuarant } from "../models/restuarant";

class RestuarantApi {
   _baseApi = "https://6325f72270c3fa390f922d7b.mockapi.io/";

   async getAll(): Promise<IRestuarant[]> {
      const response = await fetch(`${this._baseApi}restuarants`);
      return response.json();
   }
}

export default RestuarantApi;
