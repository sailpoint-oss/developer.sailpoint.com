# AccountDeletedEvent

# AccountDeletedEvent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "ACCOUNT_DELETED_V2" ] | The type of event. | [required]
**Cause** |  **Enum** [  "AGGREGATION",    "PROVISIONING" ] | The cause of the event. | [required]

## Examples

- Prepare the resource
```powershell
$AccountDeletedEvent = Initialize-AccountDeletedEvent  -Type ACCOUNT_DELETED_V2 `
 -Cause AGGREGATION
```

- Convert the resource to JSON
```powershell
$AccountDeletedEvent | ConvertTo-JSON
```


[[Back to top]](#) 

