---
id: v1-accessprofilebulkdeleteresponse-v1
title: AccessprofilebulkdeleteresponseV1
pagination_label: AccessprofilebulkdeleteresponseV1
sidebar_label: AccessprofilebulkdeleteresponseV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'AccessprofilebulkdeleteresponseV1', 'v1AccessprofilebulkdeleteresponseV1']
slug: /tools/sdk/typescript/access_profiles/models/accessprofilebulkdeleteresponse-v1
tags: ['SDK', 'Software Development Kit', 'AccessprofilebulkdeleteresponseV1', 'v1AccessprofilebulkdeleteresponseV1']
---

# AccessprofilebulkdeleteresponseV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**taskId** | **(optional)** `string` | ID of the task which is executing the bulk deletion. This can be passed to the **_/task-status** API to track status. | [default to undefined]
**pending** | **(optional)** `Array<string>` | List of IDs of Access Profiles which are pending deletion. | [default to undefined]
**inUse** | **(optional)** `Array<AccessprofileusageV1>` | List of usages of Access Profiles targeted for deletion. | [default to undefined]

