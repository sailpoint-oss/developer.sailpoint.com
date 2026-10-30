# AccessItemAccessProfileResponseAppRefsInner

# AccessItemAccessProfileResponseAppRefsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CloudAppId** | **String** | the cloud app id associated with the access profile | [optional] 
**CloudAppName** | **String** | the cloud app name associated with the access profile | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessItemAccessProfileResponseAppRefsInner = Initialize-AccessItemAccessProfileResponseAppRefsInner  -CloudAppId 8c190e6787aa4ed9a90bd9d5344523fb `
 -CloudAppName Sample App
```

- Convert the resource to JSON
```powershell
$AccessItemAccessProfileResponseAppRefsInner | ConvertTo-JSON
```


[[Back to top]](#) 

