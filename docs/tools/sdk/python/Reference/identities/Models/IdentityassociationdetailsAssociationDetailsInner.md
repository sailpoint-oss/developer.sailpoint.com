---
id: identityassociationdetails-association-details-inner
title: IdentityassociationdetailsAssociationDetailsInner
pagination_label: IdentityassociationdetailsAssociationDetailsInner
sidebar_label: IdentityassociationdetailsAssociationDetailsInner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'IdentityassociationdetailsAssociationDetailsInner', 'IdentityassociationdetailsAssociationDetailsInner'] 
slug: /tools/sdk/python/identities/models/identityassociationdetails-association-details-inner
tags: ['SDK', 'Software Development Kit', 'IdentityassociationdetailsAssociationDetailsInner', 'IdentityassociationdetailsAssociationDetailsInner']
---

# IdentityassociationdetailsAssociationDetailsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**association_type** | **str** | association type with the identity | [optional] 
**entities** | [**[]Identityentities**](identityentities) | the specific resource this identity has ownership on | [optional] 
}

## Example

```python
from sailpoint.identities.models.identityassociationdetails_association_details_inner import IdentityassociationdetailsAssociationDetailsInner

identityassociationdetails_association_details_inner = IdentityassociationdetailsAssociationDetailsInner(
association_type='CAMPAIGN_OWNER',
entities={"id":"b660a232f05b4e04812ca974b3011e0f","name":"Gaston.800ddf9640a","type":"CAMPAIGN_CAMPAIGNER"}
)

```
[[Back to top]](#) 

