# CreatePrivilegeCriteriaRequestGroupsInnerCriteriaItemsInner

# CreatePrivilegeCriteriaRequestGroupsInnerCriteriaItemsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TargetType** |  **Enum** [  "group" ] | The target type of the criteria item. | [optional] 
**Operator** |  **Enum** [  "displayName",    "description",    "value" ] |  | [optional] 
**Values** | **[]String** | The values to evaluate the property against. | [optional] 
**IgnoreCase** | **Boolean** | Whether to ignore case when evaluating the property against the values. | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$CreatePrivilegeCriteriaRequestGroupsInnerCriteriaItemsInner = Initialize-CreatePrivilegeCriteriaRequestGroupsInnerCriteriaItemsInner  -TargetType group `
 -Operator null `
 -Values ["admin","superuser"] `
 -IgnoreCase true
```

- Convert the resource to JSON
```powershell
$CreatePrivilegeCriteriaRequestGroupsInnerCriteriaItemsInner | ConvertTo-JSON
```


[[Back to top]](#) 

