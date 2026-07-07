---
id: v1-deployresponse-v1
title: DeployresponseV1
pagination_label: DeployresponseV1
sidebar_label: DeployresponseV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'DeployresponseV1', 'v1DeployresponseV1']
slug: /tools/sdk/typescript/configuration_hub/models/deployresponse-v1
tags: ['SDK', 'Software Development Kit', 'DeployresponseV1', 'v1DeployresponseV1']
---

# DeployresponseV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**jobId** | **(optional)** `string` | Unique id assigned to this job. | [default to undefined]
**status** | **(optional)** `string` | Status of the job. | [default to undefined]
**type** | **(optional)** `string` | Type of the job, will always be CONFIG_DEPLOY_DRAFT for this type of job. | [default to undefined]
**message** | **(optional)** `string` | Message providing information about the outcome of the deploy process. | [default to undefined]
**requesterName** | **(optional)** `string` | The name of the user that initiated the deploy process. | [default to undefined]
**fileExists** | **(optional)** `boolean` | Whether or not a results file was created and stored for this deploy. | [default to true]
**created** | **(optional)** `string` | The time the job was started. | [default to undefined]
**modified** | **(optional)** `string` | The time of the last update to the job. | [default to undefined]
**completed** | **(optional)** `string` | The time the job was completed. | [default to undefined]
**draftId** | **(optional)** `string` | The id of the draft that was used for this deploy. | [default to undefined]
**draftName** | **(optional)** `string` | The name of the draft that was used for this deploy. | [default to undefined]
**cloudStorageStatus** | **(optional)** `string` | Whether this deploy results file has been transferred to a customer storage location. | [default to undefined]

