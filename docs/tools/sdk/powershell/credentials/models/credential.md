# Credential

# Credential

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | System-generated unique ID of the Object | [optional] [readonly] 
**Name** | **String** | Name of the Object | [required]
**Created** | **System.DateTime** | Creation date of the Object | [optional] [readonly] 
**Modified** | **System.DateTime** | Last modification date of the Object | [optional] [readonly] 
**Description** | **String** | Description of the credential. | [optional] 
**Status** | **String** | The credential status reported by the source. | [optional] 
**NativeIdentity** | **String** | The credential's unique identifier on the source. | [optional] 
**Environment** | **String** | The environment the credential belongs to. | [optional] 
**Source** | [**CredentialAllOfSource**](credential-all-of-source) |  | [optional] 
**Resource** | [**CredentialResource**](credential-resource) |  | [optional] 
**DatasetId** | **String** | The ID of the source dataset the credential was retrieved from. | [optional] 
**Type** | **String** | The credential type. | [optional] 
**Scope** | **String** | The scope the source reports for the credential. | [optional] 
**ExpiresAt** | **System.DateTime** | The date and time the credential expires. | [optional] 
**LastUsedAt** | **System.DateTime** | The date and time the credential was last used. | [optional] 
**Owners** | [**CredentialOwners**](credential-owners) |  | [optional] 
**Attributes** | **map[string]AnyType** | A map of curated credential attributes. | [optional] 
**ConnectorAttributes** | **map[string]AnyType** | A map of attributes sourced from the connector during aggregation. | [optional] 
**ManuallyEdited** | **Boolean** | Indicates if the credential has been manually edited. | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$Credential = Initialize-Credential  -Id id12345 `
 -Name aName `
 -Created 2015-05-28T14:07:17Z `
 -Modified 2015-05-28T14:07:17Z `
 -Description Key used by the nightly export job `
 -Status Active `
 -NativeIdentity AKIAIOSFODNN7EXAMPLE `
 -Environment production `
 -Source null `
 -Resource null `
 -DatasetId 8886e5e3-63d0-462f-a195-d98da885b8dc `
 -Type ACCESS_KEY `
 -Scope read-write `
 -ExpiresAt 2026-12-31T23:59:59Z `
 -LastUsedAt 2026-10-20T08:15Z `
 -Owners null `
 -Attributes {"status":"Active"} `
 -ConnectorAttributes {"keyId":"AKIAIOSFODNN7EXAMPLE"} `
 -ManuallyEdited true
```

- Convert the resource to JSON
```powershell
$Credential | ConvertTo-JSON
```


[[Back to top]](#) 

