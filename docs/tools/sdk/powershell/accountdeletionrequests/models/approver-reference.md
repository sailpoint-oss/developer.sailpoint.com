# ApproverReference

# ApproverReference

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Id of supported DtoType like IDENTITY, MACHINE_IDENTITY etc. | [optional] 
**Type** | **String** | Type of Dto | [optional] 
**Name** | **String** | Display name of DtoType like IDENTITY, MACHINE_IDENTITY etc | [optional] 

## Examples

- Prepare the resource
```powershell
$ApproverReference = Initialize-ApproverReference  -Id 85131bd73fdc423599e57f40b29f01fe `
 -Type IDENTITY `
 -Name SailPoint Support
```

- Convert the resource to JSON
```powershell
$ApproverReference | ConvertTo-JSON
```


[[Back to top]](#) 

