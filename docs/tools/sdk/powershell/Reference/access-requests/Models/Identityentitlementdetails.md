---
id: identityentitlementdetails
title: Identityentitlementdetails
pagination_label: Identityentitlementdetails
sidebar_label: Identityentitlementdetails
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Identityentitlementdetails', 'Identityentitlementdetails'] 
slug: /tools/sdk/powershell/accessrequests/models/identityentitlementdetails
tags: ['SDK', 'Software Development Kit', 'Identityentitlementdetails', 'Identityentitlementdetails']
---


# Identityentitlementdetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IdentityId** | **String** | Id of Identity | [optional] 
**Entitlement** | [**Identityentitlementdetailsentitlementdto**](identityentitlementdetailsentitlementdto) |  | [optional] 
**SourceId** | **String** | Id of Source | [optional] 
**AccountTargets** | [**[]Identityentitlementdetailsaccounttarget**](identityentitlementdetailsaccounttarget) | A list of account targets on the identity provisioned with the requested entitlement. | [optional] 

## Examples

- Prepare the resource
```powershell
$Identityentitlementdetails = Initialize-Identityentitlementdetails  -IdentityId 5928c61f-3f2e-417a-8d65-f76451e2050a `
 -Entitlement null `
 -SourceId b56728da-a24d-4177-a207-2bc4d42cba27 `
 -AccountTargets [{"accountId":"e7ef11cee24542b78618ce017117699f","accountName":"Adalberto.XYZ","accountUUID":null,"sourceId":"0108906b66634d9ab7819a03eb263a88","sourceName":"ODS-AD-FF-Source [source-XYZ]","removeDate":null,"assignmentId":null,"revocable":true}]
```

- Convert the resource to JSON
```powershell
$Identityentitlementdetails | ConvertTo-JSON
```


[[Back to top]](#) 

