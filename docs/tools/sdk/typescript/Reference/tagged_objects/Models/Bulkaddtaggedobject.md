---
id: v1-bulkaddtaggedobject-v1
title: BulkaddtaggedobjectV1
pagination_label: BulkaddtaggedobjectV1
sidebar_label: BulkaddtaggedobjectV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'BulkaddtaggedobjectV1', 'v1BulkaddtaggedobjectV1']
slug: /tools/sdk/typescript/tagged_objects/models/bulkaddtaggedobject-v1
tags: ['SDK', 'Software Development Kit', 'BulkaddtaggedobjectV1', 'v1BulkaddtaggedobjectV1']
---

# BulkaddtaggedobjectV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**objectRefs** | **(optional)** `Array<TaggedobjectdtoV1>` |  | [default to undefined]
**tags** | **(optional)** `Array<string>` | Label to be applied to an Object | [default to undefined]
**operation** | **(optional)** `string` | If APPEND, tags are appended to the list of tags for the object. A 400 error is returned if this would add duplicate tags to the object.  If MERGE, tags are merged with the existing tags. Duplicate tags are silently ignored. | [default to OperationV1_Append]

