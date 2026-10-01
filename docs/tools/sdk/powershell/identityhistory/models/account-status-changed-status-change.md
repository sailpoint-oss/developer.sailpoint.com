# AccountStatusChangedStatusChange

# AccountStatusChangedStatusChange

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PreviousStatus** |  **Enum** [  "enabled",    "disabled",    "locked" ] | the previous status of the account | [optional] 
**NewStatus** |  **Enum** [  "enabled",    "disabled",    "locked" ] | the new status of the account | [optional] 

## Examples

- Prepare the resource
```powershell
$AccountStatusChangedStatusChange = Initialize-AccountStatusChangedStatusChange  -PreviousStatus enabled `
 -NewStatus disabled
```

- Convert the resource to JSON
```powershell
$AccountStatusChangedStatusChange | ConvertTo-JSON
```


[[Back to top]](#) 

