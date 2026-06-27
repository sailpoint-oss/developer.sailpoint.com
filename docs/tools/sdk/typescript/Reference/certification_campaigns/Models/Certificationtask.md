---
id: v1-certificationtask-v1
title: CertificationtaskV1
pagination_label: CertificationtaskV1
sidebar_label: CertificationtaskV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'CertificationtaskV1', 'v1CertificationtaskV1']
slug: /tools/sdk/typescript/certification_campaigns/models/certificationtask-v1
tags: ['SDK', 'Software Development Kit', 'CertificationtaskV1', 'v1CertificationtaskV1']
---

# CertificationtaskV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | The ID of the certification task. | [default to undefined]
**type** | **(optional)** `string` | The type of the certification task. More values may be added in the future. | [default to undefined]
**targetType** | **(optional)** `string` | The type of item that is being operated on by this task whose ID is stored in the targetId field. | [default to undefined]
**targetId** | **(optional)** `string` | The ID of the item being operated on by this task. | [default to undefined]
**status** | **(optional)** `string` | The status of the task. | [default to undefined]
**errors** | **(optional)** `Array<ErrormessagedtoV1>` | List of error messages | [default to undefined]
**reassignmentTrailDTOs** | **(optional)** `Array<ReassignmenttraildtoV1>` | Reassignment trails that lead to self certification identity | [default to undefined]
**created** | **(optional)** `string` | The date and time on which this task was created. | [default to undefined]

