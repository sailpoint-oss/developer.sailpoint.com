---
id: v1-rolegetallbulkupdateresponse-v1
title: RolegetallbulkupdateresponseV1
pagination_label: RolegetallbulkupdateresponseV1
sidebar_label: RolegetallbulkupdateresponseV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'RolegetallbulkupdateresponseV1', 'v1RolegetallbulkupdateresponseV1']
slug: /tools/sdk/typescript/roles/models/rolegetallbulkupdateresponse-v1
tags: ['SDK', 'Software Development Kit', 'RolegetallbulkupdateresponseV1', 'v1RolegetallbulkupdateresponseV1']
---

# RolegetallbulkupdateresponseV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | ID of the task which is executing the bulk update. This also used in to the bulk-update/_** API to track status. | [default to undefined]
**type** | **(optional)** `string` | Type of the bulk update object. | [default to undefined]
**status** | **(optional)** `string` | The status of the bulk update request, only list unfinished request\'s status, the status could also checked by getBulkUpdateStatus API | [default to undefined]
**created** | **(optional)** `string` | Time when the bulk update request was created | [default to undefined]

