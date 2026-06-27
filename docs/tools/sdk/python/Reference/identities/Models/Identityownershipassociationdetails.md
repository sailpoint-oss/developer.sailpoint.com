---
id: identityownershipassociationdetails
title: Identityownershipassociationdetails
pagination_label: Identityownershipassociationdetails
sidebar_label: Identityownershipassociationdetails
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Identityownershipassociationdetails', 'Identityownershipassociationdetails'] 
slug: /tools/sdk/python/identities/models/identityownershipassociationdetails
tags: ['SDK', 'Software Development Kit', 'Identityownershipassociationdetails', 'Identityownershipassociationdetails']
---

# Identityownershipassociationdetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**association_details** | [**[]IdentityownershipassociationdetailsAssociationDetailsInner**](identityownershipassociationdetails-association-details-inner) | list of all the resource associations for the identity | [optional] 
}

## Example

```python
from sailpoint.identities.models.identityownershipassociationdetails import Identityownershipassociationdetails

identityownershipassociationdetails = Identityownershipassociationdetails(
association_details=[
                    sailpoint.identities.models.identityownershipassociationdetails_association_details_inner.identityownershipassociationdetails_associationDetails_inner(
                        association_type = 'ROLE_OWNER', 
                        entities = {"id":"b660a232f05b4e04812ca974b3011e0f","name":"Gaston.800ddf9640a","type":"ROLE"}, )
                    ]
)

```
[[Back to top]](#) 

