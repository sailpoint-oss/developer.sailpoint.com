---
id: beta-identity-certified
title: IdentityCertified
pagination_label: IdentityCertified
sidebar_label: IdentityCertified
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'IdentityCertified', 'BetaIdentityCertified'] 
slug: /tools/sdk/powershell/beta/models/identity-certified
tags: ['SDK', 'Software Development Kit', 'IdentityCertified', 'BetaIdentityCertified']
---


# IdentityCertified

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CertificationId** |  Pointer to **String** | the id of the certification item | [optional] 
**CertificationName** |  Pointer to **String** | the certification item name | [optional] 
**SignedDate** |  Pointer to **String** | the date ceritification was signed | [optional] 
**Certifiers** |  Pointer to [**[]CertifierResponse**](certifier-response) | this field is deprecated and may go away | [optional] 
**Reviewers** |  Pointer to [**[]CertifierResponse**](certifier-response) | The list of identities who review this certification | [optional] 
**Signer** |  Pointer to [**CertifierResponse**](certifier-response) |  | [optional] 
**EventType** |  Pointer to **String** | the event type | [optional] 
**Dt** |  Pointer to **String** | the date of event | [optional] 

## Examples

- Prepare the resource
```powershell
$IdentityCertified = Initialize-PSSailpoint.BetaIdentityCertified  -CertificationId 2c91808a77ff216301782327a50f09bf `
 -CertificationName Cert name `
 -SignedDate 2019-03-08T22:37:33.901Z `
 -Certifiers [{id&#x3D;8a80828f643d484f01643e14202e206f, displayName&#x3D;John Snow}] `
 -Reviewers [{id&#x3D;8a80828f643d484f01643e14202e206f, displayName&#x3D;John Snow}] `
 -Signer null `
 -EventType IdentityCertified `
 -Dt 2019-03-08T22:37:33.901Z
```

- Convert the resource to JSON
```powershell
$IdentityCertified | ConvertTo-JSON
```


[[Back to top]](#) 

