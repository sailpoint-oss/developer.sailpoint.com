---
id: beta-create-personal-access-token-response
title: CreatePersonalAccessTokenResponse
pagination_label: CreatePersonalAccessTokenResponse
sidebar_label: CreatePersonalAccessTokenResponse
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'CreatePersonalAccessTokenResponse', 'BetaCreatePersonalAccessTokenResponse'] 
slug: /tools/sdk/python/beta/models/create-personal-access-token-response
tags: ['SDK', 'Software Development Kit', 'CreatePersonalAccessTokenResponse', 'BetaCreatePersonalAccessTokenResponse']
---

# CreatePersonalAccessTokenResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The ID of the personal access token (to be used as the username for Basic Auth). | [required]
**secret** | **str** | The secret of the personal access token (to be used as the password for Basic Auth). | [required]
**scope** | **[]str** | Scopes of the personal  access token. | [required]
**name** | **str** | The name of the personal access token. Cannot be the same as other personal access tokens owned by a user. | [required]
**owner** | [**PatOwner**](pat-owner) |  | [required]
**created** | **datetime** | The date and time, down to the millisecond, when this personal access token was created. | [required]
**access_token_validity_seconds** | **int** | Number of seconds an access token is valid when generated using this Personal Access Token. If no value is specified, the token will be created with the default value of 43200. | [required]
**expiration_date** | **datetime** | Date and time, down to the millisecond, when this personal access token will expire. If not provided, the token will expire 6 months after its creation date. The value must be a valid date-time string between the current date and 6 months from the creation date. | [required]
}

## Example

```python
from sailpoint.beta.models.create_personal_access_token_response import CreatePersonalAccessTokenResponse

create_personal_access_token_response = CreatePersonalAccessTokenResponse(
id='86f1dc6fe8f54414950454cbb11278fa',
secret='1d1bef2b9f426383447f64f69349fc7cac176042578d205c256ba3f37c59adb9',
scope=[demo:personal-access-token-scope:first, demo:personal-access-token-scope:second],
name='NodeJS Integration',
owner=sailpoint.beta.models.pat_owner.PatOwner(
                    type = 'IDENTITY', 
                    id = '2c9180a46faadee4016fb4e018c20639', 
                    name = 'Support', ),
created='2017-07-11T18:45:37.098Z',
access_token_validity_seconds=36900,
expiration_date='2018-01-11T18:45:37.098Z'
)

```
[[Back to top]](#) 

