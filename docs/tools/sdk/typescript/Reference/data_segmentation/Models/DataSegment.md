---
id: v1-data-segment-v1
title: DataSegmentV1
pagination_label: DataSegmentV1
sidebar_label: DataSegmentV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'DataSegmentV1', 'v1DataSegmentV1']
slug: /tools/sdk/typescript/data_segmentation/models/data-segment-v1
tags: ['SDK', 'Software Development Kit', 'DataSegmentV1', 'v1DataSegmentV1']
---

# DataSegmentV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | The segment\'s ID. | [default to undefined]
**name** | **(optional)** `string` | The segment\'s business name. | [default to undefined]
**created** | **(optional)** `string` | The time when the segment is created. | [default to undefined]
**modified** | **(optional)** `string` | The time when the segment is modified. | [default to undefined]
**description** | **(optional)** `string` | The segment\'s optional description. | [default to undefined]
**scopes** | **(optional)** `Array<ScopeV1>` | List of Scopes that are assigned to the segment | [default to undefined]
**memberSelection** | **(optional)** `Array<RefV1>` | List of Identities that are assigned to the segment | [default to undefined]
**memberFilter** | **(optional)** `VisibilitycriteriaV1` |  | [default to undefined]
**membership** | **(optional)** `MembershiptypeV1` |  | [default to undefined]
**enabled** | **(optional)** `boolean` | This boolean indicates whether the segment is currently active. Inactive segments have no effect. | [default to false]
**published** | **(optional)** `boolean` | This boolean indicates whether the segment is being applied to the accounts. If unpublished its being actively modified to until published | [default to false]

