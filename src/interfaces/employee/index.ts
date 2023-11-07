import { ApplicationInterface } from 'interfaces/application';
import { PerformanceReviewInterface } from 'interfaces/performance-review';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface EmployeeInterface {
  id?: string;
  employee_id: string;
  position: string;
  department: string;
  date_hired: any;
  salary: number;
  user_id: string;
  created_at?: any;
  updated_at?: any;
  application?: ApplicationInterface[];
  performance_review?: PerformanceReviewInterface[];
  user?: UserInterface;
  _count?: {
    application?: number;
    performance_review?: number;
  };
}

export interface EmployeeGetQueryInterface extends GetQueryInterface {
  id?: string;
  employee_id?: string;
  position?: string;
  department?: string;
  user_id?: string;
}
