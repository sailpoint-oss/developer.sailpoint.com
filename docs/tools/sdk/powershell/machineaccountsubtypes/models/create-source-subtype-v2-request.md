# CreateSourceSubtypeV2Request

# CreateSourceSubtypeV2Request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TargetType** |  **Enum** [  "SOURCE",    "CONNECTOR" ] | Tier to create the subtype at. Defaults to `SOURCE`. | [optional] [default to "SOURCE"]
**TargetId** | **String** | Scope key of the subtype. The source ID for a `SOURCE` subtype, or a registered connector type for a `CONNECTOR` subtype. | [required]
**TargetName** | **String** | Display name of the target. For a `CONNECTOR` subtype, a supplied value must match the connector's registered name and is replaced by the registered spelling. When omitted, the registered name is used. | [optional] 
**TechnicalName** | **String** | Technical name of the subtype. | [required]
**DisplayName** | **String** | Display name of the subtype. | [required]
**Description** | **String** | Description of the subtype. | [required]
**Type** | **String** | Entity type of the subtype. Defaults to `MACHINE`. | [optional] [default to "MACHINE"]
**Classification** |  **Enum** [  "MACHINE" ] | Classification of the subtype. Defaults to `MACHINE`. | [optional] [default to "MACHINE"]

## Examples

- Prepare the resource
```powershell
$CreateSourceSubtypeV2Request = Initialize-CreateSourceSubtypeV2Request  -TargetType CONNECTOR `
 -TargetId active-directory `
 -TargetName Active Directory `
 -TechnicalName service-account `
 -DisplayName Service Account `
 -Description Accounts used by automated services. `
 -Type MACHINE `
 -Classification MACHINE
```

- Convert the resource to JSON
```powershell
$CreateSourceSubtypeV2Request | ConvertTo-JSON
```


[[Back to top]](#) 

