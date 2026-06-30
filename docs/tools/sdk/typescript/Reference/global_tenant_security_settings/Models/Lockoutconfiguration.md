---
id: v1-lockoutconfiguration-v1
title: LockoutconfigurationV1
pagination_label: LockoutconfigurationV1
sidebar_label: LockoutconfigurationV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'LockoutconfigurationV1', 'v1LockoutconfigurationV1']
slug: /tools/sdk/typescript/global_tenant_security_settings/models/lockoutconfiguration-v1
tags: ['SDK', 'Software Development Kit', 'LockoutconfigurationV1', 'v1LockoutconfigurationV1']
---

# LockoutconfigurationV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**maximumAttempts** | **(optional)** `number` | The maximum attempts allowed before lockout occurs. | [default to undefined]
**lockoutDuration** | **(optional)** `number` | The total time in minutes a user will be locked out. | [default to undefined]
**lockoutWindow** | **(optional)** `number` | A rolling window where authentication attempts in a series count towards the maximum before lockout occurs. | [default to undefined]

