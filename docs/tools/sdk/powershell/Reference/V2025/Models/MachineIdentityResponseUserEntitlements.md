---
id: v2025-machine-identity-response-user-entitlements
title: MachineIdentityResponseUserEntitlements
pagination_label: MachineIdentityResponseUserEntitlements
sidebar_label: MachineIdentityResponseUserEntitlements
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'MachineIdentityResponseUserEntitlements', 'V2025MachineIdentityResponseUserEntitlements'] 
slug: /tools/sdk/powershell/v2025/models/machine-identity-response-user-entitlements
tags: ['SDK', 'Software Development Kit', 'MachineIdentityResponseUserEntitlements', 'V2025MachineIdentityResponseUserEntitlements']
---


# MachineIdentityResponseUserEntitlements

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SourceId** | **String** | The source ID of the entitlement | [optional] 
**EntitlementId** | **String** | The ID of the entitlement | [optional] 
**DisplayName** | **String** | The display name of the entitlement | [optional] 
**Source** | [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | The source of the entitlement | [optional] 

## Examples

- Prepare the resource
```powershell
$MachineIdentityResponseUserEntitlements = Initialize-V2025MachineIdentityResponseUserEntitlements  -SourceId 5898b7c1-620c-49c6-cccc-cbf81eb4bddd `
 -EntitlementId 6d28b7c1-620c-49c6-b6d5-cbf81eb4b5fa `
 -DisplayName Entitlement Name `
 -Source null
```

- Convert the resource to JSON
```powershell
$MachineIdentityResponseUserEntitlements | ConvertTo-JSON
```


[[Back to top]](#) 

