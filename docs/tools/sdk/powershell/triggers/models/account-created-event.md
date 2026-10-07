# AccountCreatedEvent

# AccountCreatedEvent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "ACCOUNT_CREATED_V2" ] | The type of event. | [required]
**Cause** |  **Enum** [  "AGGREGATION",    "PROVISIONING" ] | The cause of the event. | [required]

## Examples

- Prepare the resource
```powershell
$AccountCreatedEvent = Initialize-AccountCreatedEvent  -Type ACCOUNT_CREATED_V2 `
 -Cause AGGREGATION
```

- Convert the resource to JSON
```powershell
$AccountCreatedEvent | ConvertTo-JSON
```


[[Back to top]](#) 

