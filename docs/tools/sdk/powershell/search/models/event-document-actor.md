# EventDocumentActor

# EventDocumentActor

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | Name of the actor that generated the event. | [optional] 

## Examples

- Prepare the resource
```powershell
$EventDocumentActor = Initialize-EventDocumentActor  -Name System
```

- Convert the resource to JSON
```powershell
$EventDocumentActor | ConvertTo-JSON
```


[[Back to top]](#) 

