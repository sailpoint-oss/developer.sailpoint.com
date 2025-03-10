---
id: beta-get-personal-access-token-response
title: GetPersonalAccessTokenResponse
pagination_label: GetPersonalAccessTokenResponse
sidebar_label: GetPersonalAccessTokenResponse
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'GetPersonalAccessTokenResponse', 'BetaGetPersonalAccessTokenResponse'] 
slug: /tools/sdk/python/beta/models/get-personal-access-token-response
tags: ['SDK', 'Software Development Kit', 'GetPersonalAccessTokenResponse', 'BetaGetPersonalAccessTokenResponse']
---

# GetPersonalAccessTokenResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The ID of the personal access token (to be used as the username for Basic Auth). | [required]
**name** | **str** | The name of the personal access token. Cannot be the same as other personal access tokens owned by a user. | [required]
**scope** | **[]str** | Scopes of the personal  access token. | [required]
**owner** | [**PatOwner**](pat-owner) |  | [required]
**created** | **datetime** | The date and time, down to the millisecond, when this personal access token was created. | [required]
**last_used** | **datetime** | The date and time, down to the millisecond, when this personal access token was last used to generate an access token. This timestamp does not get updated on every PAT usage, but only once a day. This property can be useful for identifying which PATs are no longer actively used and can be removed. | [optional] 
**managed** | **bool** | If true, this token is managed by the SailPoint platform, and is not visible in the user interface. For example, Workflows will create managed personal access tokens for users who create workflows. | [optional] [default to False]
}

## Example

```python
from sailpoint.beta.models.get_personal_access_token_response import GetPersonalAccessTokenResponse

get_personal_access_token_response = GetPersonalAccessTokenResponse(
id='86f1dc6fe8f54414950454cbb11278fa',
name='NodeJS Integration',
scope=[demo:personal-access-token-scope:first, demo:personal-access-token-scope:second],
owner=sailpoint.beta.models.pat_owner.PatOwner(
                    type = 'IDENTITY', 
                    id = '2c9180a46faadee4016fb4e018c20639', 
                    name = 'Support', ),
created='2017-07-11T18:45:37.098Z',
last_used='2017-07-11T18:45:37.098Z',
managed=False
)

```
[[Back to top]](#) 

