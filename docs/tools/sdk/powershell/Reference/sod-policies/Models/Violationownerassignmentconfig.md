---
id: violationownerassignmentconfig
title: Violationownerassignmentconfig
pagination_label: Violationownerassignmentconfig
sidebar_label: Violationownerassignmentconfig
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Violationownerassignmentconfig', 'Violationownerassignmentconfig'] 
slug: /tools/sdk/powershell/sodpolicies/models/violationownerassignmentconfig
tags: ['SDK', 'Software Development Kit', 'Violationownerassignmentconfig', 'Violationownerassignmentconfig']
---


# Violationownerassignmentconfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AssignmentRule** |  **Enum** [  "MANAGER",    "STATIC" ] | Details about the violations owner. MANAGER - identity's manager STATIC - Governance Group or Identity | [optional] 
**OwnerRef** | [**ViolationownerassignmentconfigOwnerRef**](violationownerassignmentconfig-owner-ref) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Violationownerassignmentconfig = Initialize-Violationownerassignmentconfig  -AssignmentRule MANAGER `
 -OwnerRef null
```

- Convert the resource to JSON
```powershell
$Violationownerassignmentconfig | ConvertTo-JSON
```


[[Back to top]](#) 

