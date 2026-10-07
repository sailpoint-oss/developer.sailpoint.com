# PrivilegeCriteriaDTOGroupsInnerCriteriaItemsInner

# PrivilegeCriteriaDTOGroupsInnerCriteriaItemsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TargetType** |  **Enum** [  "group" ] | The target type for the criteria item. | [optional] 
**Operator** |  **Enum** [  "IN",    "EQUALS",    "NOT_EQUALS",    "CONTAINS",    "DOES_NOT_CONTAIN",    "STARTS_WITH",    "ENDS_WITH" ] | The operator to apply to the property and values. | [optional] 
**Property** |  **Enum** [  "displayName",    "description",    "value" ] |  | [optional] 
**Values** | **[]String** | The values to evaluate the property against. | [optional] 
**IgnoreCase** | **Boolean** | Whether to ignore case when evaluating the property against the values. | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$PrivilegeCriteriaDTOGroupsInnerCriteriaItemsInner = Initialize-PrivilegeCriteriaDTOGroupsInnerCriteriaItemsInner  -TargetType group `
 -Operator IN `
 -Property null `
 -Values ["admin","superuser"] `
 -IgnoreCase true
```

- Convert the resource to JSON
```powershell
$PrivilegeCriteriaDTOGroupsInnerCriteriaItemsInner | ConvertTo-JSON
```


[[Back to top]](#) 

