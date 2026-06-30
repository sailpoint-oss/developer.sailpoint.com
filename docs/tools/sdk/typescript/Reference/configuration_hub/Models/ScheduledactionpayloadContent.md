---
id: v1-scheduledactionpayload-content-v1
title: ScheduledactionpayloadContentV1
pagination_label: ScheduledactionpayloadContentV1
sidebar_label: ScheduledactionpayloadContentV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'ScheduledactionpayloadContentV1', 'v1ScheduledactionpayloadContentV1']
slug: /tools/sdk/typescript/configuration_hub/models/scheduledactionpayload-content-v1
tags: ['SDK', 'Software Development Kit', 'ScheduledactionpayloadContentV1', 'v1ScheduledactionpayloadContentV1']
---

# ScheduledactionpayloadContentV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | `string` | Name of the scheduled action (maximum 50 characters). | [default to undefined]
**backupOptions** | **(optional)** `ScheduledactionpayloadContentBackupOptionsV1` |  | [default to undefined]
**sourceBackupId** | **(optional)** `string` | ID of the source backup. Required for CREATE_DRAFT jobs. | [default to undefined]
**sourceTenant** | **(optional)** `string` | Source tenant identifier. Required for CREATE_DRAFT jobs. | [default to undefined]
**draftId** | **(optional)** `string` | ID of the draft to be deployed. Required for CONFIG_DEPLOY_DRAFT jobs. | [default to undefined]

