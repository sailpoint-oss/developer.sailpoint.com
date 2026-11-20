# SubtypeWithTargetAndConfig

# SubtypeWithTargetAndConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Server-generated subtype identifier. Must not be supplied on create. | [optional] [readonly] 
**TechnicalName** | **String** | Technical name of the subtype. Unique within the target tier scope. | [required]
**DisplayName** | **String** | Display name of the subtype. | [required]
**Description** | **String** | Description of the subtype. | [required]
**Type** | **String** | Entity type of the subtype. Defaults to `MACHINE` when omitted. | [optional] [default to "MACHINE"]
**TargetType** | **SubtypeTargetType** |  | [optional] 
**TargetId** | **String** | Scope key for the subtype. Source id when `targetType` is `SOURCE`. Connector type or connector specification id when `targetType` is `CONNECTOR`. | [required]
**TargetName** | **String** | Human-readable target label. May be omitted on create; the service persists a display name. | [optional] [default to ""]
**Classification** | **SubtypeClassification** |  | [optional] 
**Origin** |  **Enum** [  "SOURCE",    "CONNECTOR",    "CONNECTOR_VARIANT" ] | Response-only origin badge. Set on effective-set list reads: `CONNECTOR` when a SOURCE winner overrides a CONNECTOR parent of the same technical name. `null` on connector-only and source-only winners, and on plain CRUD list, create, patch, and get-by-id. | [optional] [readonly] 
**VarProfile** | [**ConnectorVariantProfile**](connector-variant-profile) |  | [optional] 
**SystemManaged** | **Boolean** | Server-set flag indicating the subtype is managed by the system. Incoming values are ignored. | [optional] [readonly] [default to $false]
**Created** | **System.DateTime** | Creation timestamp. | [optional] [readonly] 
**Modified** | **System.DateTime** | Last modified timestamp. | [optional] [readonly] 
**Target** | [**SubtypeTargetRef**](subtype-target-ref) |  | [optional] 
**Config** | [**MachineAccountSubtypeListConfig**](machine-account-subtype-list-config) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$SubtypeWithTargetAndConfig = Initialize-SubtypeWithTargetAndConfig  -Id 43bdd144-4b17-4fce-a744-17c7fd3e717b `
 -TechnicalName nonPersonal `
 -DisplayName Non Personal `
 -Description Machine accounts for JDBC connectors `
 -Type MACHINE `
 -TargetType null `
 -TargetId JDBC `
 -TargetName JDBC `
 -Classification null `
 -Origin CONNECTOR `
 -VarProfile null `
 -SystemManaged false `
 -Created 2026-08-18T12:00Z `
 -Modified 2026-08-18T12:00Z `
 -Target null `
 -Config null
```

- Convert the resource to JSON
```powershell
$SubtypeWithTargetAndConfig | ConvertTo-JSON
```


[[Back to top]](#) 

