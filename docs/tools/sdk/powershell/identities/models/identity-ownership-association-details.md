# IdentityOwnershipAssociationDetails

# IdentityOwnershipAssociationDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AssociationDetails** | [**[]IdentityOwnershipAssociationDetailsAssociationDetailsInner**](identity-ownership-association-details-association-details-inner) | list of all the resource associations for the identity | [optional] 

## Examples

- Prepare the resource
```powershell
$IdentityOwnershipAssociationDetails = Initialize-IdentityOwnershipAssociationDetails  -AssociationDetails null
```

- Convert the resource to JSON
```powershell
$IdentityOwnershipAssociationDetails | ConvertTo-JSON
```


[[Back to top]](#) 

