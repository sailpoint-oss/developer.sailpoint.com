---
id: get-data-segment-identity-membership-v1401-response
title: GetDataSegmentIdentityMembershipV1401Response
pagination_label: GetDataSegmentIdentityMembershipV1401Response
sidebar_label: GetDataSegmentIdentityMembershipV1401Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'GetDataSegmentIdentityMembershipV1401Response', 'GetDataSegmentIdentityMembershipV1401Response'] 
slug: /tools/sdk/powershell/datasegmentation/models/get-data-segment-identity-membership-v1401-response
tags: ['SDK', 'Software Development Kit', 'GetDataSegmentIdentityMembershipV1401Response', 'GetDataSegmentIdentityMembershipV1401Response']
---


# GetDataSegmentIdentityMembershipV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$GetDataSegmentIdentityMembershipV1401Response = Initialize-GetDataSegmentIdentityMembershipV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$GetDataSegmentIdentityMembershipV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

