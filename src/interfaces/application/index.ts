import { JobPostingInterface } from 'interfaces/job-posting';
import { EmployeeInterface } from 'interfaces/employee';
import { GetQueryInterface } from 'interfaces';

export interface ApplicationInterface {
  id?: string;
  status: string;
  date_applied: any;
  job_posting_id: string;
  employee_id: string;
  created_at?: any;
  updated_at?: any;

  job_posting?: JobPostingInterface;
  employee?: EmployeeInterface;
  _count?: {};
}

export interface ApplicationGetQueryInterface extends GetQueryInterface {
  id?: string;
  status?: string;
  job_posting_id?: string;
  employee_id?: string;
}
