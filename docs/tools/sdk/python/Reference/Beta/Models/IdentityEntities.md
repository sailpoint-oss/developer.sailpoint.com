---
id: beta-identity-entities
title: IdentityEntities
pagination_label: IdentityEntities
sidebar_label: IdentityEntities
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'IdentityEntities', 'BetaIdentityEntities'] 
slug: /tools/sdk/python/beta/models/identity-entities
tags: ['SDK', 'Software Development Kit', 'IdentityEntities', 'BetaIdentityEntities']
---

# IdentityEntities


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identity_entity** | [**IdentityEntitiesIdentityEntity**](identity-entities-identity-entity) |  | [optional] 
}

## Example

```python
from sailpoint.beta.models.identity_entities import IdentityEntities

identity_entities = IdentityEntities(
identity_entity=sailpoint.beta.models.identity_entities_identity_entity.IdentityEntities_identityEntity(
                    id = '031034e97f094a4096c1be53f75f6b91', 
                    name = 'Gaston.800ddf9640a', 
                    type = 'CAMPAIGN_CAMPAIGNER', )
)

```
[[Back to top]](#) 

