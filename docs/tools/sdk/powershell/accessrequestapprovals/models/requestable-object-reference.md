# RequestableObjectReference

# RequestableObjectReference

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Id of the object. | [optional] 
**Name** | **String** | Name of the object. | [optional] 
**Description** | **String** | Description of the object. | [optional] 
**Type** |  **Enum** [  "ACCESS_PROFILE",    "ROLE",    "ENTITLEMENT" ] | Type of the object. | [optional] 

## Examples

- Prepare the resource
```powershell
$RequestableObjectReference = Initialize-RequestableObjectReference  -Id 2c9180835d2e5168015d32f890ca1581 `
 -Name Applied Research Access `
 -Description Access to research information, lab results, and schematics `
 -Type ROLE
```

- Convert the resource to JSON
```powershell
$RequestableObjectReference | ConvertTo-JSON
```


[[Back to top]](#) 

