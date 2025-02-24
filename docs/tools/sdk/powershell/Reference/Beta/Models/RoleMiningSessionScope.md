---
id: beta-role-mining-session-scope
title: RoleMiningSessionScope
pagination_label: RoleMiningSessionScope
sidebar_label: RoleMiningSessionScope
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RoleMiningSessionScope', 'BetaRoleMiningSessionScope'] 
slug: /tools/sdk/powershell/beta/models/role-mining-session-scope
tags: ['SDK', 'Software Development Kit', 'RoleMiningSessionScope', 'BetaRoleMiningSessionScope']
---


# RoleMiningSessionScope

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IdentityIds** | **[]String** | The list of identities for this role mining session. | [optional] 
**Criteria** | **String** | The ""search"" criteria that produces the list of identities for this role mining session. | [optional] 
**AttributeFilterCriteria** | [**[]SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | The filter criteria for this role mining session. | [optional] 

## Examples

- Prepare the resource
```powershell
$RoleMiningSessionScope = Initialize-PSSailpoint.BetaRoleMiningSessionScope  -IdentityIds [2c918090761a5aac0176215c46a62d58, 2c918090761a5aac01722015c46a62d42] `
 -Criteria source.name:DataScienceDataset `
 -AttributeFilterCriteria {displayName&#x3D;{untranslated&#x3D;Location: Miami}, ariaLabel&#x3D;{untranslated&#x3D;Location: Miami}, data&#x3D;{displayName&#x3D;{translateKey&#x3D;IDN.IDENTITY_ATTRIBUTES.LOCATION}, name&#x3D;location, operator&#x3D;EQUALS, values&#x3D;[Miami]}}
```

- Convert the resource to JSON
```powershell
$RoleMiningSessionScope | ConvertTo-JSON
```


[[Back to top]](#) 

