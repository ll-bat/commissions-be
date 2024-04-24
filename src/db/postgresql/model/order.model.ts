import IProduct from './product.model';
import IStaffMember from './staffMember.model';

export default interface IOrder {
  id: number;
  products: IProduct[];
  staffMember: IStaffMember;
  date: Date;
}
