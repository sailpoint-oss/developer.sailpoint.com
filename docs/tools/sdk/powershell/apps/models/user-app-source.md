# UserAppSource

# UserAppSource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | the source ID | [optional] 
**Type** | **String** | It will always be ""SOURCE"" | [optional] 
**Name** | **String** | the source name | [optional] 

## Examples

- Prepare the resource
```powershell
$UserAppSource = Initialize-UserAppSource  -Id 9870808a7190d06e01719938fcd20792 `
 -Type SOURCE `
 -Name test-source
```

- Convert the resource to JSON
```powershell
$UserAppSource | ConvertTo-JSON
```


[[Back to top]](#) 

