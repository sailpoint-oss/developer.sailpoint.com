---
id: v1-nonemployeeschemaattribute-v1
title: NonemployeeschemaattributeV1
pagination_label: NonemployeeschemaattributeV1
sidebar_label: NonemployeeschemaattributeV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'NonemployeeschemaattributeV1', 'v1NonemployeeschemaattributeV1']
slug: /tools/sdk/typescript/non_employee_lifecycle_management/models/nonemployeeschemaattribute-v1
tags: ['SDK', 'Software Development Kit', 'NonemployeeschemaattributeV1', 'v1NonemployeeschemaattributeV1']
---

# NonemployeeschemaattributeV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | Schema Attribute Id | [default to undefined]
**system** | **(optional)** `boolean` | True if this schema attribute is mandatory on all non-employees sources. | [default to false]
**modified** | **(optional)** `string` | When the schema attribute was last modified. | [default to undefined]
**created** | **(optional)** `string` | When the schema attribute was created. | [default to undefined]
**type** | `NonemployeeschemaattributetypeV1` |  | [default to undefined]
**label** | `string` | Label displayed on the UI for this schema attribute. | [default to undefined]
**technicalName** | `string` | The technical name of the attribute. Must be unique per source. | [default to undefined]
**helpText** | **(optional)** `string` | help text displayed by UI. | [default to undefined]
**placeholder** | **(optional)** `string` | Hint text that fills UI box. | [default to undefined]
**required** | **(optional)** `boolean` | If true, the schema attribute is required for all non-employees in the source | [default to false]

