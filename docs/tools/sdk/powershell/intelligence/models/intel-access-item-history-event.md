# IntelAccessItemHistoryEvent

# IntelAccessItemHistoryEvent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EventType** |  **Enum** [  "AccessItemAssociated",    "AccessItemRemoved",    "AccountStatusChanged" ] | Type of access-item history event. | [required]
**DateTime** | **System.DateTime** | Event timestamp. | [optional] 

## Examples

- Prepare the resource
```powershell
$IntelAccessItemHistoryEvent = Initialize-IntelAccessItemHistoryEvent  -EventType AccessItemRemoved `
 -DateTime 2026-05-11T09:40:04.496Z
```

- Convert the resource to JSON
```powershell
$IntelAccessItemHistoryEvent | ConvertTo-JSON
```


[[Back to top]](#) 

