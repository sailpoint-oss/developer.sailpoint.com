---
id: duo-verification-request
title: DuoVerificationRequest
pagination_label: DuoVerificationRequest
sidebar_label: DuoVerificationRequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'DuoVerificationRequest'] 
slug: /tools/sdk/powershell/beta/models/duo-verification-request
tags: ['SDK', 'Software Development Kit', 'DuoVerificationRequest']
---


# DuoVerificationRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**UserId** |  **String** | User id for Verification request. | [required]
**SignedResponse** |  **String** | User id for Verification request. | [required]

## Examples

- Prepare the resource
```powershell
$DuoVerificationRequest = Initialize-PSSailpoint.BetaDuoVerificationRequest  -UserId 2c9180947f0ef465017f215cbcfd004b `
 -SignedResponse AUTH|d2lsbC5hbGJpbnxESTZNMFpHSThKQVRWTVpZN0M5VXwxNzAxMjUzMDg5|f1f5f8ced5b340f3d303b05d0efa0e43b6a8f970:APP|d2lsbC5hbGJpbnxESTZNMFpHSThKQVRWTVpZN0M5VXwxNzAxMjU2NjE5|cb44cf44353f5127edcae31b1da0355f87357db2
```

- Convert the resource to JSON
```powershell
$DuoVerificationRequest | ConvertTo-JSON
```


[[Back to top]](#) 

