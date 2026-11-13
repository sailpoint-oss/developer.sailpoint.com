# SourceAppCreateDto

# SourceAppCreateDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | The source app name | [required]
**Description** | **String** | The description of the source app | [required]
**MatchAllAccounts** | **Boolean** | True if the source app match all accounts | [optional] [default to $false]
**AccountSource** | [**SourceAppCreateDtoAccountSource**](source-app-create-dto-account-source) |  | [required]

## Examples

- Prepare the resource
```powershell
$SourceAppCreateDto = Initialize-SourceAppCreateDto  -Name my app `
 -Description the source app for engineers `
 -MatchAllAccounts true `
 -AccountSource null
```

- Convert the resource to JSON
```powershell
$SourceAppCreateDto | ConvertTo-JSON
```


[[Back to top]](#) 

