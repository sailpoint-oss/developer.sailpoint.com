# CredentialOwners

# CredentialOwners

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Primary** | [**CredentialOwnersPrimary**](credential-owners-primary) |  | [optional] 
**Secondary** | [**[]BaseReferenceDto**](base-reference-dto) | Additional owners. Entries are either up to ten human (IDENTITY) references or exactly one GOVERNANCE_GROUP reference - not both. Governance-group owners appear here with type GOVERNANCE_GROUP. | [optional] 

## Examples

- Prepare the resource
```powershell
$CredentialOwners = Initialize-CredentialOwners  -Primary null `
 -Secondary [{"id":"2c9180858082150f0180893dbaf44202","name":"Jane Doe","type":"IDENTITY"}]
```

- Convert the resource to JSON
```powershell
$CredentialOwners | ConvertTo-JSON
```


[[Back to top]](#) 

