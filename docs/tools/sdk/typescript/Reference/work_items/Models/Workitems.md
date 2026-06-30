---
id: v1-workitems-v1
title: WorkitemsV1
pagination_label: WorkitemsV1
sidebar_label: WorkitemsV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'WorkitemsV1', 'v1WorkitemsV1']
slug: /tools/sdk/typescript/work_items/models/workitems-v1
tags: ['SDK', 'Software Development Kit', 'WorkitemsV1', 'v1WorkitemsV1']
---

# WorkitemsV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | ID of the work item | [default to undefined]
**requesterId** | **(optional)** `string` | ID of the requester | [default to undefined]
**requesterDisplayName** | **(optional)** `string` | The displayname of the requester | [default to undefined]
**ownerId** | **(optional)** `string` | The ID of the owner | [default to undefined]
**ownerName** | **(optional)** `string` | The name of the owner | [default to undefined]
**created** | **(optional)** `string` | Time when the work item was created | [default to undefined]
**modified** | **(optional)** `string` | Time when the work item was last updated | [default to undefined]
**description** | **(optional)** `string` | The description of the work item | [default to undefined]
**state** | **(optional)** `WorkitemstatemanualworkitemsV1` |  | [default to undefined]
**type** | **(optional)** `WorkitemtypemanualworkitemsV1` |  | [default to undefined]
**remediationItems** | **(optional)** `Array<RemediationitemdetailsV1>` | A list of remediation items | [default to undefined]
**approvalItems** | **(optional)** `Array<ApprovalitemdetailsV1>` | A list of items that need to be approved | [default to undefined]
**name** | **(optional)** `string` | The work item name | [default to undefined]
**completed** | **(optional)** `string` | The time at which the work item completed | [default to undefined]
**numItems** | **(optional)** `number` | The number of items in the work item | [default to undefined]
**form** | **(optional)** `WorkitemsFormV1` |  | [default to undefined]
**errors** | **(optional)** `Array<string>` | An array of errors that ocurred during the work item | [default to undefined]

