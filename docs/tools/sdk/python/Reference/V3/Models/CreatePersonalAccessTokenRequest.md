---
id: create-personal-access-token-request
title: CreatePersonalAccessTokenRequest
pagination_label: CreatePersonalAccessTokenRequest
sidebar_label: CreatePersonalAccessTokenRequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'CreatePersonalAccessTokenRequest', 'CreatePersonalAccessTokenRequest'] 
slug: /tools/sdk/python/v3/models/create-personal-access-token-request
tags: ['SDK', 'Software Development Kit', 'CreatePersonalAccessTokenRequest', 'CreatePersonalAccessTokenRequest']
---

# CreatePersonalAccessTokenRequest

Object for specifying the name of a personal access token to create

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the personal access token (PAT) to be created. Cannot be the same as another PAT owned by the user for whom this PAT is being created. | [required]
**scope** | **[]str** | Scopes of the personal  access token. If no scope is specified, the token will be created with the default scope \"sp:scopes:all\". This means the personal access token will have all the rights of the owner who created it. | [optional] 
**access_token_validity_seconds** | **int** | Number of seconds an access token is valid when generated using this Personal Access Token. If no value is specified, the token will be created with the default value of 43200. | [optional] 
}

## Example

```python
from sailpoint.v3.models.create_personal_access_token_request import CreatePersonalAccessTokenRequest

create_personal_access_token_request = CreatePersonalAccessTokenRequest(
name='NodeJS Integration',
scope=[demo:personal-access-token-scope:first, demo:personal-access-token-scope:second],
access_token_validity_seconds=36900
)

```
[[Back to top]](#) 

