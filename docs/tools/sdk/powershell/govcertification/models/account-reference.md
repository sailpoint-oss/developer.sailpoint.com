# AccountReference

# AccountReference

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**NativeIdentity** | **String** | The native identity for this account | [optional] 
**Disabled** | **Boolean** | Indicates whether this account is currently disabled | [optional] [default to $false]
**Locked** | **Boolean** | Indicates whether this account is currently locked | [optional] [default to $false]
**Type** |  **Enum** [  "ACCOUNT" ] | The type of the Account Reference | [optional] 
**Id** | **String** | The id associated with the account | [optional] 
**Name** | **String** | The account name | [optional] 
**Created** | **System.DateTime** | When the account was created | [optional] 
**Modified** | **System.DateTime** | When the account was last modified | [optional] 

## Examples

- Prepare the resource
```powershell
$AccountReference = Initialize-AccountReference  -NativeIdentity CN=Alison Ferguson `
 -Disabled false `
 -Locked false `
 -Type ACCOUNT `
 -Id 2c9180857182305e0171993737eb29e6 `
 -Name Alison Ferguso `
 -Created 2020-04-20T20:11:05.067Z `
 -Modified 2020-05-20T18:57:16.987Z
```

- Convert the resource to JSON
```powershell
$AccountReference | ConvertTo-JSON
```


[[Back to top]](#) 

