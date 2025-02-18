---
id: beta-first-valid
title: FirstValid
pagination_label: FirstValid
sidebar_label: FirstValid
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'FirstValid', 'BetaFirstValid'] 
slug: /tools/sdk/powershell/beta/models/first-valid
tags: ['SDK', 'Software Development Kit', 'FirstValid', 'BetaFirstValid']
---


# FirstValid

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Values** | [**[]SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | An array of attributes to evaluate for existence. | [required]
**IgnoreErrors** | **Boolean** | a true or false value representing to move on to the next option if an error (like an Null Pointer Exception) were to occur. | [optional] [default to $false]
**RequiresPeriodicRefresh** | **Boolean** | A value that indicates whether the transform logic should be re-evaluated every evening as part of the identity refresh process | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$FirstValid = Initialize-PSSailpoint.BetaFirstValid  -Values [{attributes&#x3D;{sourceName&#x3D;Active Directory, attributeName&#x3D;sAMAccountName}, type&#x3D;accountAttribute}, {attributes&#x3D;{sourceName&#x3D;Okta, attributeName&#x3D;login}, type&#x3D;accountAttribute}, {attributes&#x3D;{sourceName&#x3D;HR Source, attributeName&#x3D;employeeID}, type&#x3D;accountAttribute}] `
 -IgnoreErrors false `
 -RequiresPeriodicRefresh false
```

- Convert the resource to JSON
```powershell
$FirstValid | ConvertTo-JSON
```


[[Back to top]](#) 

