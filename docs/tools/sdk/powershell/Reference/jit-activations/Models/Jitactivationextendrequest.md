---
id: jitactivationextendrequest
title: Jitactivationextendrequest
pagination_label: Jitactivationextendrequest
sidebar_label: Jitactivationextendrequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Jitactivationextendrequest', 'Jitactivationextendrequest'] 
slug: /tools/sdk/powershell/jitactivations/models/jitactivationextendrequest
tags: ['SDK', 'Software Development Kit', 'Jitactivationextendrequest', 'Jitactivationextendrequest']
---


# Jitactivationextendrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ConnectionId** | **String** | Entitlement connection identifier for the activation to extend. | [required]
**ActivationPeriodExtensionMins** | **Int32** | Number of minutes to extend the activation period. | [required]

## Examples

- Prepare the resource
```powershell
$Jitactivationextendrequest = Initialize-Jitactivationextendrequest  -ConnectionId 757fb803-9024-5861-e510-83a56e4c5bd3 `
 -ActivationPeriodExtensionMins 120
```

- Convert the resource to JSON
```powershell
$Jitactivationextendrequest | ConvertTo-JSON
```


[[Back to top]](#) 

