---
id: provisioning-config-managed-resource-refs-inner
title: ProvisioningConfigManagedResourceRefsInner
pagination_label: ProvisioningConfigManagedResourceRefsInner
sidebar_label: ProvisioningConfigManagedResourceRefsInner
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'ProvisioningConfigManagedResourceRefsInner'] 
slug: /tools/sdk/powershell/beta/models/provisioning-config-managed-resource-refs-inner
tags: ['SDK', 'Software Development Kit', 'ProvisioningConfigManagedResourceRefsInner']
---


# ProvisioningConfigManagedResourceRefsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  Pointer to  **Enum** [  "SOURCE" ] | The type of object being referenced | [optional] 
**Id** |  Pointer to [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-8.0 | ID of the source | [optional] 
**Name** |  Pointer to [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-8.0 | Human-readable display name of the source | [optional] 

## Examples

- Prepare the resource
```powershell
$ProvisioningConfigManagedResourceRefsInner = Initialize-PSSailpointBetaProvisioningConfigManagedResourceRefsInner  -Type SOURCE `
 -Id 2c91808568c529c60168cca6f90c1313 `
 -Name My Source
```

- Convert the resource to JSON
```powershell
$ProvisioningConfigManagedResourceRefsInner | ConvertTo-JSON
```


[[Back to top]](#) 

