# WorkflowTriggerAttributes

# WorkflowTriggerAttributes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The unique ID of the trigger | [required]
**VarFilter** | **String** | JSON path expression that will limit which events the trigger will fire on. When the trigger's `mode` is `basic`, this must match the expression compiled from `filterDefinition`. | [optional] 
**FilterDefinition** | [**EventAttributesFilterDefinition**](event-attributes-filter-definition) |  | [optional] 
**Description** | **String** | Additional context about the external trigger | [optional] 
**AttributeToFilter** | **String** | For the `sp:form-submitted` trigger, the name of the form element to filter on. Use it with `operatorValue` and `attributeValue`. For other event triggers this is a legacy field from the earlier trigger filter picker; use `filterDefinition` with `mode` set to `basic` instead. Create and update requests that set this field for the `idn:identity-attributes-changed` or `idn:identity-created` trigger are rejected. | [optional] 
**OperatorValue** | **String** | For the `sp:form-submitted` trigger, the operator that compares the `attributeToFilter` form element with `attributeValue`, such as `StringEquals`, `StringContains`, `StringStartsWith`, `NumericGreaterThan`, `BooleanEquals` or `ArrayAnyOf`. Create and update requests that set this field for the `idn:identity-created` trigger are rejected. | [optional] 
**AttributeValue** | **String** | For the `sp:form-submitted` trigger, the value the `attributeToFilter` form element is compared with. For `ArrayAnyOf`, use a list such as `['HR', 'IT']`. Create and update requests that set this field for the `idn:identity-created` trigger are rejected. | [optional] 
**FormDefinitionId** | **String** | For the `sp:form-submitted` trigger, the ID of the form whose submission starts the workflow. Required when `filter.$` is not set. When `filter.$` is not set, the trigger filter is built from this ID, narrowed by `attributeToFilter`, `operatorValue` and `attributeValue` when all three are set. | [optional] 
**Name** | **String** | A unique name for the external trigger | [optional] 
**ClientId** | **String** | OAuth Client ID to authenticate with this trigger | [optional] 
**Url** | **String** | URL to invoke this workflow | [optional] 
**Frequency** |  **Enum** [  "daily",    "weekly",    "monthly",    "yearly",    "cronSchedule" ] | Frequency of execution | [required]
**TimeZone** | **String** | Time zone identifier | [optional] 
**CronString** | **String** | A valid CRON expression | [optional] 
**WeeklyDays** | **[]String** | Scheduled days of the week for execution | [optional] 
**WeeklyTimes** | **[]String** | Scheduled execution times | [optional] 
**YearlyTimes** | **[]String** | Scheduled execution times | [optional] 

## Examples

- Prepare the resource
```powershell
$WorkflowTriggerAttributes = Initialize-WorkflowTriggerAttributes  -Id idn:identity-attributes-changed `
 -VarFilter $.changes[?(@.attribute == "manager")] `
 -FilterDefinition null `
 -Description Run a search and notify the results `
 -AttributeToFilter department `
 -OperatorValue StringEquals `
 -AttributeValue IT `
 -FormDefinitionId 49841cb8-00a5-4fbd-9888-8bbb28d48331 `
 -Name search-and-notify `
 -ClientId 87e239b2-b85b-4bde-b9a7-55bf304ddcdc `
 -Url https://example-tenant.api.identitynow.com/workflows/v1/execute/external/c79e0079-562c-4df5-aa73-60a9e25c916d `
 -Frequency daily `
 -TimeZone America/Chicago `
 -CronString 0 9 * * 1 `
 -WeeklyDays Monday `
 -WeeklyTimes Monday `
 -YearlyTimes 1969-12-31T09:00:00.000Z
```

- Convert the resource to JSON
```powershell
$WorkflowTriggerAttributes | ConvertTo-JSON
```


[[Back to top]](#) 

