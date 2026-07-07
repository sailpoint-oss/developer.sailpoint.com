---
id: jitactivationdeactivaterequest
title: Jitactivationdeactivaterequest
pagination_label: Jitactivationdeactivaterequest
sidebar_label: Jitactivationdeactivaterequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Jitactivationdeactivaterequest', 'Jitactivationdeactivaterequest'] 
slug: /tools/sdk/powershell/jitactivations/models/jitactivationdeactivaterequest
tags: ['SDK', 'Software Development Kit', 'Jitactivationdeactivaterequest', 'Jitactivationdeactivaterequest']
---


# Jitactivationdeactivaterequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ConnectionId** | **String** | Entitlement connection identifier for the activation to deactivate. | [required]

## Examples

- Prepare the resource
```powershell
$Jitactivationdeactivaterequest = Initialize-Jitactivationdeactivaterequest  -ConnectionId 757fb803-9024-5861-e510-83a56e4c5bd3
```

- Convert the resource to JSON
```powershell
$Jitactivationdeactivaterequest | ConvertTo-JSON
```


[[Back to top]](#) 

