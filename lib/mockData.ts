import { AppState, Permissions, Role } from './types';

export const defaultPermissions: Record<Role, Permissions> = {
  Admin: {
    // Campanhas
    createProjects: true, editProjects: true, viewAllProjects: true, deleteProjects: true,
    manageTasks: true, moveTasks: true, assignTasks: true, commentTasks: true, viewBudget: true,
    // Meu Kanban
    createBoards: true, deleteBoards: true, manageKanbanTasks: true, moveKanbanTasks: true,
    deleteKanbanTasks: true, linkClientsToTasks: true, manageAttachments: true, viewOthersKanban: true,
    // Clientes
    createClients: true, editClients: true, deleteClients: true, changeClientStatus: true,
    // Time Tracking
    viewOwnTimeReports: true, viewTeamTimeReports: true, createTimeEntries: true,
    deleteTimeEntries: true, exportTimeReports: true,
    // Geral
    receiveNotifications: true, viewDashboardMetrics: true, globalSearch: true,
    // Campos das Tarefas — Meu Kanban
    editTaskStatus: true, editTaskPriority: true, editTaskAssignee: true,
    editTaskClient: true, editTaskDates: true, editTaskDueTime: true,
    editTaskEstimateHours: true, editTaskTags: true, editTaskDeliveryType: true,
    editTaskSubtasks: true, editTaskAttachments: true, editTaskLinks: true,
    // Legacy
    trackTime: true, viewTimeReports: 'all', manageClients: true,
    manageSubtasks: true, manageTags: true, viewGantt: true, exportData: true,
  },
  'Social Media': {
    // Campanhas
    createProjects: false, editProjects: false, viewAllProjects: true, deleteProjects: false,
    manageTasks: true, moveTasks: true, assignTasks: true, commentTasks: true, viewBudget: false,
    // Meu Kanban
    createBoards: true, deleteBoards: false, manageKanbanTasks: true, moveKanbanTasks: true,
    deleteKanbanTasks: false, linkClientsToTasks: true, manageAttachments: true, viewOthersKanban: false,
    // Clientes
    createClients: false, editClients: false, deleteClients: false, changeClientStatus: false,
    // Time Tracking
    viewOwnTimeReports: true, viewTeamTimeReports: false, createTimeEntries: true,
    deleteTimeEntries: false, exportTimeReports: false,
    // Geral
    receiveNotifications: true, viewDashboardMetrics: true, globalSearch: true,
    // Campos das Tarefas — Meu Kanban
    editTaskStatus: true, editTaskPriority: true, editTaskAssignee: true,
    editTaskClient: true, editTaskDates: true, editTaskDueTime: true,
    editTaskEstimateHours: true, editTaskTags: true, editTaskDeliveryType: true,
    editTaskSubtasks: true, editTaskAttachments: true, editTaskLinks: true,
    // Legacy
    trackTime: true, viewTimeReports: 'own', manageClients: false,
    manageSubtasks: true, manageTags: true, viewGantt: true, exportData: false,
  },
  Designer: {
    // Campanhas
    createProjects: false, editProjects: false, viewAllProjects: false, deleteProjects: false,
    manageTasks: true, moveTasks: true, assignTasks: false, commentTasks: true, viewBudget: false,
    // Meu Kanban
    createBoards: true, deleteBoards: false, manageKanbanTasks: true, moveKanbanTasks: true,
    deleteKanbanTasks: false, linkClientsToTasks: false, manageAttachments: true, viewOthersKanban: false,
    // Clientes
    createClients: false, editClients: false, deleteClients: false, changeClientStatus: false,
    // Time Tracking
    viewOwnTimeReports: true, viewTeamTimeReports: false, createTimeEntries: true,
    deleteTimeEntries: false, exportTimeReports: false,
    // Geral
    receiveNotifications: true, viewDashboardMetrics: true, globalSearch: true,
    // Campos das Tarefas — Meu Kanban
    editTaskStatus: true, editTaskPriority: false, editTaskAssignee: false,
    editTaskClient: false, editTaskDates: false, editTaskDueTime: false,
    editTaskEstimateHours: false, editTaskTags: false, editTaskDeliveryType: false,
    editTaskSubtasks: false, editTaskAttachments: true, editTaskLinks: false,
    // Legacy
    trackTime: true, viewTimeReports: 'own', manageClients: false,
    manageSubtasks: false, manageTags: false, viewGantt: false, exportData: false,
  }
} += /*