# SourceSubtypeV2

# SourceSubtypeV2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Unique identifier for the subtype. | [optional] 
**TechnicalName** | **String** | Technical name of the subtype. | [optional] 
**DisplayName** | **String** | Display name of the subtype. | [optional] 
**Description** | **String** | Description of the subtype. | [optional] 
**Type** | **String** | Entity type of the subtype. | [optional] 
**TargetType** |  **Enum** [  "SOURCE",    "CONNECTOR",    "CONNECTOR_VARIANT" ] | Tier the subtype is defined at. `SOURCE` subtypes apply to one source. `CONNECTOR` subtypes apply to every source of a connector type. `CONNECTOR_VARIANT` is reserved for future use. | [optional] 
**TargetId** | **String** | Scope key of the subtype. The source ID for `SOURCE` subtypes, or the connector type for `CONNECTOR` subtypes. | [optional] 
**TargetName** | **String** | Display name of the target source or connector. | [optional] 
**Classification** |  **Enum** [  "MACHINE" ] | Classification of the subtype. | [optional] 
**Origin** |  **Enum** [  "SOURCE",    "CONNECTOR",    "CONNECTOR_VARIANT" ] | Tier of the parent subtype this subtype overrides. Set to `CONNECTOR` when a source subtype replaces a connector subtype with the same technical name in a source's effective subtype list. Otherwise `null`. | [optional] 
**VarProfile** | [**SourceSubtypeV2Profile**](source-subtype-v2-profile) |  | [optional] 
**SystemManaged** | **Boolean** | Indicates whether the subtype is managed by the system. | [optional] [readonly] [default to $false]
**Created** | **System.DateTime** | Creation timestamp. | [optional] 
**Modified** | **System.DateTime** | Last modified timestamp. | [optional] 
**Target** | [**SubtypeTarget**](subtype-target) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$SourceSubtypeV2 = Initialize-SourceSubtypeV2  -Id 43bdd144-4b17-4fce-a744-17c7fd3e717b `
 -TechnicalName service-account `
 -DisplayName Service Account `
 -Description Accounts used by automated services. `
 -Type MACHINE `
 -TargetType CONNECTOR `
 -TargetId active-directory `
 -TargetName Active Directory `
 -Classification MACHINE `
 -Origin null `
 -VarProfile null `
 -SystemManaged false `
 -Created 2026-07-28T16:13:42.801Z `
 -Modified 2026-07-28T16:13:42.750Z `
 -Target null
```

- Convert the resource to JSON
```powershell
$SourceSubtypeV2 | ConvertTo-JSON
```


[[Back to top]](#) 

