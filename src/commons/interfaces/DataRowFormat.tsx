export interface dataRowFormat {
  name: string;
  calories: number;
  fat: number;
  carbs: number;
  protein: number;
}

export interface dataRowFormat{
    data : dataRowFormat[]
  }
  
export interface dataApi {
  name: string;
  latin_name: string;
  animal_type: string;
  active_time: string;
  length_min: string;
  length_max: string;
  weight_min: string;
  weight_max: string;
  lifespan: string;
  habitat: string;
  diet: string;
  geo_range: string;
  image_link: string;
  id: string;
}
