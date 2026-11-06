# CompletedApprovalRequestedFor

# CompletedApprovalRequestedFor

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "IDENTITY",    "MACHINE_IDENTITY" ] | Type of the object to which this reference applies | [optional] 
**Id** | **String** | ID of the object to which this reference applies | [optional] 
**Name** | **String** | Human-readable display name of the object to which this reference applies | [optional] 

## Examples

- Prepare the resource
```powershell
$CompletedApprovalRequestedFor = Initialize-CompletedApprovalRequestedFor  -Type IDENTITY `
 -Id 2c9180835d191a86015d28455b4b232a `
 -Name William Wilson
```

- Convert the resource to JSON
```powershell
$CompletedApprovalRequestedFor | ConvertTo-JSON
```


[[Back to top]](#) 

