import { Role, Permissions } from './types';
import { defaultPermissions } from './mockData';

export function getRolePermissions(role: Role): Permissions {
  return defaultPermissions[role] || {};
}
export function checkPermission(permissions: Permissions, key: keyof Permissions): boolean {
  return permissions[key] === true;
}
}