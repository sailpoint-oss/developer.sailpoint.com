---
id: beta-identity-ownership-association-details
title: IdentityOwnershipAssociationDetails
pagination_label: IdentityOwnershipAssociationDetails
sidebar_label: IdentityOwnershipAssociationDetails
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'IdentityOwnershipAssociationDetails', 'BetaIdentityOwnershipAssociationDetails'] 
slug: /tools/sdk/python/beta/models/identity-ownership-association-details
tags: ['SDK', 'Software Development Kit', 'IdentityOwnershipAssociationDetails', 'BetaIdentityOwnershipAssociationDetails']
---

# IdentityOwnershipAssociationDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**association_details** | [**[]IdentityOwnershipAssociationDetailsAssociationDetailsInner**](identity-ownership-association-details-association-details-inner) | list of all the resource associations for the identity | [optional] 
}

## Example

```python
from sailpoint.beta.models.identity_ownership_association_details import IdentityOwnershipAssociationDetails

identity_ownership_association_details = IdentityOwnershipAssociationDetails(
association_details=[
                    sailpoint.beta.models.identity_ownership_association_details_association_details_inner.IdentityOwnershipAssociationDetails_associationDetails_inner(
                        association_type = 'ROLE_OWNER', 
                        entities = {id=b660a232f05b4e04812ca974b3011e0f, name=Gaston.800ddf9640a, type=ROLE}, )
                    ]
)

```
[[Back to top]](#) 

