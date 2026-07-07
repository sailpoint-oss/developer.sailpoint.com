---
id: jitactivationconfigresponse
title: Jitactivationconfigresponse
pagination_label: Jitactivationconfigresponse
sidebar_label: Jitactivationconfigresponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Jitactivationconfigresponse', 'Jitactivationconfigresponse'] 
slug: /tools/sdk/powershell/jitaccess/models/jitactivationconfigresponse
tags: ['SDK', 'Software Development Kit', 'Jitactivationconfigresponse', 'Jitactivationconfigresponse']
---


# Jitactivationconfigresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Unique identifier of this JIT activation configuration instance (persisted config id).  | [required]
**EntitlementIds** | **[]String** | Entitlement IDs governed by JIT activation policy. May be a single-element array when only one entitlement is in scope.  | [optional] 
**MaxActivationPeriodMins** | **Int32** | Maximum allowed JIT activation duration for a single grant, in minutes; null if unset. | [optional] 
**MaxActivationPeriodExtensionMins** | **Int32** | Maximum allowed extension of an active JIT activation, in minutes; null if unset. | [optional] 
**DefaultMaxActivationPeriodMins** | **Int32** | Default activation duration offered when a user requests JIT access, in minutes; null if unset. | [optional] 
**DefaultMaxActivationPeriodExtensionMins** | **Int32** | Default extension duration offered for an active JIT activation, in minutes; null if unset. | [optional] 
**NotificationRecipients** | **[]String** | Email addresses notified for JIT activation events (for example policy owners or a shared mailbox).  | [optional] 
**NotificationTemplate** | **String** | Name or key of the email template used for JIT activation notifications; null if unset. | [optional] 
**ApplyToFutureAssignments** | **Boolean** | Whether the policy applies to future entitlement assignments. | [required]

## Examples

- Prepare the resource
```powershell
$Jitactivationconfigresponse = Initialize-Jitactivationconfigresponse  -Id 6d38a587-302a-41d1-a3b1-ffae2c25c960 `
 -EntitlementIds ["ae735f40-4de9-4163-801d-4a1444e59d35","38439bbc-264b-447b-acac-a182a466b0e9"] `
 -MaxActivationPeriodMins 120 `
 -MaxActivationPeriodExtensionMins 30 `
 -DefaultMaxActivationPeriodMins 60 `
 -DefaultMaxActivationPeriodExtensionMins 15 `
 -NotificationRecipients ["owner@example.com"] `
 -NotificationTemplate jit-activation-default `
 -ApplyToFutureAssignments true
```

- Convert the resource to JSON
```powershell
$Jitactivationconfigresponse | ConvertTo-JSON
```


[[Back to top]](#) 

