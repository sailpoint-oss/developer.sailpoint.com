# MachineIdentityDtoOwners

# MachineIdentityDtoOwners

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PrimaryIdentity** | **SystemCollectionsHashtable** | Defines the identity which is selected as the primary owner | [required]
**SecondaryIdentities** | [**[]BaseReferenceDto**](base-reference-dto) | Defines the identities which are selected as secondary owners | [required]

## Examples

- Prepare the resource
```powershell
$MachineIdentityDtoOwners = Initialize-MachineIdentityDtoOwners  -PrimaryIdentity null `
 -SecondaryIdentities null
```

- Convert the resource to JSON
```powershell
$MachineIdentityDtoOwners | ConvertTo-JSON
```


[[Back to top]](#) 

