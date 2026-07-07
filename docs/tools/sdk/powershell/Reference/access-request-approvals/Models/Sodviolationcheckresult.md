---
id: sodviolationcheckresult
title: Sodviolationcheckresult
pagination_label: Sodviolationcheckresult
sidebar_label: Sodviolationcheckresult
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Sodviolationcheckresult', 'Sodviolationcheckresult'] 
slug: /tools/sdk/powershell/accessrequestapprovals/models/sodviolationcheckresult
tags: ['SDK', 'Software Development Kit', 'Sodviolationcheckresult', 'Sodviolationcheckresult']
---


# Sodviolationcheckresult

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | [**Errormessagedto**](errormessagedto) |  | [optional] 
**ClientMetadata** | **map[string]String** | Arbitrary key-value pairs. They will never be processed by the IdentityNow system but will be returned on completion of the violation check. | [optional] 
**ViolationContexts** | [**[]Sodviolationcontext**](sodviolationcontext) |  | [optional] 
**ViolatedPolicies** | [**[]Sodpolicydto**](sodpolicydto) | A list of the SOD policies that were violated. | [optional] 

## Examples

- Prepare the resource
```powershell
$Sodviolationcheckresult = Initialize-Sodviolationcheckresult  -Message null `
 -ClientMetadata {"requestedAppName":"test-app","requestedAppId":"2c91808f7892918f0178b78da4a305a1"} `
 -ViolationContexts null `
 -ViolatedPolicies null
```

- Convert the resource to JSON
```powershell
$Sodviolationcheckresult | ConvertTo-JSON
```


[[Back to top]](#) 

