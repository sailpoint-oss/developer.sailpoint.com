# ListWorkgroupMembersV1200ResponseInner

# ListWorkgroupMembersV1200ResponseInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "IDENTITY" ] | Workgroup member identity DTO type. | [optional] 
**Id** | **String** | Workgroup member identity ID. | [optional] 
**Name** | **String** | Workgroup member identity display name. | [optional] 
**Email** | **String** | Workgroup member identity email. | [optional] 

## Examples

- Prepare the resource
```powershell
$ListWorkgroupMembersV1200ResponseInner = Initialize-ListWorkgroupMembersV1200ResponseInner  -Type IDENTITY `
 -Id 2c7180a46faadee4016fb4e018c20642 `
 -Name Michael Michaels `
 -Email michael.michaels@sailpoint.com
```

- Convert the resource to JSON
```powershell
$ListWorkgroupMembersV1200ResponseInner | ConvertTo-JSON
```


[[Back to top]](#) 

