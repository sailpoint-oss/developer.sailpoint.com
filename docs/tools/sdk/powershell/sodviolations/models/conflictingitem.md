# Conflictingitem

# Conflictingitem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The unique identifier of the conflicting access item. | [required]
**Name** | **String** | The display name of the conflicting access item. | [optional] 
**Type** |  **Enum** [  "ENTITLEMENT",    "ACCESS_PROFILE",    "ROLE" ] | The type of access object represented by the conflicting item. | [required]
**SourceRef** | [**Conflictingitemsourceref**](conflictingitemsourceref) |  | [optional] 
**Description** | **String** | Optional human-readable description of the conflicting item. | [optional] 

## Examples

- Prepare the resource
```powershell
$Conflictingitem = Initialize-Conflictingitem  -Id 3e07886555ed43cfb83c85c58d2016e6 `
 -Name Administrator `
 -Type ENTITLEMENT `
 -SourceRef null `
 -Description Grants administrative access to the payroll application.
```

- Convert the resource to JSON
```powershell
$Conflictingitem | ConvertTo-JSON
```


[[Back to top]](#) 

