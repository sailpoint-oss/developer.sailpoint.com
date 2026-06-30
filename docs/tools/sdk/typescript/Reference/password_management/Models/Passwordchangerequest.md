---
id: v1-passwordchangerequest-v1
title: PasswordchangerequestV1
pagination_label: PasswordchangerequestV1
sidebar_label: PasswordchangerequestV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'PasswordchangerequestV1', 'v1PasswordchangerequestV1']
slug: /tools/sdk/typescript/password_management/models/passwordchangerequest-v1
tags: ['SDK', 'Software Development Kit', 'PasswordchangerequestV1', 'v1PasswordchangerequestV1']
---

# PasswordchangerequestV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identityId** | **(optional)** `string` | The identity ID that requested the password change | [default to undefined]
**encryptedPassword** | **(optional)** `string` | The RSA encrypted password | [default to undefined]
**publicKeyId** | **(optional)** `string` | The encryption key ID | [default to undefined]
**accountId** | **(optional)** `string` | Account ID of the account This is specified per account schema in the source configuration. It is used to distinguish accounts. More info can be found here https://community.sailpoint.com/t5/IdentityNow-Connectors/How-do-I-designate-an-account-attribute-as-the-Account-ID-for-a/ta-p/80350 | [default to undefined]
**sourceId** | **(optional)** `string` | The ID of the source for which identity is requesting the password change | [default to undefined]

