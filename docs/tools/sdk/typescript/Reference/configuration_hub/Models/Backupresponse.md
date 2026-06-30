---
id: v1-backupresponse-v1
title: BackupresponseV1
pagination_label: BackupresponseV1
sidebar_label: BackupresponseV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'BackupresponseV1', 'v1BackupresponseV1']
slug: /tools/sdk/typescript/configuration_hub/models/backupresponse-v1
tags: ['SDK', 'Software Development Kit', 'BackupresponseV1', 'v1BackupresponseV1']
---

# BackupresponseV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**jobId** | **(optional)** `string` | Unique id assigned to this backup. | [default to undefined]
**status** | **(optional)** `string` | Status of the backup. | [default to undefined]
**type** | **(optional)** `string` | Type of the job, will always be BACKUP for this type of job. | [default to undefined]
**tenant** | **(optional)** `string` | The name of the tenant performing the upload | [default to undefined]
**requesterName** | **(optional)** `string` | The name of the requester. | [default to undefined]
**fileExists** | **(optional)** `boolean` | Whether or not a file was created and stored for this backup. | [default to true]
**created** | **(optional)** `string` | The time the job was started. | [default to undefined]
**modified** | **(optional)** `string` | The time of the last update to the job. | [default to undefined]
**completed** | **(optional)** `string` | The time the job was completed. | [default to undefined]
**name** | **(optional)** `string` | The name assigned to the upload file in the request body. | [default to undefined]
**userCanDelete** | **(optional)** `boolean` | Whether this backup can be deleted by a regular user. | [default to true]
**isPartial** | **(optional)** `boolean` | Whether this backup contains all supported object types or only some of them. | [default to false]
**backupType** | **(optional)** `string` | Denotes how this backup was created. - MANUAL - The backup was created by a user. - AUTOMATED - The backup was created by devops. - AUTOMATED_DRAFT - The backup was created during a draft process. - UPLOADED - The backup was created by uploading an existing configuration file. | [default to undefined]
**_options** | **(optional)** `BackupoptionsV1` |  | [default to undefined]
**hydrationStatus** | **(optional)** `string` | Whether the object details of this backup are ready. | [default to undefined]
**totalObjectCount** | **(optional)** `number` | Number of objects contained in this backup. | [default to undefined]
**cloudStorageStatus** | **(optional)** `string` | Whether this backup has been transferred to a customer storage location. | [default to undefined]

