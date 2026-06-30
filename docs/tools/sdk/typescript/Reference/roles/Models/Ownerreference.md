---
id: v1-ownerreference-v1
title: OwnerreferenceV1
pagination_label: OwnerreferenceV1
sidebar_label: OwnerreferenceV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'OwnerreferenceV1', 'v1OwnerreferenceV1']
slug: /tools/sdk/typescript/roles/models/ownerreference-v1
tags: ['SDK', 'Software Development Kit', 'OwnerreferenceV1', 'v1OwnerreferenceV1']
---

# OwnerreferenceV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **(optional)** `string` | Owner type. This field must be either left null or set to \'IDENTITY\' on input, otherwise a 400 Bad Request error will result. | [default to undefined]
**id** | **(optional)** `string` | Owner\'s identity ID. | [default to undefined]
**name** | **(optional)** `string` | Owner\'s name. It may be left null or omitted in a POST or PATCH. If set, it must match the current value of the owner\'s display name, otherwise a 400 Bad Request error will result. | [default to undefined]

