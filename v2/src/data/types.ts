export type UserNote = {
  id: string;
  cityId: string;
  text: string;
  imageUrls: string[];
  authorDisplayName: string;
  authorCountryCode: string;
  publishedAt: string;
};

export type CityId = "beijing-city" | "shanghai-city" | "guangzhou-city" | "shenzhen-city";
