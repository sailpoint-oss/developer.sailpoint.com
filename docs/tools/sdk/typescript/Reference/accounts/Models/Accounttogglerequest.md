---
id: v1-accounttogglerequest-v1
title: AccounttogglerequestV1
pagination_label: AccounttogglerequestV1
sidebar_label: AccounttogglerequestV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'AccounttogglerequestV1', 'v1AccounttogglerequestV1']
slug: /tools/sdk/typescript/accounts/models/accounttogglerequest-v1
tags: ['SDK', 'Software Development Kit', 'AccounttogglerequestV1', 'v1AccounttogglerequestV1']
---

# AccounttogglerequestV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**externalVerificationId** | **(optional)** `string` | If set, an external process validates that the user wants to proceed with this request. | [default to undefined]
**forceProvisioning** | **(optional)** `boolean` | If set, provisioning updates the account attribute at the source.   This option is used when the account is not synced to ensure the attribute is updated. Providing \'true\' for an unlocked account will add and process \'Unlock\' operation by the workflow. | [default to undefined]

