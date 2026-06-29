---
id: getpersonalaccesstokenresponse
title: Getpersonalaccesstokenresponse
pagination_label: Getpersonalaccesstokenresponse
sidebar_label: Getpersonalaccesstokenresponse
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Getpersonalaccesstokenresponse', 'Getpersonalaccesstokenresponse'] 
slug: /tools/sdk/python/personal-access-tokens/models/getpersonalaccesstokenresponse
tags: ['SDK', 'Software Development Kit', 'Getpersonalaccesstokenresponse', 'Getpersonalaccesstokenresponse']
---

# Getpersonalaccesstokenresponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The ID of the personal access token (to be used as the username for Basic Auth). | [required]
**name** | **str** | The name of the personal access token. Cannot be the same as other personal access tokens owned by a user. | [required]
**scope** | **[]str** | Scopes of the personal  access token. | [required]
**owner** | [**Patowner**](patowner) |  | [required]
**created** | **datetime** | The date and time, down to the millisecond, when this personal access token was created. | [required]
**last_used** | **datetime** | The date and time, down to the millisecond, when this personal access token was last used to generate an access token. This timestamp does not get updated on every PAT usage, but only once a day. This property can be useful for identifying which PATs are no longer actively used and can be removed. | [optional] 
**managed** | **bool** | If true, this token is managed by the SailPoint platform, and is not visible in the user interface. For example, Workflows will create managed personal access tokens for users who create workflows. | [optional] [default to False]
**access_token_validity_seconds** | **int** | Number of seconds an access token is valid when generated using this Personal Access Token. If no value is specified, the token will be created with the default value of 43200. | [optional] [default to 43200]
**expiration_date** | **datetime** | Date and time, down to the millisecond, when this personal access token will expire. **Important:** When `expirationDate` is `null` or empty, the token will never expire (and `userAwareTokenNeverExpires` will be `true`). When `expirationDate` is provided, this value must be a future date. There is no upper limit on how far in the future the expiration date can be set. | [optional] 
**user_aware_token_never_expires** | **bool** | Indicates that the user who created or updated this Personal Access Token is aware of and acknowledges the security implications of creating a token that will never expire. When `true`, this flag confirms that the user understood the security risks associated with non-expiring tokens at the time of creation or update. **Security Awareness:** This field serves as a record that the user acknowledged: * Tokens that never expire pose a greater security risk if compromised * Non-expiring tokens should be used only when necessary and with appropriate security measures * Regular rotation and monitoring of non-expiring tokens is recommended **Behavior:** * When `true`: Indicates that the user acknowledged they were creating a token that will never expire. When `expirationDate` is `null`, the token will never expire. * When `false`: The token follows normal expiration rules based on the `expirationDate` field and `accessTokenValiditySeconds` setting. | [optional] [default to False]
}

## Example

```python
from sailpoint.personal_access_tokens.models.getpersonalaccesstokenresponse import Getpersonalaccesstokenresponse

getpersonalaccesstokenresponse = Getpersonalaccesstokenresponse(
id='86f1dc6fe8f54414950454cbb11278fa',
name='NodeJS Integration',
scope=["demo:personal-access-token-scope:first","demo:personal-access-token-scope:second"],
owner=sailpoint.personal_access_tokens.models.pat_owner.Pat Owner(
                    type = 'IDENTITY', 
                    id = '2c9180a46faadee4016fb4e018c20639', 
                    name = 'Support', ),
created='2017-07-11T18:45:37.098Z',
last_used='2017-07-11T18:45:37.098Z',
managed=False,
access_token_validity_seconds=36900,
expiration_date='2026-12-31T23:59:59.999Z',
user_aware_token_never_expires=False
)

```
[[Back to top]](#) 

