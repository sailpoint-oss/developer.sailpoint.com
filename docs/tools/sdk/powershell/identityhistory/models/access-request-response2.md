# AccessRequestResponse2

# AccessRequestResponse2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RequesterId** | **String** | the requester Id | [optional] 
**RequesterName** | **String** | the requesterName | [optional] 
**Items** | [**[]AccessRequestItemResponse**](access-request-item-response) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessRequestResponse2 = Initialize-AccessRequestResponse2  -RequesterId 2c91808a77ff216301782327a50f09bf `
 -RequesterName Bing C `
 -Items [{"operation":"Add","accessItemType":"role","name":"Role-1","decision":"APPROVED","description":"The role descrition","sourceId":"8a80828f643d484f01643e14202e206f","sourceName":"Source1","approvalInfos":[{"name":"John Snow","id":"8a80828f643d484f01643e14202e2000","status":"Approved"}]}]
```

- Convert the resource to JSON
```powershell
$AccessRequestResponse2 | ConvertTo-JSON
```


[[Back to top]](#) 

