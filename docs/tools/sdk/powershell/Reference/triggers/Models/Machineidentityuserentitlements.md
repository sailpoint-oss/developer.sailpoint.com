---
id: machineidentityuserentitlements
title: Machineidentityuserentitlements
pagination_label: Machineidentityuserentitlements
sidebar_label: Machineidentityuserentitlements
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Machineidentityuserentitlements', 'Machineidentityuserentitlements'] 
slug: /tools/sdk/powershell/triggers/models/machineidentityuserentitlements
tags: ['SDK', 'Software Development Kit', 'Machineidentityuserentitlements', 'Machineidentityuserentitlements']
---


# Machineidentityuserentitlements

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EntitlementId** | **String** | Entitlement identifier. | [required]
**DisplayName** | **String** | Display name of the entitlement. | [required]
**Source** | [**Machineidentitysourcereference**](machineidentitysourcereference) |  | [required]

## Examples

- Prepare the resource
```powershell
$Machineidentityuserentitlements = Initialize-Machineidentityuserentitlements  -EntitlementId 2509f650c20a3ab5956be70f6f136fbc `
 -DisplayName CN=Engineering-test-org3,OU=megapod-useast1-test-org3,OU=org-data-service,DC=TestAutomationAD,DC=local `
 -Source null
```

- Convert the resource to JSON
```powershell
$Machineidentityuserentitlements | ConvertTo-JSON
```


[[Back to top]](#) 

