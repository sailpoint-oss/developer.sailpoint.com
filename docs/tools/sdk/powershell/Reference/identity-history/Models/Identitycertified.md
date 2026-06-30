---
id: identitycertified
title: Identitycertified
pagination_label: Identitycertified
sidebar_label: Identitycertified
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Identitycertified', 'Identitycertified'] 
slug: /tools/sdk/powershell/identityhistory/models/identitycertified
tags: ['SDK', 'Software Development Kit', 'Identitycertified', 'Identitycertified']
---


# Identitycertified

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CertificationId** | **String** | the id of the certification item | [required]
**CertificationName** | **String** | the certification item name | [required]
**SignedDate** | **String** | the date ceritification was signed | [optional] 
**Certifiers** | [**[]Certifierresponse**](certifierresponse) | this field is deprecated and may go away | [optional] 
**Reviewers** | [**[]Certifierresponse**](certifierresponse) | The list of identities who review this certification | [optional] 
**Signer** | [**Certifierresponse**](certifierresponse) |  | [optional] 
**EventType** | **String** | the event type | [optional] 
**DateTime** | **String** | the date of event | [optional] 

## Examples

- Prepare the resource
```powershell
$Identitycertified = Initialize-Identitycertified  -CertificationId 2c91808a77ff216301782327a50f09bf `
 -CertificationName Cert name `
 -SignedDate 2019-03-08T22:37:33.901Z `
 -Certifiers [{"id":"8a80828f643d484f01643e14202e206f","displayName":"John Snow"}] `
 -Reviewers [{"id":"8a80828f643d484f01643e14202e206f","displayName":"John Snow"}] `
 -Signer null `
 -EventType IdentityCertified `
 -DateTime 2019-03-08T22:37:33.901Z
```

- Convert the resource to JSON
```powershell
$Identitycertified | ConvertTo-JSON
```


[[Back to top]](#) 

