---
id: beta-identity-association-details
title: IdentityAssociationDetails
pagination_label: IdentityAssociationDetails
sidebar_label: IdentityAssociationDetails
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'IdentityAssociationDetails', 'BetaIdentityAssociationDetails'] 
slug: /tools/sdk/python/beta/models/identity-association-details
tags: ['SDK', 'Software Development Kit', 'IdentityAssociationDetails', 'BetaIdentityAssociationDetails']
---

# IdentityAssociationDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** | any additional context information of the http call result | [optional] 
**association_details** | [**[]IdentityAssociationDetailsAssociationDetailsInner**](identity-association-details-association-details-inner) | list of all the resource associations for the identity | [optional] 
}

## Example

```python
from sailpoint.beta.models.identity_association_details import IdentityAssociationDetails

identity_association_details = IdentityAssociationDetails(
message='Identity cannot be deleted as it is owner of following resources',
association_details=[
                    sailpoint.beta.models.identity_association_details_association_details_inner.IdentityAssociationDetails_associationDetails_inner(
                        association_type = 'CAMPAIGN_OWNER', 
                        entities = {id=b660a232f05b4e04812ca974b3011e0f, name=Gaston.800ddf9640a, type=CAMPAIGN_CAMPAIGNER}, )
                    ]
)

```
[[Back to top]](#) 

