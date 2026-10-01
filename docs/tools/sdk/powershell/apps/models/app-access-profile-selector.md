# AppAccessProfileSelector

# AppAccessProfileSelector

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApplicationId** | **String** | The application id | [optional] 
**AccountMatchConfig** | [**AppAccessProfileSelectorAccountMatchConfig**](app-access-profile-selector-account-match-config) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$AppAccessProfileSelector = Initialize-AppAccessProfileSelector  -ApplicationId 2c91808874ff91550175097daaec161c" `
 -AccountMatchConfig null
```

- Convert the resource to JSON
```powershell
$AppAccessProfileSelector | ConvertTo-JSON
```


[[Back to top]](#) 

