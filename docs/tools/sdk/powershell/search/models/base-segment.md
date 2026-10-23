# BaseSegment

# BaseSegment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Segment's unique ID. | [optional] 
**Name** | **String** | Segment's display name. | [optional] 

## Examples

- Prepare the resource
```powershell
$BaseSegment = Initialize-BaseSegment  -Id b009b6e3-b56d-41d9-8735-cb532ea0b017 `
 -Name Test Segment
```

- Convert the resource to JSON
```powershell
$BaseSegment | ConvertTo-JSON
```


[[Back to top]](#) 

