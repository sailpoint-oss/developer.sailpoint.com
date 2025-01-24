---
id: tag-tag-category-refs-inner
title: TagTagCategoryRefsInner
pagination_label: TagTagCategoryRefsInner
sidebar_label: TagTagCategoryRefsInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'TagTagCategoryRefsInner'] 
slug: /tools/sdk/powershell/beta/models/tag-tag-category-refs-inner
tags: ['SDK', 'Software Development Kit', 'TagTagCategoryRefsInner']
---


# TagTagCategoryRefsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  Pointer to  **Enum** [  "ACCESS_PROFILE",    "APPLICATION",    "CAMPAIGN",    "ENTITLEMENT",    "IDENTITY",    "ROLE",    "SOD_POLICY",    "SOURCE" ] | DTO type of the tagged object's category. | [optional] 
**Id** |  Pointer to **String** | Tagged object's ID. | [optional] 
**Name** |  Pointer to **String** | Tagged object's display name. | [optional] 

## Examples

- Prepare the resource
```powershell
$TagTagCategoryRefsInner = Initialize-PSSailpoint.BetaTagTagCategoryRefsInner  -Type ENTITLEMENT `
 -Id 2c91809773dee32014e13e122092014e `
 -Name CN&#x3D;entitlement.490efde5,OU&#x3D;OrgCo,OU&#x3D;ServiceDept,DC&#x3D;HQAD,DC&#x3D;local
```

- Convert the resource to JSON
```powershell
$TagTagCategoryRefsInner | ConvertTo-JSON
```


[[Back to top]](#) 

