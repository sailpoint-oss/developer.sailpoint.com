---
id: v1-jitactivationconfigresponse-v1
title: JitactivationconfigresponseV1
pagination_label: JitactivationconfigresponseV1
sidebar_label: JitactivationconfigresponseV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'JitactivationconfigresponseV1', 'v1JitactivationconfigresponseV1']
slug: /tools/sdk/typescript/jit_access/models/jitactivationconfigresponse-v1
tags: ['SDK', 'Software Development Kit', 'JitactivationconfigresponseV1', 'v1JitactivationconfigresponseV1']
---

# JitactivationconfigresponseV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | `string` | Unique identifier of this JIT activation configuration instance (persisted config id).  | [default to undefined]
**entitlementIds** | **(optional)** `Array<string>` | Entitlement IDs governed by JIT activation policy. May be a single-element array when only one entitlement is in scope.  | [default to undefined]
**maxActivationPeriodMins** | **(optional)** `number` | Maximum allowed JIT activation duration for a single grant, in minutes; null if unset. | [default to undefined]
**maxActivationPeriodExtensionMins** | **(optional)** `number` | Maximum allowed extension of an active JIT activation, in minutes; null if unset. | [default to undefined]
**defaultMaxActivationPeriodMins** | **(optional)** `number` | Default activation duration offered when a user requests JIT access, in minutes; null if unset. | [default to undefined]
**defaultMaxActivationPeriodExtensionMins** | **(optional)** `number` | Default extension duration offered for an active JIT activation, in minutes; null if unset. | [default to undefined]
**notificationRecipients** | **(optional)** `Array<string>` | Email addresses notified for JIT activation events (for example policy owners or a shared mailbox).  | [default to undefined]
**notificationTemplate** | **(optional)** `string` | Name or key of the email template used for JIT activation notifications; null if unset. | [default to undefined]
**applyToFutureAssignments** | `boolean` | Whether the policy applies to future entitlement assignments. | [default to undefined]

