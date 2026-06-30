---
id: v1-exportpayload-v1
title: ExportpayloadV1
pagination_label: ExportpayloadV1
sidebar_label: ExportpayloadV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'ExportpayloadV1', 'v1ExportpayloadV1']
slug: /tools/sdk/typescript/sp_config/models/exportpayload-v1
tags: ['SDK', 'Software Development Kit', 'ExportpayloadV1', 'v1ExportpayloadV1']
---

# ExportpayloadV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **(optional)** `string` | Optional user defined description/name for export job. | [default to undefined]
**excludeTypes** | **(optional)** `Array<string>` | Object type names to be excluded from an sp-config export command. | [default to undefined]
**includeTypes** | **(optional)** `Array<string>` | Object type names to be included in an sp-config export command. IncludeTypes takes precedence over excludeTypes. | [default to undefined]
**objectOptions** | **(optional)**  | Additional options targeting specific objects related to each item in the includeTypes field | [default to undefined]

