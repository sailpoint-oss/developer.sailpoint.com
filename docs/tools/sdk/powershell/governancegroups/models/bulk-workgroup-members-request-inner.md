# BulkWorkgroupMembersRequestInner

# BulkWorkgroupMembersRequestInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "IDENTITY" ] | Identity's DTO type. | [optional] 
**Id** | **String** | Identity ID. | [optional] 
**Name** | **String** | Identity's display name. | [optional] 

## Examples

- Prepare the resource
```powershell
$BulkWorkgroupMembersRequestInner = Initialize-BulkWorkgroupMembersRequestInner  -Type IDENTITY `
 -Id 2c7180a46faadee4016fb4e018c20642 `
 -Name Michael Michaels
```

- Convert the resource to JSON
```powershell
$BulkWorkgroupMembersRequestInner | ConvertTo-JSON
```


[[Back to top]](#) 

