# AuthUserLevelsIdentityCount

# AuthUserLevelsIdentityCount

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The unique identifier of the user level. | [optional] 
**Count** | **Int32** | Number of identities having this user level. | [optional] 

## Examples

- Prepare the resource
```powershell
$AuthUserLevelsIdentityCount = Initialize-AuthUserLevelsIdentityCount  -Id idn:access-request-administrator `
 -Count 10
```

- Convert the resource to JSON
```powershell
$AuthUserLevelsIdentityCount | ConvertTo-JSON
```


[[Back to top]](#) 

