---
id: beta-provisioning-config-managed-resource-refs-inner
title: ProvisioningConfigManagedResourceRefsInner
pagination_label: ProvisioningConfigManagedResourceRefsInner
sidebar_label: ProvisioningConfigManagedResourceRefsInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ProvisioningConfigManagedResourceRefsInner', 'BetaProvisioningConfigManagedResourceRefsInner'] 
slug: /tools/sdk/powershell/beta/models/provisioning-config-managed-resource-refs-inner
tags: ['SDK', 'Software Development Kit', 'ProvisioningConfigManagedResourceRefsInner', 'BetaProvisioningConfigManagedResourceRefsInner']
---


# ProvisioningConfigManagedResourceRefsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "SOURCE" ] | The type of object being referenced | [optional] 
**Id** | [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | ID of the source | [optional] 
**Name** | [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | Human-readable display name of the source | [optional] 

## Examples

- Prepare the resource
```powershell
$ProvisioningConfigManagedResourceRefsInner = Initialize-PSSailpoint.BetaProvisioningConfigManagedResourceRefsInner  -Type SOURCE `
 -Id 2c91808568c529c60168cca6f90c1313 `
 -Name My Source
```

- Convert the resource to JSON
```powershell
$ProvisioningConfigManagedResourceRefsInner | ConvertTo-JSON
```


[[Back to top]](#) 

