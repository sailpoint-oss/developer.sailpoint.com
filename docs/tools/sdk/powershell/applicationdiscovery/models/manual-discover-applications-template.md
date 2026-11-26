# ManualDiscoverApplicationsTemplate

# ManualDiscoverApplicationsTemplate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApplicationName** | **String** | Name of the application. | [optional] 
**Description** | **String** | Description of the application. | [optional] 

## Examples

- Prepare the resource
```powershell
$ManualDiscoverApplicationsTemplate = Initialize-ManualDiscoverApplicationsTemplate  -ApplicationName Example Application `
 -Description Example Description
```

- Convert the resource to JSON
```powershell
$ManualDiscoverApplicationsTemplate | ConvertTo-JSON
```


[[Back to top]](#) 

