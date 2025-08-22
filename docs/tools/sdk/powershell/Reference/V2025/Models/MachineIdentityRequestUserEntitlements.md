---
id: v2025-machine-identity-request-user-entitlements
title: MachineIdentityRequestUserEntitlements
pagination_label: MachineIdentityRequestUserEntitlements
sidebar_label: MachineIdentityRequestUserEntitlements
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'MachineIdentityRequestUserEntitlements', 'V2025MachineIdentityRequestUserEntitlements'] 
slug: /tools/sdk/powershell/v2025/models/machine-identity-request-user-entitlements
tags: ['SDK', 'Software Development Kit', 'MachineIdentityRequestUserEntitlements', 'V2025MachineIdentityRequestUserEntitlements']
---


# MachineIdentityRequestUserEntitlements

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EntitlementId** | **String** | The ID of the entitlement | [required]
**SourceId** | **String** | The source ID of the entitlement | [required]

## Examples

- Prepare the resource
```powershell
$MachineIdentityRequestUserEntitlements = Initialize-V2025MachineIdentityRequestUserEntitlements  -EntitlementId 6d28b7c1-620c-49c6-b6d5-cbf81eb4b5fa `
 -SourceId 5898b7c1-620c-49c6-cccc-cbf81eb4bddd
```

- Convert the resource to JSON
```powershell
$MachineIdentityRequestUserEntitlements | ConvertTo-JSON
```


[[Back to top]](#) 

