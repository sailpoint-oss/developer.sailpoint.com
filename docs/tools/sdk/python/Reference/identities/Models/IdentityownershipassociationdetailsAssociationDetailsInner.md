---
id: identityownershipassociationdetails-association-details-inner
title: IdentityownershipassociationdetailsAssociationDetailsInner
pagination_label: IdentityownershipassociationdetailsAssociationDetailsInner
sidebar_label: IdentityownershipassociationdetailsAssociationDetailsInner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'IdentityownershipassociationdetailsAssociationDetailsInner', 'IdentityownershipassociationdetailsAssociationDetailsInner'] 
slug: /tools/sdk/python/identities/models/identityownershipassociationdetails-association-details-inner
tags: ['SDK', 'Software Development Kit', 'IdentityownershipassociationdetailsAssociationDetailsInner', 'IdentityownershipassociationdetailsAssociationDetailsInner']
---

# IdentityownershipassociationdetailsAssociationDetailsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**association_type** | **str** | association type with the identity | [optional] 
**entities** | [**[]Identityentities**](identityentities) | the specific resource this identity has ownership on | [optional] 
}

## Example

```python
from sailpoint.identities.models.identityownershipassociationdetails_association_details_inner import IdentityownershipassociationdetailsAssociationDetailsInner

identityownershipassociationdetails_association_details_inner = IdentityownershipassociationdetailsAssociationDetailsInner(
association_type='ROLE_OWNER',
entities={"id":"b660a232f05b4e04812ca974b3011e0f","name":"Gaston.800ddf9640a","type":"ROLE"}
)

```
[[Back to top]](#) 

