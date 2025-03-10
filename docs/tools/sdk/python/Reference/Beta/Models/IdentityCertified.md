---
id: beta-identity-certified
title: IdentityCertified
pagination_label: IdentityCertified
sidebar_label: IdentityCertified
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'IdentityCertified', 'BetaIdentityCertified'] 
slug: /tools/sdk/python/beta/models/identity-certified
tags: ['SDK', 'Software Development Kit', 'IdentityCertified', 'BetaIdentityCertified']
---

# IdentityCertified


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**certification_id** | **str** | the id of the certification item | [optional] 
**certification_name** | **str** | the certification item name | [optional] 
**signed_date** | **str** | the date ceritification was signed | [optional] 
**certifiers** | [**[]CertifierResponse**](certifier-response) | this field is deprecated and may go away | [optional] 
**reviewers** | [**[]CertifierResponse**](certifier-response) | The list of identities who review this certification | [optional] 
**signer** | [**CertifierResponse**](certifier-response) |  | [optional] 
**event_type** | **str** | the event type | [optional] 
**dt** | **str** | the date of event | [optional] 
}

## Example

```python
from sailpoint.beta.models.identity_certified import IdentityCertified

identity_certified = IdentityCertified(
certification_id='2c91808a77ff216301782327a50f09bf',
certification_name='Cert name',
signed_date='2019-03-08T22:37:33.901Z',
certifiers=[{id=8a80828f643d484f01643e14202e206f, displayName=John Snow}],
reviewers=[{id=8a80828f643d484f01643e14202e206f, displayName=John Snow}],
signer=sailpoint.beta.models.certifier_response.CertifierResponse(
                    id = '8a80828f643d484f01643e14202e206f', 
                    display_name = 'John Snow', ),
event_type='IdentityCertified',
dt='2019-03-08T22:37:33.901Z'
)

```
[[Back to top]](#) 

