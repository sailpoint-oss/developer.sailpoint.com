---
id: jitactivationextendresponse
title: Jitactivationextendresponse
pagination_label: Jitactivationextendresponse
sidebar_label: Jitactivationextendresponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Jitactivationextendresponse', 'Jitactivationextendresponse'] 
slug: /tools/sdk/powershell/jitactivations/models/jitactivationextendresponse
tags: ['SDK', 'Software Development Kit', 'Jitactivationextendresponse', 'Jitactivationextendresponse']
---


# Jitactivationextendresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Workflow or business identifier for this activation. | [required]
**ActivationId** | **String** | Persistent activation record identifier for this JIT activation. | [required]
**ConnectionId** | **String** | Entitlement connection identifier for the activation. | [required]
**ActivationPeriodExtensionMins** | **Int32** | Extension applied to the activation period, in minutes. | [required]
**Status** | [**Activationworkflowstatus**](activationworkflowstatus) |  | [required]
**StartTime** | **System.DateTime** | Time associated with this extend request (ISO-8601). | [required]

## Examples

- Prepare the resource
```powershell
$Jitactivationextendresponse = Initialize-Jitactivationextendresponse  -Id jit-activation-abc123 `
 -ActivationId 8a9b0c1d-2e3f-4a5b-6c7d-8e9f0a1b2c3d `
 -ConnectionId 757fb803-9024-5861-e510-83a56e4c5bd3 `
 -ActivationPeriodExtensionMins 120 `
 -Status null `
 -StartTime 2025-10-11T21:23:15Z
```

- Convert the resource to JSON
```powershell
$Jitactivationextendresponse | ConvertTo-JSON
```


[[Back to top]](#) 

