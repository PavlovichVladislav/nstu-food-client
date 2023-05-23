import { IMenuItem } from "../models/menuItem";
import { IRestuarant } from "../models/restuarant";
import { serverUrl } from "../utils/constants";

interface getRestMenuRespone {
   count: number;
   restuarantName: string;
   dishes: IMenuItem[];
}

interface getRestsResponse {
   count: number;
   rows: IRestuarant[];
}

class RestuarantApi {
   _baseApi = `${serverUrl}api/`;

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

   async getRestuarntMenu(
      id: string,
      sort: string,
      dishType: string | null,
      search: string,
      page: number = 1,
      limit: number = 8
   ): Promise<getRestMenuRespone> {
      let params = "";

      if (sort) params = `sort=${sort}`;
      if (dishType && dishType !== "all") params += `&dishType=${dishType}`;
      if (search) params += `&search=${search}`;
      page ? (params += `&page=${page}`) : (params += `&page=1`);
      params += `&limit=${limit}`;

      const response = await fetch(`${this._baseApi}menu/${id}?${params}`);
      return response.json();
   }
}

export const restuarantsApi = new RestuarantApi();
