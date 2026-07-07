---
id: bulkapproveaccessrequest
title: Bulkapproveaccessrequest
pagination_label: Bulkapproveaccessrequest
sidebar_label: Bulkapproveaccessrequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Bulkapproveaccessrequest', 'Bulkapproveaccessrequest'] 
slug: /tools/sdk/powershell/accessrequests/models/bulkapproveaccessrequest
tags: ['SDK', 'Software Development Kit', 'Bulkapproveaccessrequest', 'Bulkapproveaccessrequest']
---


# Bulkapproveaccessrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApprovalIds** | **[]String** | List of approval ids to approve the pending requests | [required]
**Comment** | **String** | Reason for approving the pending access request. | [required]

## Examples

- Prepare the resource
```powershell
$Bulkapproveaccessrequest = Initialize-Bulkapproveaccessrequest  -ApprovalIds ["2c9180835d2e5168015d32f890ca1581","2c9180835d2e5168015d32f890ca1582"] `
 -Comment I approve these request items
```

- Convert the resource to JSON
```powershell
$Bulkapproveaccessrequest | ConvertTo-JSON
```


[[Back to top]](#) 

