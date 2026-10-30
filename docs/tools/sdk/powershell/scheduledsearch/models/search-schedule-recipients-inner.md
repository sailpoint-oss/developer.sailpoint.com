# SearchScheduleRecipientsInner

# SearchScheduleRecipientsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "IDENTITY" ] | The type of object being referenced | [required]
**Id** | **String** | The ID of the referenced object | [required]

## Examples

- Prepare the resource
```powershell
$SearchScheduleRecipientsInner = Initialize-SearchScheduleRecipientsInner  -Type IDENTITY `
 -Id 2c9180867624cbd7017642d8c8c81f67
```

- Convert the resource to JSON
```powershell
$SearchScheduleRecipientsInner | ConvertTo-JSON
```


[[Back to top]](#) 

