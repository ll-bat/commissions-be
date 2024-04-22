import IProduct from "./product.model";
import IStaffMember from "./staff_member.model";

export default interface IOrder {
    id: number;
    products: IProduct[];
    staff_member: IStaffMember;
    date: Date;
}