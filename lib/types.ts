export type Role = 'Admin' | 'Editor' | 'Viewer';
export type User = { id: string, name: string, email: string, role: Role };
export type AppState = { user: User | null, boards: any[] };+//ADH