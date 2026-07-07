---
id: tag2-tag-category-refs-inner
title: Tag2TagCategoryRefsInner
pagination_label: Tag2TagCategoryRefsInner
sidebar_label: Tag2TagCategoryRefsInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Tag2TagCategoryRefsInner', 'Tag2TagCategoryRefsInner'] 
slug: /tools/sdk/powershell/tags/models/tag2-tag-category-refs-inner
tags: ['SDK', 'Software Development Kit', 'Tag2TagCategoryRefsInner', 'Tag2TagCategoryRefsInner']
---


# Tag2TagCategoryRefsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "ACCESS_PROFILE",    "APPLICATION",    "CAMPAIGN",    "ENTITLEMENT",    "IDENTITY",    "ROLE",    "SOD_POLICY",    "SOURCE" ] | DTO type of the tagged object's category. | [optional] 
**Id** | **String** | Tagged object's ID. | [optional] 
**Name** | **String** | Tagged object's display name. | [optional] 

## Examples

- Prepare the resource
```powershell
$Tag2TagCategoryRefsInner = Initialize-Tag2TagCategoryRefsInner  -Type ENTITLEMENT `
 -Id 2c91809773dee32014e13e122092014e `
 -Name CN=entitlement.490efde5,OU=OrgCo,OU=ServiceDept,DC=HQAD,DC=local
```

- Convert the resource to JSON
```powershell
$Tag2TagCategoryRefsInner | ConvertTo-JSON
```


[[Back to top]](#) 

