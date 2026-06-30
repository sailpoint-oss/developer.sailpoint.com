---
id: v1-scheduledactionresponse-content-v1
title: ScheduledactionresponseContentV1
pagination_label: ScheduledactionresponseContentV1
sidebar_label: ScheduledactionresponseContentV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'ScheduledactionresponseContentV1', 'v1ScheduledactionresponseContentV1']
slug: /tools/sdk/typescript/configuration_hub/models/scheduledactionresponse-content-v1
tags: ['SDK', 'Software Development Kit', 'ScheduledactionresponseContentV1', 'v1ScheduledactionresponseContentV1']
---

# ScheduledactionresponseContentV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **(optional)** `string` | Name of the scheduled action (maximum 50 characters). | [default to undefined]
**backupOptions** | **(optional)** `ScheduledactionresponseContentBackupOptionsV1` |  | [default to undefined]
**sourceBackupId** | **(optional)** `string` | ID of the source backup. Required for CREATE_DRAFT jobs only. | [default to undefined]
**sourceTenant** | **(optional)** `string` | Source tenant identifier. Required for CREATE_DRAFT jobs only. | [default to undefined]
**draftId** | **(optional)** `string` | ID of the draft to be deployed. Required for CONFIG_DEPLOY_DRAFT jobs only. | [default to undefined]

