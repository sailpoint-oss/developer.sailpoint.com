# Machineidentityv2

# Machineidentityv2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | System-generated unique ID of the Object | [optional] [readonly] 
**Name** | **String** | Name of the Object | [required]
**Created** | **System.DateTime** | Creation date of the Object | [optional] [readonly] 
**Modified** | **System.DateTime** | Last modification date of the Object | [optional] [readonly] 
**Description** | **String** | Description of the machine identity. | [optional] 
**Attributes** | **map[string]AnyType** | A map of custom machine identity attributes. | [optional] 
**ConnectorAttributes** | **map[string]AnyType** | A map of attributes sourced from the connector during aggregation. | [optional] 
**ManuallyEdited** | **Boolean** | Indicates if the machine identity has been manually edited. | [optional] [default to $false]
**ManuallyCreated** | **Boolean** | Indicates if the machine identity has been manually created. | [optional] [default to $false]
**Owners** | [**MachineIdentityOwnersV2**](machine-identity-owners-v2) |  | [optional] 
**Subtype** | **String** | The subtype value associated to the machine identity. | [optional] 
**SourceId** | **String** | The source id associated to the machine identity. | [optional] 
**Uuid** | **String** | The UUID associated to the machine identity directly aggregated from a source. | [optional] 
**NativeIdentity** | **String** | The native identity associated to the machine identity directly aggregated from a source. | [optional] 
**DatasetId** | **String** | The dataset id associated to the source from which the identity was retrieved. | [optional] 
**Environment** | **String** | The environment the machine identity belongs to. | [optional] 
**ExistsOnSource** | **String** | Indicates whether the machine identity still exists on the source. | [optional] 
**Status** | **String** | Operational status read from stored attributes.status; null when absent. | [optional] 
**Resource** | [**ResourceV2**](resource-v2) |  | [optional] 
**Source** | [**MachineIdentityV2Source**](machine-identity-v2-source) |  | [optional] 
**UserEntitlements** | [**[]UserEntitlementV2**](user-entitlement-v2) | The user entitlements associated to the machine identity. | [optional] 
**BusinessApplicationRefs** | [**[]BusinessApplicationRef**](business-application-ref) | Optional Business Application references associated with this machine identity. Available when Business Applications is enabled for the tenant. On create and patch, at most one reference is allowed and is persisted as a `MANUAL` correlation. When Business Applications is not enabled, this field is null on responses and is rejected (`400`) if supplied on write. | [optional] 
**EffectiveSanctionedStatus** | **SanctionedStatus** | Derived sanctioned status from linked Business Applications; `UNKNOWN` when no refs are present. Available when Business Applications is enabled for the tenant; null when it is not enabled. Read-only on create and patch input. | [optional] [readonly] 
**Risk** | [**MachineIdentityV2Risk**](machine-identity-v2-risk) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Machineidentityv2 = Initialize-Machineidentityv2  -Id id12345 `
 -Name aName `
 -Created 2015-05-28T14:07:17Z `
 -Modified 2015-05-28T14:07:17Z `
 -Description Service account for nightly batch jobs `
 -Attributes {"privilegeLevel":"HIGH","region":"APAC"} `
 -ConnectorAttributes {"objectguid":"abc-123"} `
 -ManuallyEdited true `
 -ManuallyCreated true `
 -Owners null `
 -Subtype AI_AGENT `
 -SourceId 6d28b7c1-620c-49c6-b6d5-cbf81eb4b5fa `
 -Uuid f5dd23fe-3414-42b7-bb1c-869400ad7a10 `
 -NativeIdentity abc:123:dddd `
 -DatasetId 8886e5e3-63d0-462f-a195-d98da885b8dc `
 -Environment PRODUCTION `
 -ExistsOnSource TRUE `
 -Status ACTIVE `
 -Resource null `
 -Source null `
 -UserEntitlements null `
 -BusinessApplicationRefs null `
 -EffectiveSanctionedStatus null `
 -Risk null
```

- Convert the resource to JSON
```powershell
$Machineidentityv2 | ConvertTo-JSON
```


[[Back to top]](#) 

