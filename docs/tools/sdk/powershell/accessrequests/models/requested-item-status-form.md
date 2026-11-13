# RequestedItemStatusForm

# RequestedItemStatusForm

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FormDefinitionId** | **String** | ID of the form definition that was completed for this item. | [optional] 
**FormInstanceId** | **String** | ID of the completed form instance. | [optional] 
**FormData** | **map[string]AnyType** | Key-value pairs (form field technical name to value) from the completed form instance. | [optional] 
**FormElements** | **[]System.Collections.Hashtable** | Optional form element definitions when present. Shape follows the form instance payload. | [optional] 
**FormConditions** | **[]System.Collections.Hashtable** | Optional conditional display rules when present. Shape follows the form instance payload; do not depend on a fixed condition schema in this API. | [optional] 
**FormInstanceInputs** | **map[string]AnyType** | Optional inputs passed into the form instance when present. Copied from the form instance payload as-is. | [optional] 

## Examples

- Prepare the resource
```powershell
$RequestedItemStatusForm = Initialize-RequestedItemStatusForm  -FormDefinitionId b2c1808f-77f5-4a3a-9f3a-1d2e3f4a5b6c `
 -FormInstanceId 9f3a1d2e-3f4a-5b6c-7d8e-9f0a1b2c3d4e `
 -FormData {department=Engineering, notifyRequester=true, platforms=[AWS, GCP]} `
 -FormElements [{id=00000000-0000-0000-0000-000000000000, elementType=TEXT}] `
 -FormConditions [{ruleOperator=AND, rules=[], effects=[]}] `
 -FormInstanceInputs {department=Engineering}
```

- Convert the resource to JSON
```powershell
$RequestedItemStatusForm | ConvertTo-JSON
```


[[Back to top]](#) 

