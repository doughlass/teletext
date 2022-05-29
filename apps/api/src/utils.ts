export const api: string = `https://soccer.sportmonks.com/api/v2.0/`;
export const env: string = process.env.NODE_ENV;
export const formatYmd: any = (date) => date.toISOString().slice(0, 10);
