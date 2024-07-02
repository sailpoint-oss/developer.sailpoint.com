---
id: approval-dto
title: ApprovalDto
pagination_label: ApprovalDto
sidebar_label: ApprovalDto
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'ApprovalDto'] 
slug: /tools/sdk/powershell/beta/models/approval-dto
tags: ['SDK', 'Software Development Kit', 'ApprovalDto']
---


# ApprovalDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Comments** |  Pointer to [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-8.0 | Object representation of a comment on the approval | [optional] 
**ApprovedBy** |  Pointer to [**[]ApprovalIdentity**](approval-identity) | An array of identities who have approved the approval | [optional] 
**RejectedBy** |  Pointer to [**[]ApprovalIdentity**](approval-identity) | An array of identities who have rejected the approval | [optional] 
**ReassignFrom** |  Pointer to [**ApprovalIdentity**](approval-identity) |  | [optional] 
**ReassignTo** |  Pointer to [**ApprovalIdentity**](approval-identity) |  | [optional] 
**AdditionalAttributes** |  Pointer to [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-8.0 | Any additional attributes that the approval request may need | [optional] 

## Examples

- Prepare the resource
```powershell
$ApprovalDto = Initialize-BetaApprovalDto  -Comments {author=85d173e7d57e496569df763231d6deb6a, comment=Looks good, createdDate=2023-04-12T23:20:50.52Z} `
 -ApprovedBy null `
 -RejectedBy null `
 -ReassignFrom null `
 -ReassignTo null `
 -AdditionalAttributes {any=any, additional=attributes}
```

- Convert the resource to JSON
```powershell
$ApprovalDto | ConvertTo-JSON
```


[[Back to top]](#) 

