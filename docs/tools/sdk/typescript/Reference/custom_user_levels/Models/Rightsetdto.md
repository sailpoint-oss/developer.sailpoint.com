---
id: v1-rightsetdto-v1
title: RightsetdtoV1
pagination_label: RightsetdtoV1
sidebar_label: RightsetdtoV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'RightsetdtoV1', 'v1RightsetdtoV1']
slug: /tools/sdk/typescript/custom_user_levels/models/rightsetdto-v1
tags: ['SDK', 'Software Development Kit', 'RightsetdtoV1', 'v1RightsetdtoV1']
---

# RightsetdtoV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | The unique identifier of the RightSet. | [default to undefined]
**name** | **(optional)** `string` | The human-readable name of the RightSet. | [default to undefined]
**description** | **(optional)** `string` | A human-readable description of the RightSet. | [default to undefined]
**category** | **(optional)** `string` | The category of the RightSet. | [default to undefined]
**rights** | **(optional)** `Array<string>` | Right is the most granular unit that determines specific API permissions, this is a list of rights associated with the RightSet. | [default to undefined]
**rightSetIds** | **(optional)** `Array<string>` | List of unique identifiers for related RightSets, current RightSet contains rights from these RightSets. | [default to undefined]
**uiAssignableChildRightSetIds** | **(optional)** `Array<string>` | List of unique identifiers for UI-assignable child RightSets, used to build UI components. | [default to undefined]
**uiAssignable** | **(optional)** `boolean` | Indicates whether the RightSet is UI-assignable. | [default to false]
**translatedName** | **(optional)** `string` | The translated name of the RightSet. | [default to undefined]
**translatedDescription** | **(optional)** `string` | The translated description of the RightSet. | [default to undefined]
**parentId** | **(optional)** `string` | The unique identifier of the parent RightSet for UI Assignable RightSet. | [default to undefined]

