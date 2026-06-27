---
id: dkimattributes
title: Dkimattributes
pagination_label: Dkimattributes
sidebar_label: Dkimattributes
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Dkimattributes', 'Dkimattributes'] 
slug: /tools/sdk/powershell/notifications/models/dkimattributes
tags: ['SDK', 'Software Development Kit', 'Dkimattributes', 'Dkimattributes']
---


# Dkimattributes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | UUID associated with domain to be verified | [optional] 
**Address** | **String** | The identity or domain address | [optional] 
**DkimEnabled** | **Boolean** | Whether or not DKIM has been enabled for this domain / identity | [optional] [default to $false]
**DkimTokens** | **[]String** | The tokens to be added to a DNS for verification | [optional] 
**DkimVerificationStatus** | **String** | The current status if the domain /identity has been verified. Ie SUCCESS, FAILED, PENDING | [optional] 
**Region** | **String** | The AWS SES region the domain is associated with | [optional] 

## Examples

- Prepare the resource
```powershell
$Dkimattributes = Initialize-Dkimattributes  -Id 123b45b0-aaaa-bbbb-a7db-123456a56abc `
 -Address BobSmith@sailpoint.com `
 -DkimEnabled true `
 -DkimTokens ["uq1m3jjk25ckd3whl4n7y46c56r5l6aq","u7pm38jky9ckdawhlsn7y4dcj6f5lpgq","uhpm3jjkjjckdkwhlqn7yw6cjer5tpay"] `
 -DkimVerificationStatus SUCCESS `
 -Region us-east-1
```

- Convert the resource to JSON
```powershell
$Dkimattributes | ConvertTo-JSON
```


[[Back to top]](#) 

