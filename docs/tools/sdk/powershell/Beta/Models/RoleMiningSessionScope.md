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
**AttributeFilterCriteria** |  Pointer to [**[]SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-8.0 | The filter criteria for this role mining session. | [optional] 

## Examples

- Prepare the resource
```powershell
$RoleMiningSessionScope = Initialize-BetaRoleMiningSessionScope  -IdentityIds [2c918090761a5aac0176215c46a62d58, 2c918090761a5aac01722015c46a62d42] `
 -Criteria source.name:DataScienceDataset `
 -AttributeFilterCriteria {displayName={untranslated=Location: Miami}, ariaLabel={untranslated=Location: Miami}, data={displayName={translateKey=IDN.IDENTITY_ATTRIBUTES.LOCATION}, name=location, operator=EQUALS, values=[Miami]}}
```

- Convert the resource to JSON
```powershell
$RoleMiningSessionScope | ConvertTo-JSON
```


[[Back to top]](#) 

