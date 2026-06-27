---
id: get-data-segment-identity-membership-v1429-response
title: GetDataSegmentIdentityMembershipV1429Response
pagination_label: GetDataSegmentIdentityMembershipV1429Response
sidebar_label: GetDataSegmentIdentityMembershipV1429Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'GetDataSegmentIdentityMembershipV1429Response', 'GetDataSegmentIdentityMembershipV1429Response'] 
slug: /tools/sdk/powershell/datasegmentation/models/get-data-segment-identity-membership-v1429-response
tags: ['SDK', 'Software Development Kit', 'GetDataSegmentIdentityMembershipV1429Response', 'GetDataSegmentIdentityMembershipV1429Response']
---


# GetDataSegmentIdentityMembershipV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$GetDataSegmentIdentityMembershipV1429Response = Initialize-GetDataSegmentIdentityMembershipV1429Response  -Message  Rate Limit Exceeded 
```

- Convert the resource to JSON
```powershell
$GetDataSegmentIdentityMembershipV1429Response | ConvertTo-JSON
```


[[Back to top]](#) 

