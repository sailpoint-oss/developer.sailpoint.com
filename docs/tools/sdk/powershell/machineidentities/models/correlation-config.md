# CorrelationConfig

# CorrelationConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | System-generated unique ID of the correlation config. | [required]
**SourceId** | **String** | The source ID this config belongs to. | [required]
**ResourceId** | **String** | The source resource identifier for this config scope. | [required]
**Type** |  **Enum** [  "OWNER_PRIMARY",    "OWNER_SECONDARY" ] | The correlation config type. | [required]
**Attributes** | **map[string]AnyType** | JSON object of config attributes. May include syncPrimaryToMachineAccounts (boolean) on OWNER_PRIMARY only. | [required]
**Rules** | [**[]CorrelationRule**](correlation-rule) | The ordered set of correlation rules for this config. | [required]
**Created** | **System.DateTime** | Creation date of the config. | [optional] [readonly] 
**Modified** | **System.DateTime** | Last modification date of the config. | [optional] [readonly] 

## Examples

- Prepare the resource
```powershell
$CorrelationConfig = Initialize-CorrelationConfig  -Id f5dd23fe-3414-42b7-bb1c-869400ad7a10 `
 -SourceId 2c9180835d191a86015d28455b4a2329 `
 -ResourceId aws:iam-role `
 -Type OWNER_PRIMARY `
 -Attributes {"syncPrimaryToMachineAccounts":true} `
 -Rules null `
 -Created 2015-05-28T14:07:17Z `
 -Modified 2015-05-28T14:07:17Z
```

- Convert the resource to JSON
```powershell
$CorrelationConfig | ConvertTo-JSON
```


[[Back to top]](#) 

