# AccountDetails

# AccountDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | unique id of this object | [optional] 
**Name** | **String** |  | [optional] 
**AccountId** | **String** |  | [optional] 
**Description** | **String** |  | [optional] 
**NativeIdentity** | **String** |  | [optional] 
**Uuid** | **String** |  | [optional] 
**DisplayName** | **String** |  | [optional] 
**Disabled** | **Boolean** |  | [optional] 
**Locked** | **Boolean** |  | [optional] 
**Uncorrelated** | **Boolean** |  | [optional] 
**SystemAccount** | **Boolean** |  | [optional] 
**Authoritative** | **Boolean** |  | [optional] 
**SupportsPasswordChange** | **Boolean** |  | [optional] 
**Attributes** | **SystemCollectionsHashtable** |  | [optional] 
**Application** | **SystemCollectionsHashtable** |  | [optional] 
**Identity** | **SystemCollectionsHashtable** |  | [optional] 
**Schema** | **SystemCollectionsHashtable** |  | [optional] 
**PendingAccessRequestIds** | **[]String** |  | [optional] 
**Features** | **[]String** |  | [optional] 
**Meta** | **SystemCollectionsHashtable** |  | [optional] 

## Examples

- Prepare the resource
```powershell
$AccountDetails = Initialize-AccountDetails  -Id 2c91808474683da6017468693c260195 `
 -Name null `
 -AccountId 4191808474683da6017468693c260195 `
 -Description null `
 -NativeIdentity null `
 -Uuid null `
 -DisplayName null `
 -Disabled null `
 -Locked null `
 -Uncorrelated null `
 -SystemAccount null `
 -Authoritative null `
 -SupportsPasswordChange null `
 -Attributes null `
 -Application null `
 -Identity null `
 -Schema null `
 -PendingAccessRequestIds null `
 -Features null `
 -Meta null
```

- Convert the resource to JSON
```powershell
$AccountDetails | ConvertTo-JSON
```


[[Back to top]](#) 

