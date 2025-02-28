---
id: beta-tag-tag-category-refs-inner
title: TagTagCategoryRefsInner
pagination_label: TagTagCategoryRefsInner
sidebar_label: TagTagCategoryRefsInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'TagTagCategoryRefsInner', 'BetaTagTagCategoryRefsInner'] 
slug: /tools/sdk/powershell/beta/models/tag-tag-category-refs-inner
tags: ['SDK', 'Software Development Kit', 'TagTagCategoryRefsInner', 'BetaTagTagCategoryRefsInner']
---


# TagTagCategoryRefsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "ACCESS_PROFILE",    "APPLICATION",    "CAMPAIGN",    "ENTITLEMENT",    "IDENTITY",    "ROLE",    "SOD_POLICY",    "SOURCE" ] | DTO type of the tagged object's category. | [optional] 
**Id** | **String** | Tagged object's ID. | [optional] 
**Name** | **String** | Tagged object's display name. | [optional] 

## Examples

- Prepare the resource
```powershell
$TagTagCategoryRefsInner = Initialize-PSSailpoint.BetaTagTagCategoryRefsInner  -Type ENTITLEMENT `
 -Id 2c91809773dee32014e13e122092014e `
 -Name CN=entitlement.490efde5,OU=OrgCo,OU=ServiceDept,DC=HQAD,DC=local
```

- Convert the resource to JSON
```powershell
$TagTagCategoryRefsInner | ConvertTo-JSON
```


[[Back to top]](#) 

