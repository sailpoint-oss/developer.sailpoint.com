---
id: v1-autowritesetting-v1
title: AutowritesettingV1
pagination_label: AutowritesettingV1
sidebar_label: AutowritesettingV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'AutowritesettingV1', 'v1AutowritesettingV1']
slug: /tools/sdk/typescript/suggested_entitlement_description/models/autowritesetting-v1
tags: ['SDK', 'Software Development Kit', 'AutowritesettingV1', 'v1AutowritesettingV1']
---

# AutowritesettingV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **(optional)** `boolean` | Whether auto-write is currently enabled for the tenant | [default to false]
**includedSourceIds** | **(optional)** `Array<string>` | Source IDs in the allowlist. Empty array means not in allowlist mode. | [default to undefined]
**excludedSourceIds** | **(optional)** `Array<string>` | Source IDs to exclude from auto-write. Always applied. | [default to undefined]

