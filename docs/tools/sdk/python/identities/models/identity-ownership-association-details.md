# IdentityOwnershipAssociationDetails

# IdentityOwnershipAssociationDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**association_details** | [**[]IdentityOwnershipAssociationDetailsAssociationDetailsInner**](identity-ownership-association-details-association-details-inner) | list of all the resource associations for the identity | [optional] 
\}

## Example

```python
from sailpoint.identities.models.identity_ownership_association_details import IdentityOwnershipAssociationDetails

identity_ownership_association_details = IdentityOwnershipAssociationDetails(
association_details=[
                    sailpoint.identities.models.identity_ownership_association_details_association_details_inner.IdentityOwnershipAssociationDetails_associationDetails_inner(
                        association_type = 'ROLE_OWNER', 
                        entities = {"id":"b660a232f05b4e04812ca974b3011e0f","name":"Gaston.800ddf9640a","type":"ROLE"}, )
                    ]
)

```
[[Back to top]](#) 

