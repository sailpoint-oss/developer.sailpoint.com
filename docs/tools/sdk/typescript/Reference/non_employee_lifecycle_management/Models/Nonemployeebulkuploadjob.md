---
id: v1-nonemployeebulkuploadjob-v1
title: NonemployeebulkuploadjobV1
pagination_label: NonemployeebulkuploadjobV1
sidebar_label: NonemployeebulkuploadjobV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'NonemployeebulkuploadjobV1', 'v1NonemployeebulkuploadjobV1']
slug: /tools/sdk/typescript/non_employee_lifecycle_management/models/nonemployeebulkuploadjob-v1
tags: ['SDK', 'Software Development Kit', 'NonemployeebulkuploadjobV1', 'v1NonemployeebulkuploadjobV1']
---

# NonemployeebulkuploadjobV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | The bulk upload job\'s ID. (UUID) | [default to undefined]
**sourceId** | **(optional)** `string` | The ID of the source to bulk-upload non-employees to. (UUID) | [default to undefined]
**created** | **(optional)** `string` | The date-time the job was submitted. | [default to undefined]
**modified** | **(optional)** `string` | The date-time that the job was last updated. | [default to undefined]
**status** | **(optional)** `string` | Returns the following values indicating the progress or result of the bulk upload job. \"PENDING\" means the job is queued and waiting to be processed. \"IN_PROGRESS\" means the job is currently being processed. \"COMPLETED\" means the job has been completed without any errors. \"ERROR\" means the job failed to process with errors.  | [default to undefined]

