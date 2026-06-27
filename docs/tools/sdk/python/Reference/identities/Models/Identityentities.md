---
id: identityentities
title: Identityentities
pagination_label: Identityentities
sidebar_label: Identityentities
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Identityentities', 'Identityentities'] 
slug: /tools/sdk/python/identities/models/identityentities
tags: ['SDK', 'Software Development Kit', 'Identityentities', 'Identityentities']
---

# Identityentities


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identity_entity** | [**IdentityentitiesIdentityEntity**](identityentities-identity-entity) |  | [optional] 
}

## Example

```python
from sailpoint.identities.models.identityentities import Identityentities

identityentities = Identityentities(
identity_entity=sailpoint.identities.models.identityentities_identity_entity.identityentities_identityEntity(
                    id = '031034e97f094a4096c1be53f75f6b91', 
                    name = 'Gaston.800ddf9640a', 
                    type = 'CAMPAIGN_CAMPAIGNER', )
)

```
[[Back to top]](#) 

