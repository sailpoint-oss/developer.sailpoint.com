---
id: v2025-first-valid
title: FirstValid
pagination_label: FirstValid
sidebar_label: FirstValid
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'FirstValid', 'V2025FirstValid'] 
slug: /tools/sdk/powershell/v2025/models/first-valid
tags: ['SDK', 'Software Development Kit', 'FirstValid', 'V2025FirstValid']
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
$FirstValid = Initialize-PSSailpoint.V2025FirstValid  -Values [{attributes={sourceName=Active Directory, attributeName=sAMAccountName}, type=accountAttribute}, {attributes={sourceName=Okta, attributeName=login}, type=accountAttribute}, {attributes={sourceName=HR Source, attributeName=employeeID}, type=accountAttribute}] `
 -IgnoreErrors false `
 -RequiresPeriodicRefresh false
```

- Convert the resource to JSON
```powershell
$FirstValid | ConvertTo-JSON
```


[[Back to top]](#) 

