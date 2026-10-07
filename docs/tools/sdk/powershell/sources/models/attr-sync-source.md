# AttrSyncSource

# AttrSyncSource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "SOURCE" ] | DTO type of target source for attribute synchronization. | [optional] 
**Id** | **String** | ID of target source for attribute synchronization. | [optional] 
**Name** | **String** | Human-readable name of target source for attribute synchronization. | [optional] 

## Examples

- Prepare the resource
```powershell
$AttrSyncSource = Initialize-AttrSyncSource  -Type SOURCE `
 -Id 2c9180835d191a86015d28455b4b232a `
 -Name HR Active Directory
```

- Convert the resource to JSON
```powershell
$AttrSyncSource | ConvertTo-JSON
```


[[Back to top]](#) 

