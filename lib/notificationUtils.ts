export function getPermissionErrorMessage() {
  return 'You do not have permission to perform this action.';
}
d Fanction to check if a notification type should be displayed
export function shouldShowNotification(type: string): boolean {
  // You can extend this to add more logic for the future
  return true;
}