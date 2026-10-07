# AccessItemRequestedFor

# AccessItemRequestedFor

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "IDENTITY",    "MACHINE_IDENTITY" ] | DTO type of identity the access item is requested for. `IDENTITY` for human identities. `MACHINE_IDENTITY` for machine identities. When `MACHINE_IDENTITY`, `id` is the machine identity id.  | [optional] 
**Id** | **String** | ID of identity the access item is requested for. | [optional] 
**Name** | **String** | Human-readable display name of identity the access item is requested for. | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessItemRequestedFor = Initialize-AccessItemRequestedFor  -Type IDENTITY `
 -Id 2c4180a46faadee4016fb4e018c20626 `
 -Name Robert Robinson
```

- Convert the resource to JSON
```powershell
$AccessItemRequestedFor | ConvertTo-JSON
```


[[Back to top]](#) 

