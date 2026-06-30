---
id: v1-draftresponse-v1
title: DraftresponseV1
pagination_label: DraftresponseV1
sidebar_label: DraftresponseV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'DraftresponseV1', 'v1DraftresponseV1']
slug: /tools/sdk/typescript/configuration_hub/models/draftresponse-v1
tags: ['SDK', 'Software Development Kit', 'DraftresponseV1', 'v1DraftresponseV1']
---

# DraftresponseV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**jobId** | **(optional)** `string` | Unique id assigned to this job. | [default to undefined]
**status** | **(optional)** `string` | Status of the job. | [default to undefined]
**type** | **(optional)** `string` | Type of the job, will always be CREATE_DRAFT for this type of job. | [default to undefined]
**message** | **(optional)** `string` | Message providing information about the outcome of the draft process. | [default to undefined]
**requesterName** | **(optional)** `string` | The name of user that that initiated the draft process. | [default to undefined]
**fileExists** | **(optional)** `boolean` | Whether or not a file was generated for this draft. | [default to true]
**created** | **(optional)** `string` | The time the job was started. | [default to undefined]
**modified** | **(optional)** `string` | The time of the last update to the job. | [default to undefined]
**completed** | **(optional)** `string` | The time the job was completed. | [default to undefined]
**name** | **(optional)** `string` | Name of the draft. | [default to undefined]
**sourceTenant** | **(optional)** `string` | Tenant owner of the backup from which the draft was generated. | [default to undefined]
**sourceBackupId** | **(optional)** `string` | Id of the backup from which the draft was generated. | [default to undefined]
**sourceBackupName** | **(optional)** `string` | Name of the backup from which the draft was generated. | [default to undefined]
**mode** | **(optional)** `string` | Denotes the origin of the source backup from which the draft was generated. - RESTORE - Same tenant. - PROMOTE - Different tenant. - UPLOAD - Uploaded configuration. | [default to undefined]
**approvalStatus** | **(optional)** `string` | Approval status of the draft used to determine whether or not the draft can be deployed. | [default to undefined]
**approvalComment** | **(optional)** `Array<ApprovalcommentV1>` | List of comments that have been exchanged between an approval requester and an approver. | [default to undefined]

