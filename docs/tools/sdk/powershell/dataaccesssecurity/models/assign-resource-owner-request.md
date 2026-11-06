# AssignResourceOwnerRequest

# AssignResourceOwnerRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AppId** | **Int64** | The unique identifier of the application containing the resource. | [optional] 
**FullPath** | **String** | The full path to the resource within the application (e.g., file path or object path). | [optional] 
**IdentityId** | **String** | The unique identifier (UUID) of the identity to be assigned as the resource owner. | [optional] 

## Examples

- Prepare the resource
```powershell
$AssignResourceOwnerRequest = Initialize-AssignResourceOwnerRequest  -AppId 12345 `
 -FullPath /shared/hr/documents/employee-records.pdf `
 -IdentityId d290f1ee-6c54-4b01-90e6-d701748f0851
```

- Convert the resource to JSON
```powershell
$AssignResourceOwnerRequest | ConvertTo-JSON
```


[[Back to top]](#) 

