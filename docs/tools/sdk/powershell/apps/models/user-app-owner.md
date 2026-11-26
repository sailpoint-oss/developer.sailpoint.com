# UserAppOwner

# UserAppOwner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The identity ID | [optional] 
**Type** | **String** | It will always be ""IDENTITY"" | [optional] 
**Name** | **String** | The identity name | [optional] 
**Alias** | **String** | The identity alias | [optional] 

## Examples

- Prepare the resource
```powershell
$UserAppOwner = Initialize-UserAppOwner  -Id 2c9180827ca885d7017ca8ce28a000eb `
 -Type IDENTITY `
 -Name John `
 -Alias John.Doe
```

- Convert the resource to JSON
```powershell
$UserAppOwner | ConvertTo-JSON
```


[[Back to top]](#) 

