---
id: jitactivationactivaterequest
title: Jitactivationactivaterequest
pagination_label: Jitactivationactivaterequest
sidebar_label: Jitactivationactivaterequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Jitactivationactivaterequest', 'Jitactivationactivaterequest'] 
slug: /tools/sdk/powershell/jitactivations/models/jitactivationactivaterequest
tags: ['SDK', 'Software Development Kit', 'Jitactivationactivaterequest', 'Jitactivationactivaterequest']
---


# Jitactivationactivaterequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ConnectionId** | **String** | Entitlement connection identifier for the activation. | [required]
**ActivationPeriodMins** | **Int32** | Requested activation duration in minutes. | [required]

## Examples

- Prepare the resource
```powershell
$Jitactivationactivaterequest = Initialize-Jitactivationactivaterequest  -ConnectionId 757fb803-9024-5861-e510-83a56e4c5bd3 `
 -ActivationPeriodMins 120
```

- Convert the resource to JSON
```powershell
$Jitactivationactivaterequest | ConvertTo-JSON
```


[[Back to top]](#) 

