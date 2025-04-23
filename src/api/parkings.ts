import Axios from "axios";

interface ParkingResponse {
    total_count: number;
    results: Parking[];
}

export interface Parking {
    name: string;
totalcapacity: number;
availablecapacity: number;
occupation: number;
description: string;
id: string;
location: {
    lon: number ;
    lat: number;
};
}


const BASE_URL = "https://data.stad.gent/api/explore/v2.1/catalog/datasets/bezetting-parkeergarages-real-time/records"


export const fetchParkings = () => Axios.get<ParkingResponse>(BASE_URL);
