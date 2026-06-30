---
id: identityassociationdetails
title: Identityassociationdetails
pagination_label: Identityassociationdetails
sidebar_label: Identityassociationdetails
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Identityassociationdetails', 'Identityassociationdetails'] 
slug: /tools/sdk/python/identities/models/identityassociationdetails
tags: ['SDK', 'Software Development Kit', 'Identityassociationdetails', 'Identityassociationdetails']
---

# Identityassociationdetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** | any additional context information of the http call result | [optional] 
**association_details** | [**[]IdentityassociationdetailsAssociationDetailsInner**](identityassociationdetails-association-details-inner) | list of all the resource associations for the identity | [optional] 
}

## Example

```python
from sailpoint.identities.models.identityassociationdetails import Identityassociationdetails

identityassociationdetails = Identityassociationdetails(
message='Identity cannot be deleted as it is owner of following resources',
association_details=[
                    sailpoint.identities.models.identityassociationdetails_association_details_inner.identityassociationdetails_associationDetails_inner(
                        association_type = 'CAMPAIGN_OWNER', 
                        entities = {"id":"b660a232f05b4e04812ca974b3011e0f","name":"Gaston.800ddf9640a","type":"CAMPAIGN_CAMPAIGNER"}, )
                    ]
)

```
[[Back to top]](#) 

