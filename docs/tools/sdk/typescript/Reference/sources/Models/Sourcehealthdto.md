---
id: v1-sourcehealthdto-v1
title: SourcehealthdtoV1
pagination_label: SourcehealthdtoV1
sidebar_label: SourcehealthdtoV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'SourcehealthdtoV1', 'v1SourcehealthdtoV1']
slug: /tools/sdk/typescript/sources/models/sourcehealthdto-v1
tags: ['SDK', 'Software Development Kit', 'SourcehealthdtoV1', 'v1SourcehealthdtoV1']
---

# SourcehealthdtoV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | the id of the Source | [readonly] [default to undefined]
**type** | **(optional)** `string` | Specifies the type of system being managed e.g. Active Directory, Workday, etc.. If you are creating a Delimited File source, you must set the `provisionasCsv` query parameter to `true`.  | [default to undefined]
**name** | **(optional)** `string` | the name of the source | [default to undefined]
**org** | **(optional)** `string` | source\'s org | [default to undefined]
**isAuthoritative** | **(optional)** `boolean` | Is the source authoritative | [default to undefined]
**isCluster** | **(optional)** `boolean` | Is the source in a cluster | [default to undefined]
**hostname** | **(optional)** `string` | source\'s hostname | [default to undefined]
**pod** | **(optional)** `string` | source\'s pod | [default to undefined]
**iqServiceVersion** | **(optional)** `string` | The version of the iqService | [default to undefined]
**status** | **(optional)** `string` | connection test result | [default to undefined]

