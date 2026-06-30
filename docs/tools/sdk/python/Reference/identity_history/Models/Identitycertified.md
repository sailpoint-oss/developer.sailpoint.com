---
id: identitycertified
title: Identitycertified
pagination_label: Identitycertified
sidebar_label: Identitycertified
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Identitycertified', 'Identitycertified'] 
slug: /tools/sdk/python/identity-history/models/identitycertified
tags: ['SDK', 'Software Development Kit', 'Identitycertified', 'Identitycertified']
---

# Identitycertified


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**certification_id** | **str** | the id of the certification item | [required]
**certification_name** | **str** | the certification item name | [required]
**signed_date** | **str** | the date ceritification was signed | [optional] 
**certifiers** | [**[]Certifierresponse**](certifierresponse) | this field is deprecated and may go away | [optional] 
**reviewers** | [**[]Certifierresponse**](certifierresponse) | The list of identities who review this certification | [optional] 
**signer** | [**Certifierresponse**](certifierresponse) |  | [optional] 
**event_type** | **str** | the event type | [optional] 
**date_time** | **str** | the date of event | [optional] 
}

## Example

```python
from sailpoint.identity_history.models.identitycertified import Identitycertified

identitycertified = Identitycertified(
certification_id='2c91808a77ff216301782327a50f09bf',
certification_name='Cert name',
signed_date='2019-03-08T22:37:33.901Z',
certifiers=[{"id":"8a80828f643d484f01643e14202e206f","displayName":"John Snow"}],
reviewers=[{"id":"8a80828f643d484f01643e14202e206f","displayName":"John Snow"}],
signer=sailpoint.identity_history.models.certifier_response.Certifier Response(
                    id = '8a80828f643d484f01643e14202e206f', 
                    display_name = 'John Snow', ),
event_type='IdentityCertified',
date_time='2019-03-08T22:37:33.901Z'
)

```
[[Back to top]](#) 

