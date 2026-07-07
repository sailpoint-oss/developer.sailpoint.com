---
id: jitactivationactivateresponse
title: Jitactivationactivateresponse
pagination_label: Jitactivationactivateresponse
sidebar_label: Jitactivationactivateresponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Jitactivationactivateresponse', 'Jitactivationactivateresponse'] 
slug: /tools/sdk/powershell/jitactivations/models/jitactivationactivateresponse
tags: ['SDK', 'Software Development Kit', 'Jitactivationactivateresponse', 'Jitactivationactivateresponse']
---


# Jitactivationactivateresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Workflow or business identifier for this activation. | [required]
**ActivationId** | **String** | Persistent activation record identifier for this JIT activation. | [required]
**ConnectionId** | **String** | Entitlement connection identifier for the activation. | [required]
**ActivationPeriodMins** | **Int32** | Activation duration in minutes for this workflow. | [required]
**Status** | [**Activationworkflowstatus**](activationworkflowstatus) |  | [required]
**StartTime** | **System.DateTime** | Time when the activation workflow was started (ISO-8601). | [required]

## Examples

- Prepare the resource
```powershell
$Jitactivationactivateresponse = Initialize-Jitactivationactivateresponse  -Id jit-activation-abc123 `
 -ActivationId 8a9b0c1d-2e3f-4a5b-6c7d-8e9f0a1b2c3d `
 -ConnectionId 757fb803-9024-5861-e510-83a56e4c5bd3 `
 -ActivationPeriodMins 120 `
 -Status null `
 -StartTime 2025-10-11T21:23:15Z
```

- Convert the resource to JSON
```powershell
$Jitactivationactivateresponse | ConvertTo-JSON
```


[[Back to top]](#) 

