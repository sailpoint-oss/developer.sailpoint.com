# PrivilegeCriteriaDTOGroupsInner

# PrivilegeCriteriaDTOGroupsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Operator** |  **Enum** [  "AND",    "OR" ] | The logical operator to apply between criteria items in the group. | [optional] 
**CriteriaItems** | [**[]PrivilegeCriteriaDTOGroupsInnerCriteriaItemsInner**](privilege-criteria-dto-groups-inner-criteria-items-inner) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$PrivilegeCriteriaDTOGroupsInner = Initialize-PrivilegeCriteriaDTOGroupsInner  -Operator AND `
 -CriteriaItems null
```

- Convert the resource to JSON
```powershell
$PrivilegeCriteriaDTOGroupsInner | ConvertTo-JSON
```


[[Back to top]](#) 

