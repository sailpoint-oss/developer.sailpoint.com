# AccountRequestInfo

# AccountRequestInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RequestedObjectId** | **String** | Id of requested object | [optional] 
**RequestedObjectName** | **String** | Human-readable name of requested object | [optional] 
**RequestedObjectType** | **RequestableObjectType** |  | [optional] 

## Examples

- Prepare the resource
```powershell
$AccountRequestInfo = Initialize-AccountRequestInfo  -RequestedObjectId 2c91808563ef85690164001c31140c0c `
 -RequestedObjectName Treasury Analyst `
 -RequestedObjectType null
```

- Convert the resource to JSON
```powershell
$AccountRequestInfo | ConvertTo-JSON
```


[[Back to top]](#) 

