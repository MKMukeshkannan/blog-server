
export interface Post {
  slug: string;
  title: string;
  date: {
      date: number;
      month: number;
      year: number;
  };
  category: string[];
  description: string;
  last_modified: string;
}


export const BASE_URL = "http://www.mukeshkannan.com";
