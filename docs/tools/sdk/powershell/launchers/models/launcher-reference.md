# LauncherReference

# LauncherReference

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "WORKFLOW" ] | Type of Launcher reference | [optional] 
**Id** | **String** | ID of Launcher reference | [optional] 

## Examples

- Prepare the resource
```powershell
$LauncherReference = Initialize-LauncherReference  -Type WORKFLOW `
 -Id 2fd6ff94-2081-4d29-acbc-83a0a2f744a5
```

- Convert the resource to JSON
```powershell
$LauncherReference | ConvertTo-JSON
```


[[Back to top]](#) 

