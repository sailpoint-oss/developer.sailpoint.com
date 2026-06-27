---
id: reelectrequest
title: Reelectrequest
pagination_label: Reelectrequest
sidebar_label: Reelectrequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Reelectrequest', 'Reelectrequest'] 
slug: /tools/sdk/powershell/dataaccesssecurity/models/reelectrequest
tags: ['SDK', 'Software Development Kit', 'Reelectrequest', 'Reelectrequest']
---


# Reelectrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**OwnerId** | **String** | The UUID of the identity proposed to be re-elected as the resource owner. | [optional] 
**CampaignName** | **String** | The name of the campaign or election process for re-electing the owner. | [optional] 
**Reviewers** | **[]String** | A list of UUIDs representing the identities of reviewers participating in the re-election process. | [optional] 

## Examples

- Prepare the resource
```powershell
$Reelectrequest = Initialize-Reelectrequest  -OwnerId c1a2b3d4-e5f6-7890-abcd-1234567890ab `
 -CampaignName Annual Resource Owner Election `
 -Reviewers ["d4e5f6a7-b8c9-0123-4567-89abcdef0123","e7f8g9h0-i1j2-3456-7890-klmnopqrstuv"]
```

- Convert the resource to JSON
```powershell
$Reelectrequest | ConvertTo-JSON
```


[[Back to top]](#) 

