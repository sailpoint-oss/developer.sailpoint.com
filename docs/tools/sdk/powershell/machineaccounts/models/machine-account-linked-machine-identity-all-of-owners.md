# MachineAccountLinkedMachineIdentityAllOfOwners

# MachineAccountLinkedMachineIdentityAllOfOwners

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PrimaryIdentity** | [**BaseReferenceDto**](base-reference-dto) | The identity selected as the primary owner. | [optional] 
**SecondaryIdentities** | [**[]BaseReferenceDto**](base-reference-dto) | The identities selected as secondary owners. | [optional] 

## Examples

- Prepare the resource
```powershell
$MachineAccountLinkedMachineIdentityAllOfOwners = Initialize-MachineAccountLinkedMachineIdentityAllOfOwners  -PrimaryIdentity null `
 -SecondaryIdentities [{"id":"2c9180858082150f0180893dbaf44202","type":"IDENTITY","name":"Jane Doe"}]
```

- Convert the resource to JSON
```powershell
$MachineAccountLinkedMachineIdentityAllOfOwners | ConvertTo-JSON
```


[[Back to top]](#) 

