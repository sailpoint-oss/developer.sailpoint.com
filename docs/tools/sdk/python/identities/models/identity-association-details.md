# IdentityAssociationDetails

# IdentityAssociationDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** | any additional context information of the http call result | [optional] 
**association_details** | [**[]IdentityAssociationDetailsAssociationDetailsInner**](identity-association-details-association-details-inner) | list of all the resource associations for the identity | [optional] 
\}

## Example

```python
from sailpoint.identities.models.identity_association_details import IdentityAssociationDetails

identity_association_details = IdentityAssociationDetails(
message='Identity cannot be deleted as it is owner of following resources',
association_details=[
                    sailpoint.identities.models.identity_association_details_association_details_inner.IdentityAssociationDetails_associationDetails_inner(
                        association_type = 'CAMPAIGN_OWNER', 
                        entities = {"id":"b660a232f05b4e04812ca974b3011e0f","name":"Gaston.800ddf9640a","type":"CAMPAIGN_CAMPAIGNER"}, )
                    ]
)

```
[[Back to top]](#) 

