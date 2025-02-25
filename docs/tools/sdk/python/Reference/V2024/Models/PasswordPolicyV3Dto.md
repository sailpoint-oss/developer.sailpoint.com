---
id: v2024-password-policy-v3-dto
title: PasswordPolicyV3Dto
pagination_label: PasswordPolicyV3Dto
sidebar_label: PasswordPolicyV3Dto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'PasswordPolicyV3Dto', 'V2024PasswordPolicyV3Dto'] 
slug: /tools/sdk/python/v2024/models/password-policy-v3-dto
tags: ['SDK', 'Software Development Kit', 'PasswordPolicyV3Dto', 'V2024PasswordPolicyV3Dto']
---

# PasswordPolicyV3Dto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The password policy Id. | [optional] 
**description** | **str** | Description for current password policy. | [optional] 
**name** | **str** | The name of the password policy. | [optional] 
**date_created** | **datetime** | Date the Password Policy was created. | [optional] 
**last_updated** | **datetime** | Date the Password Policy was updated. | [optional] 
**first_expiration_reminder** | **int** | The number of days before expiration remaninder. | [optional] 
**account_id_min_word_length** | **int** | The minimun length of account Id. By default is equals to -1. | [optional] 
**account_name_min_word_length** | **int** | The minimun length of account name. By default is equals to -1. | [optional] 
**min_alpha** | **int** | Maximum alpha. By default is equals to 0. | [optional] 
**min_character_types** | **int** | MinCharacterTypes. By default is equals to -1. | [optional] 
**max_length** | **int** | Maximum length of the password. | [optional] 
**min_length** | **int** | Minimum length of the password. By default is equals to 0. | [optional] 
**max_repeated_chars** | **int** | Maximum repetition of the same character in the password. By default is equals to -1. | [optional] 
**min_lower** | **int** | Minimum amount of lower case character in the password. By default is equals to 0. | [optional] 
**min_numeric** | **int** | Minimum amount of numeric characters in the password. By default is equals to 0. | [optional] 
**min_special** | **int** | Minimum amount of special symbols in the password. By default is equals to 0. | [optional] 
**min_upper** | **int** | Minimum amount of upper case symbols in the password. By default is equals to 0. | [optional] 
**password_expiration** | **int** | Number of days before current password expires. By default is equals to 90. | [optional] 
**default_policy** | **bool** | Defines whether this policy is default or not. Default policy is created automatically when an org is setup. This field is false by default. | [optional] [default to False]
**enable_passwd_expiration** | **bool** | Defines whether this policy is enabled to expire or not. This field is false by default. | [optional] [default to False]
**require_strong_authn** | **bool** | Defines whether this policy require strong Auth or not. This field is false by default. | [optional] [default to False]
**require_strong_auth_off_network** | **bool** | Defines whether this policy require strong Auth of network or not. This field is false by default. | [optional] [default to False]
**require_strong_auth_untrusted_geographies** | **bool** | Defines whether this policy require strong Auth for untrusted geographies. This field is false by default. | [optional] [default to False]
**use_account_attributes** | **bool** | Defines whether this policy uses account attributes or not. This field is false by default. | [optional] [default to False]
**use_dictionary** | **bool** | Defines whether this policy uses dictionary or not. This field is false by default. | [optional] [default to False]
**use_identity_attributes** | **bool** | Defines whether this policy uses identity attributes or not. This field is false by default. | [optional] [default to False]
**validate_against_account_id** | **bool** | Defines whether this policy validate against account id or not. This field is false by default. | [optional] [default to False]
**validate_against_account_name** | **bool** | Defines whether this policy validate against account name or not. This field is false by default. | [optional] [default to False]
**created** | **str** |  | [optional] 
**modified** | **str** |  | [optional] 
**source_ids** | **[]str** | List of sources IDs managed by this password policy. | [optional] 
}

## Example

```python
from sailpoint.v2024.models.password_policy_v3_dto import PasswordPolicyV3Dto

password_policy_v3_dto = PasswordPolicyV3Dto(
id='2c91808e7d976f3b017d9f5ceae440c8',
description='Information about the Password Policy',
name='PasswordPolicy Example',
date_created=datetime.datetime.strptime('2013-10-20 19:20:30.00', '%Y-%m-%d %H:%M:%S.%f'),
last_updated=datetime.datetime.strptime('2013-10-20 19:20:30.00', '%Y-%m-%d %H:%M:%S.%f'),
first_expiration_reminder=45,
account_id_min_word_length=4,
account_name_min_word_length=6,
min_alpha=5,
min_character_types=5,
max_length=25,
min_length=8,
max_repeated_chars=3,
min_lower=8,
min_numeric=8,
min_special=8,
min_upper=8,
password_expiration=8,
default_policy=True,
enable_passwd_expiration=True,
require_strong_authn=True,
require_strong_auth_off_network=True,
require_strong_auth_untrusted_geographies=True,
use_account_attributes=False,
use_dictionary=False,
use_identity_attributes=False,
validate_against_account_id=False,
validate_against_account_name=True,
created='',
modified='',
source_ids=[2c91808382ffee0b01830de154f14034, 2f98808382ffee0b01830de154f12134]
)

```
[[Back to top]](#) 

