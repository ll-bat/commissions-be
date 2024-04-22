import ICategory from "./cateogry.model";

export default interface IProduct {
    id: number;
    name: string;
    category: ICategory,
    price: number;
    commissionPercent: number | null;
}