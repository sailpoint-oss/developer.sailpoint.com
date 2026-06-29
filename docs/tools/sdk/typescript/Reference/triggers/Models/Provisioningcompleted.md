---
id: v1-provisioningcompleted-v1
title: ProvisioningcompletedV1
pagination_label: ProvisioningcompletedV1
sidebar_label: ProvisioningcompletedV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'ProvisioningcompletedV1', 'v1ProvisioningcompletedV1']
slug: /tools/sdk/typescript/triggers/models/provisioningcompleted-v1
tags: ['SDK', 'Software Development Kit', 'ProvisioningcompletedV1', 'v1ProvisioningcompletedV1']
---

# ProvisioningcompletedV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**trackingNumber** | `string` | The reference number of the provisioning request. Useful for tracking status in the Account Activity search interface. | [default to undefined]
**sources** | `string` | One or more sources that the provisioning transaction(s) were done against.  Sources are comma separated. | [default to undefined]
**action** | **(optional)** `string` | Origin of where the provisioning request came from. | [default to undefined]
**errors** | **(optional)** `Array<string>` | A list of any accumulated error messages that occurred during provisioning. | [default to undefined]
**warnings** | **(optional)** `Array<string>` | A list of any accumulated warning messages that occurred during provisioning. | [default to undefined]
**recipient** | `ProvisioningcompletedRecipientV1` |  | [default to undefined]
**requester** | **(optional)** `ProvisioningcompletedRequesterV1` |  | [default to undefined]
**accountRequests** | `Array<ProvisioningcompletedAccountRequestsInnerV1>` | A list of provisioning instructions to be executed on a per-account basis. The order in which operations are executed may not always be predictable. | [default to undefined]

