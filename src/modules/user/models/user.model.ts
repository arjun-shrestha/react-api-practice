
export interface UserModel {
  TenantId?: string;
  UserId: string;
  UserName?: any;
  FirstName: string;
  LastName: string;
  Workgroups?: any;
  Role?: any;
  Email: string;
  AzureAdUserObjectId: string;
  IsEnabled: boolean;
}
