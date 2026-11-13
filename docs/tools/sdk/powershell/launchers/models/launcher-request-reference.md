# LauncherRequestReference

# LauncherRequestReference

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "WORKFLOW" ] | Type of Launcher reference | [required]
**Id** | **String** | ID of Launcher reference | [required]

## Examples

- Prepare the resource
```powershell
$LauncherRequestReference = Initialize-LauncherRequestReference  -Type WORKFLOW `
 -Id 2fd6ff94-2081-4d29-acbc-83a0a2f744a5
```

- Convert the resource to JSON
```powershell
$LauncherRequestReference | ConvertTo-JSON
```


[[Back to top]](#) 

