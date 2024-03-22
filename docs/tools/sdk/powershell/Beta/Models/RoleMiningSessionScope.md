---
id: role-mining-session-scope
title: RoleMiningSessionScope
pagination_label: RoleMiningSessionScope
sidebar_label: RoleMiningSessionScope
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'RoleMiningSessionScope'] 
slug: /tools/sdk/powershell/beta/models/role-mining-session-scope
tags: ['SDK', 'Software Development Kit', 'RoleMiningSessionScope']
---


# RoleMiningSessionScope

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IdentityIds** |  Pointer to **[]String** | The list of identities for this role mining session. | [optional] 
**Criteria** |  Pointer to **String** | The &quot;&quot;search&quot;&quot; criteria that produces the list of identities for this role mining session. | [optional] 
**AttributeFilterCriteria** |  Pointer to [**[]SystemCollectionsHashtable**](system-collections-hashtable) | The filter criteria for this role mining session. | [optional] 

## Examples

- Prepare the resource
```powershell
$RoleMiningSessionScope = Initialize-PSSailpointBetaRoleMiningSessionScope  -IdentityIds [2c918090761a5aac0176215c46a62d58, 2c918090761a5aac01722015c46a62d42] `
 -Criteria source.name:DataScienceDataset `
 -AttributeFilterCriteria {displayName&#x3D;{untranslated&#x3D;Location: Miami}, ariaLabel&#x3D;{untranslated&#x3D;Location: Miami}, data&#x3D;{displayName&#x3D;{translateKey&#x3D;IDN.IDENTITY_ATTRIBUTES.LOCATION}, name&#x3D;location, operator&#x3D;EQUALS, values&#x3D;[Miami]}}
```

- Convert the resource to JSON
```powershell
$RoleMiningSessionScope | ConvertTo-JSON
```


[[Back to top]](#) 

