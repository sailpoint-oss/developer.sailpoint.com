---
id: provisioning-config1-managed-resource-refs-inner
title: ProvisioningConfig1ManagedResourceRefsInner
pagination_label: ProvisioningConfig1ManagedResourceRefsInner
sidebar_label: ProvisioningConfig1ManagedResourceRefsInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ProvisioningConfig1ManagedResourceRefsInner'] 
slug: /tools/sdk/powershell/v2024/models/provisioning-config1-managed-resource-refs-inner
tags: ['SDK', 'Software Development Kit', 'ProvisioningConfig1ManagedResourceRefsInner']
---


# ProvisioningConfig1ManagedResourceRefsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  Pointer to  **Enum** [  "SOURCE" ] | The type of object being referenced | [optional] 
**Id** |  Pointer to [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | ID of the source | [optional] 
**Name** |  Pointer to [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | Human-readable display name of the source | [optional] 

## Examples

- Prepare the resource
```powershell
$ProvisioningConfig1ManagedResourceRefsInner = Initialize-PSSailpoint.V2024ProvisioningConfig1ManagedResourceRefsInner  -Type SOURCE `
 -Id 2c91808568c529c60168cca6f90c1313 `
 -Name My Source
```

- Convert the resource to JSON
```powershell
$ProvisioningConfig1ManagedResourceRefsInner | ConvertTo-JSON
```


[[Back to top]](#) 

