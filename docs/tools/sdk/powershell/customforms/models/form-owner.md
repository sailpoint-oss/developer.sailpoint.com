# FormOwner

# FormOwner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "IDENTITY" ] | FormOwnerType value. IDENTITY FormOwnerTypeIdentity | [optional] 
**Id** | **String** | Unique identifier of the form's owner. | [optional] 
**Name** | **String** | Name of the form's owner. | [optional] 

## Examples

- Prepare the resource
```powershell
$FormOwner = Initialize-FormOwner  -Type IDENTITY `
 -Id 2c9180867624cbd7017642d8c8c81f67 `
 -Name Grant Smith
```

- Convert the resource to JSON
```powershell
$FormOwner | ConvertTo-JSON
```


[[Back to top]](#) 

