// note: to update run -> npm run tools:update-dto-versions
export type DTOName = 'Activity'
  | 'ActivityCode'
  | 'ActivityComposedCode'
  | 'ActivityFeedback'
  | 'ActivitySubType'
  | 'ActivityTemplate'
  | 'ActivityTopic'
  | 'Address'
  | 'Alert'
  | 'Approval'
  | 'Attachment'
  | 'Batch'
  | 'BatchQuantity'
  | 'BlanketOrder'
  | 'Branch'
  | 'BusinessPartner'
  | 'BusinessPartnerGroup'
  | 'BusinessProcessStepDefinition'
  | 'Category'
  | 'CheckIn'
  | 'ChecklistAssignment'
  | 'ChecklistCategory'
  | 'ChecklistInstance'
  | 'ChecklistInstanceElement'
  | 'ChecklistTag'
  | 'ChecklistTemplate'
  | 'ChecklistVariable'
  | 'Comment'
  | 'CompanyInfo'
  | 'CompanySettings'
  | 'Competitor'
  | 'CompetitorProduct'
  | 'Configuration'
  | 'Consent'
  | 'Contact'
  | 'Country'
  | 'County'
  | 'CreditNote'
  | 'CrowdExecutionRecord'
  | 'Currency'
  | 'CustomRule'
  | 'Defect'
  | 'DocumentDiscount'
  | 'DocumentDraft'
  | 'EmployeeBranch'
  | 'EmployeeDepartment'
  | 'EmployeePosition'
  | 'Enumeration'
  | 'Equipment'
  | 'EquipmentSubType'
  | 'ErpError'
  | 'Expense'
  | 'ExpenseType'
  | 'FieldConfiguration'
  | 'File'
  | 'FileRef'
  | 'FileRevision'
  | 'Filter'
  | 'Function'
  | 'GenericOrder'
  | 'Group'
  | 'Icon'
  | 'Incident'
  | 'Industry'
  | 'InformationSource'
  | 'Inventory'
  | 'Invoice'
  | 'Item'
  | 'ItemCategory'
  | 'ItemGroup'
  | 'ItemPriceListAssignment'
  | 'ItemProposal'
  | 'ItemReturnReason'
  | 'ItemType'
  | 'ItemWarehouseLevel'
  | 'LevelOfInterest'
  | 'LocationNumberSeries'
  | 'Material'
  | 'Mileage'
  | 'MileageType'
  | 'Notification'
  | 'NowKpi'
  | 'NowPlugin'
  | 'NowPluginInstance'
  | 'NowPluginInstanceSet'
  | 'NowPluginVersion'
  | 'NowShortUrl'
  | 'ObjectGroup'
  | 'ObjectRating'
  | 'PaymentTerm'
  | 'PaymentType'
  | 'Person'
  | 'PersonReservation'
  | 'PersonReservationType'
  | 'PersonWorkTimePattern'
  | 'PlanningScenario'
  | 'Plugin'
  | 'PriceList'
  | 'ProductionOrder'
  | 'ProfileObject'
  | 'Project'
  | 'ProjectMemberTimeFrame'
  | 'ProjectPhase'
  | 'ProjectShift'
  | 'PropertyMeta'
  | 'PurchaseOrder'
  | 'Reason'
  | 'Region'
  | 'ReportData'
  | 'ReportTemplate'
  | 'Requirement'
  | 'ReservedMaterial'
  | 'SalesOpportunity'
  | 'SalesOrder'
  | 'SalesQuotation'
  | 'SalesStage'
  | 'ScreenConfiguration'
  | 'Sequence'
  | 'SerialNumber'
  | 'ServiceAssignment'
  | 'ServiceAssignmentStatus'
  | 'ServiceAssignmentStatusDefinition'
  | 'ServiceCall'
  | 'ServiceCallOrigin'
  | 'ServiceCallProblemType'
  | 'ServiceCallStatus'
  | 'ServiceCallType'
  | 'ServiceCheckout'
  | 'ServiceContract'
  | 'ServiceContractEquipment'
  | 'ServiceErrorCode'
  | 'ServiceErrorCodeItem'
  | 'Shift'
  | 'ShiftTechnician'
  | 'ShippingType'
  | 'Signature'
  | 'Skill'
  | 'State'
  | 'StockTransfer'
  | 'SyncObjectChangelog'
  | 'Tag'
  | 'Tax'
  | 'Team'
  | 'TeamTimeFrame'
  | 'TimeEffort'
  | 'TimeProject'
  | 'TimeSubTask'
  | 'TimeTask'
  | 'ToolAssignment'
  | 'Translation'
  | 'TransportCost'
  | 'UdfMeta'
  | 'UdfMetaGroup'
  | 'UdoMeta'
  | 'UdoValue'
  | 'UnifiedPerson'
  | 'Usage'
  | 'UsedTool'
  | 'UserSettings'
  | 'UserSyncConfirmation'
  | 'VisitorReport'
  | 'Warehouse'
  | 'Widget'
  | 'WorkTime'
  | 'WorkTimePattern'
  | 'WorkTimeTask'

export type DTOModels = Partial<{
  id: undefined | null | string;
  lastChanged: undefined | null | number;
  externalId: undefined | null | string;
} & Object>;
