---
id: v1-accountunlockrequest-v1
title: AccountunlockrequestV1
pagination_label: AccountunlockrequestV1
sidebar_label: AccountunlockrequestV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'AccountunlockrequestV1', 'v1AccountunlockrequestV1']
slug: /tools/sdk/typescript/accounts/models/accountunlockrequest-v1
tags: ['SDK', 'Software Development Kit', 'AccountunlockrequestV1', 'v1AccountunlockrequestV1']
---

# AccountunlockrequestV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**externalVerificationId** | **(optional)** `string` | If set, an external process validates that the user wants to proceed with this request. | [default to undefined]
**unlockIDNAccount** | **(optional)** `boolean` | If set, the IDN account is unlocked after the workflow completes. | [default to undefined]
**forceProvisioning** | **(optional)** `boolean` | If set, provisioning updates the account attribute at the source.   This option is used when the account is not synced to ensure the attribute is updated. | [default to undefined]

