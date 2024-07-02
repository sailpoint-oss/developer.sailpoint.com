---
id: password-change-request
title: PasswordChangeRequest
pagination_label: PasswordChangeRequest
sidebar_label: PasswordChangeRequest
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'PasswordChangeRequest'] 
slug: /tools/sdk/powershell/beta/models/password-change-request
tags: ['SDK', 'Software Development Kit', 'PasswordChangeRequest']
---


# PasswordChangeRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IdentityId** |  Pointer to **String** | The identity ID that requested the password change | [optional] 
**EncryptedPassword** |  Pointer to **String** | The RSA encrypted password | [optional] 
**PublicKeyId** |  Pointer to **String** | The encryption key ID | [optional] 
**AccountId** |  Pointer to **String** | Account ID of the account This is specified per account schema in the source configuration. It is used to distinguish accounts. More info can be found here https://community.sailpoint.com/t5/IdentityNow-Connectors/How-do-I-designate-an-account-attribute-as-the-Account-ID-for-a/ta-p/80350 | [optional] 
**SourceId** |  Pointer to **String** | The ID of the source for which identity is requesting the password change | [optional] 

## Examples

- Prepare the resource
```powershell
$PasswordChangeRequest = Initialize-BetaPasswordChangeRequest  -IdentityId 8a807d4c73c545510173c545f0a002ff `
 -EncryptedPassword XzN+YwKgr2C+InkMYFMBG3UtjMEw5ZIql/XFlXo8cJNeslmkplx6vn4kd4/43IF9STBk5RnzR6XmjpEO+FwHDoiBwYZAkAZK/Iswxk4OdybG6Y4MStJCOCiK8osKr35IMMSV/mbO4wAeltoCk7daTWzTGLiI6UaT5tf+F2EgdjJZ7YqM8W8r7aUWsm3p2Xt01Y46ZRx0QaM91QruiIx2rECFT2pUO0wr+7oQ77jypATyGWRtADsu3YcvCk/6U5MqCnXMzKBcRas7NnZdSL/d5H1GglVGz3VLPMaivG4/oL4chOMmFCRl/zVsGxZ9RhN8rxsRGFFKn+rhExTi+bax3A== `
 -PublicKeyId YWQ2NjQ4MTItZjY0NC00MWExLWFjMjktOGNmMzU3Y2VlNjk2 `
 -AccountId CN=Abby Smith,OU=Austin,OU=Americas,OU=Demo,DC=seri,DC=acme,DC=com `
 -SourceId 8a807d4c73c545510173c545d4b60246
```

- Convert the resource to JSON
```powershell
$PasswordChangeRequest | ConvertTo-JSON
```


[[Back to top]](#) 

