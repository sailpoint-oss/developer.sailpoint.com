---
id: v1-parameterstoragejsonpatch-v1
title: ParameterstoragejsonpatchV1
pagination_label: ParameterstoragejsonpatchV1
sidebar_label: ParameterstoragejsonpatchV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'ParameterstoragejsonpatchV1', 'v1ParameterstoragejsonpatchV1']
slug: /tools/sdk/typescript/parameter_storage/models/parameterstoragejsonpatch-v1
tags: ['SDK', 'Software Development Kit', 'ParameterstoragejsonpatchV1', 'v1ParameterstoragejsonpatchV1']
---

# ParameterstoragejsonpatchV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**op** | `string` | The operation to perform (add, remove, replace, move, copy, test) | [default to undefined]
**path** | `string` | A JSON-Pointer describing the target location | [default to undefined]
**value** | **(optional)** `any` | The value to be used within the operations. Required for add/replace/test. | [default to undefined]
**from** | **(optional)** `string` | A JSON-Pointer describing the source location for move/copy. | [default to undefined]

