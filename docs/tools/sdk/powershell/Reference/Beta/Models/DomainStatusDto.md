---
id: beta-domain-status-dto
title: DomainStatusDto
pagination_label: DomainStatusDto
sidebar_label: DomainStatusDto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'DomainStatusDto', 'BetaDomainStatusDto'] 
slug: /tools/sdk/powershell/beta/models/domain-status-dto
tags: ['SDK', 'Software Development Kit', 'DomainStatusDto', 'BetaDomainStatusDto']
---


# DomainStatusDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | New UUID associated with domain to be verified | [optional] 
**Domain** | **String** | A domain address | [optional] 
**DkimEnabled** | [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | DKIM is enabled for this domain | [optional] 
**DkimTokens** | **[]String** | DKIM tokens required for authentication | [optional] 
**DkimVerificationStatus** | **String** | Status of DKIM authentication | [optional] 

## Examples

- Prepare the resource
```powershell
$DomainStatusDto = Initialize-PSSailpoint.BetaDomainStatusDto  -Id 123b45b0-aaaa-bbbb-a7db-123456a56abc `
 -Domain sailpoint.com `
 -DkimEnabled true `
 -DkimTokens [token1, token2, token3] `
 -DkimVerificationStatus PENDING
```

- Convert the resource to JSON
```powershell
$DomainStatusDto | ConvertTo-JSON
```


[[Back to top]](#) 

