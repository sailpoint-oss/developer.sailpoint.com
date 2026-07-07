---
id: identitiesaccountsbulkrequest
title: Identitiesaccountsbulkrequest
pagination_label: Identitiesaccountsbulkrequest
sidebar_label: Identitiesaccountsbulkrequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Identitiesaccountsbulkrequest', 'Identitiesaccountsbulkrequest'] 
slug: /tools/sdk/powershell/accounts/models/identitiesaccountsbulkrequest
tags: ['SDK', 'Software Development Kit', 'Identitiesaccountsbulkrequest', 'Identitiesaccountsbulkrequest']
---


# Identitiesaccountsbulkrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IdentityIds** | **[]String** | The ids of the identities for which enable/disable accounts. | [optional] 

## Examples

- Prepare the resource
```powershell
$Identitiesaccountsbulkrequest = Initialize-Identitiesaccountsbulkrequest  -IdentityIds ["2c91808384203c2d018437e631158308","2c9180858082150f0180893dbaf553fe"]
```

- Convert the resource to JSON
```powershell
$Identitiesaccountsbulkrequest | ConvertTo-JSON
```


[[Back to top]](#) 

