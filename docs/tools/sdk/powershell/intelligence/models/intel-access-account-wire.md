# IntelAccessAccountWire

# IntelAccessAccountWire

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Unique account identifier in Identity Security Cloud. | [required]
**Name** | **String** | Account name or login value on the correlated source. | [required]
**Source** | [**IntelAccessSourceWire**](intel-access-source-wire) | Source metadata for the account as returned by List Accounts wire format. | [optional] 
**Disabled** | **Boolean** | True when the account is administratively disabled on the source. | [required]
**Locked** | **Boolean** | True when the account is locked from interactive sign-in on the source. | [required]
**Authoritative** | **Boolean** | True when the account is treated as authoritative for attribute synchronization. | [required]
**SystemAccount** | **Boolean** | True when the account represents a non-interactive or system principal. | [required]
**IsMachine** | **Boolean** | True when the account belongs to a machine or service identity. | [required]
**ManuallyCorrelated** | **Boolean** | True when an administrator manually correlated the account to an identity. | [required]
**NativeIdentity** | **String** | Native identifier string on the source directory or application. | [optional] 
**Created** | **System.DateTime** | Timestamp when the account record was created in Identity Security Cloud. | [required]
**Modified** | **System.DateTime** | Timestamp when the account record was last modified in Identity Security Cloud. | [required]

## Examples

- Prepare the resource
```powershell
$IntelAccessAccountWire = Initialize-IntelAccessAccountWire  -Id 2c91808874ff91550175097daaec161c `
 -Name jdoe `
 -Source null `
 -Disabled false `
 -Locked false `
 -Authoritative true `
 -SystemAccount false `
 -IsMachine false `
 -ManuallyCorrelated false `
 -NativeIdentity CN=jdoe,OU=Users,DC=example,DC=com `
 -Created 2023-11-01T10:00Z `
 -Modified 2024-02-15T16:20Z
```

- Convert the resource to JSON
```powershell
$IntelAccessAccountWire | ConvertTo-JSON
```


[[Back to top]](#) 

