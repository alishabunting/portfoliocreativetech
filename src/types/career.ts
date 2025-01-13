export interface Role {
  company: string;
  title: string;
  duration: string;
  location: string;
  responsibilities: string[];
}

export interface CareerRoleData {
  role: Role;
  clients: string[];
  tech: string[];
  achievements: string[];
} 