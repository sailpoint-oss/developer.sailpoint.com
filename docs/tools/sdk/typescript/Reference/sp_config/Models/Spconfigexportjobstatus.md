---
id: v1-spconfigexportjobstatus-v1
title: SpconfigexportjobstatusV1
pagination_label: SpconfigexportjobstatusV1
sidebar_label: SpconfigexportjobstatusV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'SpconfigexportjobstatusV1', 'v1SpconfigexportjobstatusV1']
slug: /tools/sdk/typescript/sp_config/models/spconfigexportjobstatus-v1
tags: ['SDK', 'Software Development Kit', 'SpconfigexportjobstatusV1', 'v1SpconfigexportjobstatusV1']
---

# SpconfigexportjobstatusV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**jobId** | `string` | Unique id assigned to this job. | [default to undefined]
**status** | `string` | Status of the job. | [default to undefined]
**type** | `string` | Type of the job, either export or import. | [default to undefined]
**expiration** | **(optional)** `string` | The time until which the artifacts will be available for download. | [default to undefined]
**created** | `string` | The time the job was started. | [default to undefined]
**modified** | `string` | The time of the last update to the job. | [default to undefined]
**description** | **(optional)** `string` | Optional user defined description/name for export job. | [default to undefined]
**completed** | **(optional)** `string` | The time the job was completed. | [default to undefined]

