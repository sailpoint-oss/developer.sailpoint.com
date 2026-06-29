---
id: v1-templatevariablesdto-v1
title: TemplatevariablesdtoV1
pagination_label: TemplatevariablesdtoV1
sidebar_label: TemplatevariablesdtoV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'TemplatevariablesdtoV1', 'v1TemplatevariablesdtoV1']
slug: /tools/sdk/typescript/notifications/models/templatevariablesdto-v1
tags: ['SDK', 'Software Development Kit', 'TemplatevariablesdtoV1', 'v1TemplatevariablesdtoV1']
---

# TemplatevariablesdtoV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **(optional)** `string` | The notification template key. | [default to undefined]
**medium** | **(optional)** `TemplatemediumdtoV1` |  | [default to undefined]
**globalVariables** | **(optional)** `Array<TemplatevariableV1>` | Global variables available to all templates for this tenant (e.g. __global.*, __recipient, __util.*, __dateTool.*, __esc.*). Includes both data variables and function-type helpers.  | [default to undefined]
**templateVariables** | **(optional)** `Array<TemplatevariableV1>` | Template-specific variables for the given key and medium (e.g. approverPath, requester, attributes). | [default to undefined]

