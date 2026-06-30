---
id: v1-importoptions-v1
title: ImportoptionsV1
pagination_label: ImportoptionsV1
sidebar_label: ImportoptionsV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'ImportoptionsV1', 'v1ImportoptionsV1']
slug: /tools/sdk/typescript/sp_config/models/importoptions-v1
tags: ['SDK', 'Software Development Kit', 'ImportoptionsV1', 'v1ImportoptionsV1']
---

# ImportoptionsV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**excludeTypes** | **(optional)** `Array<string>` | Object type names to be excluded from an sp-config export command. | [default to undefined]
**includeTypes** | **(optional)** `Array<string>` | Object type names to be included in an sp-config export command. IncludeTypes takes precedence over excludeTypes. | [default to undefined]
**objectOptions** | **(optional)**  | Additional options targeting specific objects related to each item in the includeTypes field | [default to undefined]
**defaultReferences** | **(optional)** `Array<string>` | List of object types that can be used to resolve references on import. | [default to undefined]
**excludeBackup** | **(optional)** `boolean` | By default, every import will first export all existing objects supported by sp-config as a backup before the import is attempted. If excludeBackup is true, the backup will not be performed. | [default to false]

