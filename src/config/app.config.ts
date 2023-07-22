interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Guest'],
  tenantRoles: ['Owner', 'HR Manager', 'Employee', 'Administrator', 'HR Staff'],
  tenantName: 'Organization',
  applicationName: 'Sample Application',
  addOns: ['notifications', 'chat', 'file'],
};
