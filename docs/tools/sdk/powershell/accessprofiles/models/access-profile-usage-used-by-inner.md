# AccessProfileUsageUsedByInner

# AccessProfileUsageUsedByInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "ROLE" ] | DTO type of role using the access profile. | [optional] 
**Id** | **String** | ID of role using the access profile. | [optional] 
**Name** | **String** | Display name of role using the access profile. | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessProfileUsageUsedByInner = Initialize-AccessProfileUsageUsedByInner  -Type ROLE `
 -Id 2c8180857a9b3da0017aa03418480f9d `
 -Name Manager Role
```

- Convert the resource to JSON
```powershell
$AccessProfileUsageUsedByInner | ConvertTo-JSON
```


[[Back to top]](#) 

