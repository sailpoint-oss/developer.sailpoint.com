---
id: v1-passwordpolicyv3dto-v1
title: Passwordpolicyv3dtoV1
pagination_label: Passwordpolicyv3dtoV1
sidebar_label: Passwordpolicyv3dtoV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Passwordpolicyv3dtoV1', 'v1Passwordpolicyv3dtoV1']
slug: /tools/sdk/typescript/password_policies/models/passwordpolicyv3dto-v1
tags: ['SDK', 'Software Development Kit', 'Passwordpolicyv3dtoV1', 'v1Passwordpolicyv3dtoV1']
---

# Passwordpolicyv3dtoV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | The password policy Id. | [default to undefined]
**description** | **(optional)** `string` | Description for current password policy. | [default to undefined]
**name** | **(optional)** `string` | The name of the password policy. | [default to undefined]
**dateCreated** | **(optional)** `number` | Date the Password Policy was created. | [default to undefined]
**lastUpdated** | **(optional)** `number` | Date the Password Policy was updated. | [default to undefined]
**firstExpirationReminder** | **(optional)** `number` | The number of days before expiration remaninder. | [default to undefined]
**accountIdMinWordLength** | **(optional)** `number` | The minimun length of account Id. By default is equals to -1. | [default to undefined]
**accountNameMinWordLength** | **(optional)** `number` | The minimun length of account name. By default is equals to -1. | [default to undefined]
**minAlpha** | **(optional)** `number` | Maximum alpha. By default is equals to 0. | [default to undefined]
**minCharacterTypes** | **(optional)** `number` | MinCharacterTypes. By default is equals to -1. | [default to undefined]
**maxLength** | **(optional)** `number` | Maximum length of the password. | [default to undefined]
**minLength** | **(optional)** `number` | Minimum length of the password. By default is equals to 0. | [default to undefined]
**maxRepeatedChars** | **(optional)** `number` | Maximum repetition of the same character in the password. By default is equals to -1. | [default to undefined]
**minLower** | **(optional)** `number` | Minimum amount of lower case character in the password. By default is equals to 0. | [default to undefined]
**minNumeric** | **(optional)** `number` | Minimum amount of numeric characters in the password. By default is equals to 0. | [default to undefined]
**minSpecial** | **(optional)** `number` | Minimum amount of special symbols in the password. By default is equals to 0. | [default to undefined]
**minUpper** | **(optional)** `number` | Minimum amount of upper case symbols in the password. By default is equals to 0. | [default to undefined]
**passwordExpiration** | **(optional)** `number` | Number of days before current password expires. By default is equals to 90. | [default to undefined]
**defaultPolicy** | **(optional)** `boolean` | Defines whether this policy is default or not. Default policy is created automatically when an org is setup. This field is false by default. | [default to false]
**enablePasswdExpiration** | **(optional)** `boolean` | Defines whether this policy is enabled to expire or not. This field is false by default. | [default to false]
**requireStrongAuthn** | **(optional)** `boolean` | Defines whether this policy require strong Auth or not. This field is false by default. | [default to false]
**requireStrongAuthOffNetwork** | **(optional)** `boolean` | Defines whether this policy require strong Auth of network or not. This field is false by default. | [default to false]
**requireStrongAuthUntrustedGeographies** | **(optional)** `boolean` | Defines whether this policy require strong Auth for untrusted geographies. This field is false by default. | [default to false]
**useAccountAttributes** | **(optional)** `boolean` | Defines whether this policy uses account attributes or not. This field is false by default. | [default to false]
**useDictionary** | **(optional)** `boolean` | Defines whether this policy uses dictionary or not. This field is false by default. | [default to false]
**useIdentityAttributes** | **(optional)** `boolean` | Defines whether this policy uses identity attributes or not. This field is false by default. | [default to false]
**validateAgainstAccountId** | **(optional)** `boolean` | Defines whether this policy validate against account id or not. This field is false by default. | [default to false]
**validateAgainstAccountName** | **(optional)** `boolean` | Defines whether this policy validate against account name or not. This field is false by default. | [default to false]
**created** | **(optional)** `string` |  | [default to undefined]
**modified** | **(optional)** `string` |  | [default to undefined]
**sourceIds** | **(optional)** `Array<string>` | List of sources IDs managed by this password policy. | [default to undefined]

