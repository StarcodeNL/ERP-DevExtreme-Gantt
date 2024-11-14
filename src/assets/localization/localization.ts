export class Localization {
  private dictionary: any = {
    ENG: {
      'dxGantt-dialogTitle': 'Title',
      'dxGantt-dialogStartTitle': 'Start',
      'dxGantt-dialogEndTitle': 'End',
      'dxGantt-dialogProgressTitle': 'Progress',
      'dxGantt-dialogResourcesTitle': 'Resources',
      'dxGantt-dialogResourceManagerTitle': 'Resource Manager',
      'dxGantt-dialogTaskDetailsTitle': 'Task Details',
      'dxGantt-dialogEditResourceListHint': 'Edit Resource List',
      'dxGantt-dialogEditNoResources': 'No resources',
      'dxGantt-dialogButtonAdd': 'Add',
      'dxGantt-contextMenuNewTask': 'New Task',
      'dxGantt-contextMenuNewSubtask': 'New Subtask',
      'dxGantt-contextMenuDeleteTask': 'Delete Task',
      'dxGantt-contextMenuDeleteDependency': 'Delete Dependency',
      'dxGantt-dialogTaskDeleteConfirmation':
        'Deleting a task also deletes all its dependencies and subtasks. Are you sure you want to delete this task?',
      'dxGantt-dialogDependencyDeleteConfirmation':
        'Are you sure you want to delete the dependency from the task?',
      'dxGantt-dialogResourcesDeleteConfirmation':
        'Deleting a resource also deletes it from tasks to which this resource is assigned. Are you sure you want to delete these resources? Resources: {0}',
      'dxGantt-dialogConstraintCriticalViolationMessage':
        'The task you are attempting to move is linked to a second task by a dependency relation. This change would conflict with dependency rules. How would you like to proceed?',
      'dxGantt-dialogConstraintViolationMessage':
        'The task you are attempting to move is linked to a second task by a dependency relation. How would you like to proceed?',
      'dxGantt-dialogCancelOperationMessage': 'Cancel the operation',
      'dxGantt-dialogDeleteDependencyMessage': 'Delete the dependency',
      'dxGantt-dialogMoveTaskAndKeepDependencyMessage':
        'Move the task and keep the dependency',
      'dxGantt-dialogConstraintCriticalViolationSeveralTasksMessage':
        'The task you are attempting to move is linked to another tasks by dependency relations. This change would conflict with dependency rules. How would you like to proceed?',
      'dxGantt-dialogConstraintViolationSeveralTasksMessage':
        'The task you are attempting to move is linked to another tasks by dependency relations. How would you like to proceed?',
      'dxGantt-dialogDeleteDependenciesMessage':
        'Delete the dependency relations',
      'dxGantt-dialogMoveTaskAndKeepDependenciesMessage':
        'Move the task and keep the dependencies',
      'dxGantt-undo': 'Undo',
      'dxGantt-redo': 'Redo',
      'dxGantt-expandAll': 'Expand All',
      'dxGantt-collapseAll': 'Collapse All',
      'dxGantt-addNewTask': 'Add New Task',
      'dxGantt-deleteSelectedTask': 'Delete Selected Task',
      'dxGantt-zoomIn': 'Zoom In',
      'dxGantt-zoomOut': 'Zoom Out',
      'dxGantt-fullScreen': 'Full Screen',
      'dxGantt-quarter': 'Q{0}',
      'dxGantt-sortingAscendingText': 'Sort Ascending',
      'dxGantt-sortingDescendingText': 'Sort Descending',
      'dxGantt-sortingClearText': 'Clear Sorting',
      'dxGantt-showResources': 'Show Resources',
      'dxGantt-showDependencies': 'Show Dependencies',
      'dxGantt-dialogStartDateValidation': 'Start date must be after {0}',
      'dxGantt-dialogEndDateValidation': 'End date must be after {0}',
    },
    NL: {
      'dxGantt-dialogTitle': 'Titel',
      'dxGantt-dialogStartTitle': 'Start',
      'dxGantt-dialogEndTitle': 'Einde',
      'dxGantt-dialogProgressTitle': 'Voortgang',
      'dxGantt-dialogResourcesTitle': 'Middelen',
      'dxGantt-dialogResourceManagerTitle': 'Middelenbeheer',
      'dxGantt-dialogTaskDetailsTitle': 'Taakdetails',
      'dxGantt-dialogEditResourceListHint': 'Bewerk middelenlijst',
      'dxGantt-dialogEditNoResources': 'Geen middelen',
      'dxGantt-dialogButtonAdd': 'Toevoegen',
      'dxGantt-contextMenuNewTask': 'Nieuwe taak',
      'dxGantt-contextMenuNewSubtask': 'Nieuwe subtaak',
      'dxGantt-contextMenuDeleteTask': 'Taak verwijderen',
      'dxGantt-contextMenuDeleteDependency': 'Afhankelijkheid verwijderen',
      'dxGantt-dialogTaskDeleteConfirmation':
        'Als u een taak verwijdert, worden ook alle afhankelijkheden en subtaken verwijderd. Weet u zeker dat u deze taak wilt verwijderen?',
      'dxGantt-dialogDependencyDeleteConfirmation':
        'Weet u zeker dat u de afhankelijkheid van de taak wilt verwijderen?',
      'dxGantt-dialogResourcesDeleteConfirmation':
        'Als u een middel verwijdert, wordt het ook verwijderd uit taken waaraan dit middel is toegewezen. Weet u zeker dat u deze middelen wilt verwijderen? Middelen: {0}',
      'dxGantt-dialogConstraintCriticalViolationMessage':
        'De taak die u probeert te verplaatsen is gekoppeld aan een tweede taak door een afhankelijkheidsrelatie. Deze wijziging zou in strijd zijn met afhankelijkheidsregels. Hoe wilt u verdergaan?',
      'dxGantt-dialogConstraintViolationMessage':
        'De taak die u probeert te verplaatsen is gekoppeld aan een tweede taak door een afhankelijkheidsrelatie. Hoe wilt u verdergaan?',
      'dxGantt-dialogCancelOperationMessage': 'Annuleer de bewerking',
      'dxGantt-dialogDeleteDependencyMessage': 'Verwijder de afhankelijkheid',
      'dxGantt-dialogMoveTaskAndKeepDependencyMessage':
        'Verplaats de taak en behoud de afhankelijkheid',
      'dxGantt-dialogConstraintCriticalViolationSeveralTasksMessage':
        'De taak die u probeert te verplaatsen is gekoppeld aan andere taken door afhankelijkheidsrelaties. Deze wijziging zou in strijd zijn met afhankelijkheidsregels. Hoe wilt u verdergaan?',
      'dxGantt-dialogConstraintViolationSeveralTasksMessage':
        'De taak die u probeert te verplaatsen is gekoppeld aan andere taken door afhankelijkheidsrelaties. Hoe wilt u verdergaan?',
      'dxGantt-dialogDeleteDependenciesMessage':
        'Verwijder de afhankelijkheidsrelaties',
      'dxGantt-dialogMoveTaskAndKeepDependenciesMessage':
        'Verplaats de taak en behoud de afhankelijkheden',
      'dxGantt-undo': 'Ongedaan maken',
      'dxGantt-redo': 'Opnieuw uitvoeren',
      'dxGantt-expandAll': 'Alles uitvouwen',
      'dxGantt-collapseAll': 'Alles samenvouwen',
      'dxGantt-addNewTask': 'Nieuwe taak toevoegen',
      'dxGantt-deleteSelectedTask': 'Geselecteerde taak verwijderen',
      'dxGantt-zoomIn': 'Inzoomen',
      'dxGantt-zoomOut': 'Uitzoomen',
      'dxGantt-fullScreen': 'Volledig scherm',
      'dxGantt-quarter': 'K{0}',
      'dxGantt-sortingAscendingText': 'Oplopend sorteren',
      'dxGantt-sortingDescendingText': 'Aflopend sorteren',
      'dxGantt-sortingClearText': 'Sortering wissen',
      'dxGantt-showResources': 'Middelen weergeven',
      'dxGantt-showDependencies': 'Afhankelijkheden weergeven',
      'dxGantt-dialogStartDateValidation': 'Startdatum moet na {0} zijn',
      'dxGantt-dialogEndDateValidation': 'Einddatum moet na {0} zijn',
    },
  };

  getDictionary(): any {
    return this.dictionary;
  }
}
