# Intelidentitymachineaggregate

# Intelidentitymachineaggregate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Identity Security Cloud identifier for this non-human identity. | [required]
**Type** |  **Enum** [  "NHI" ] | Identity type for the matched record. | [required]
**DisplayName** | **String** | Preferred display name for the non-human identity. | [optional] 
**Description** | **String** | Optional description from upstream when present. | [optional] 
**Subtype** | **String** | Sub-classification label for that NHI. | [optional] 
**Created** | **System.DateTime** | Timestamp when the identity record was created in Identity Security Cloud. | [optional] 
**Modified** | **System.DateTime** | Timestamp when the identity record was last modified in Identity Security Cloud. | [optional] 
**MatchConfidence** |  **Enum** [  "exact",    "partial" ] | Match quality for opaque prefix resolution; omitted for direct id eq and exact opaque matches. | [optional] 
**IdentityGraph** | [**Intelidentitygraphlink**](intelidentitygraphlink) | Omitted when the tenant lacks the idg:base license. | [optional] 
**Accounts** | [**Intelmachineaccountsslice**](intelmachineaccountsslice) |  | [required]
**NativeIdentity** | **String** | Native identifier on the source system. | [required]
**DatasetId** | **String** | Dataset identifier from upstream machine-identity services when present. | [optional] 
**Source** | [**Intelmachinesourcewire**](intelmachinesourcewire) | Source metadata for the machine identity when present upstream. | [optional] 
**ExistsOnSource** | **String** | Upstream existsOnSource value. Wire uses uppercase strings such as TRUE or FALSE. | [optional] 
**ManuallyEdited** | **Boolean** | True when an administrator manually edited machine identity attributes. | [optional] [default to $false]
**ManuallyCreated** | **Boolean** | True when the machine identity was created manually in Identity Security Cloud. | [optional] [default to $false]
**Owners** | [**Intelmachineidentityowners**](intelmachineidentityowners) |  | [required]
**UserEntitlements** | [**[]Intelmachineuserentitlement**](intelmachineuserentitlement) | Entitlements associated with the machine identity from upstream. | [optional] 
**Attributes** | **map[string]AnyType** | Connector or runtime metadata; empty object when absent upstream. | [required]
**Derived** | [**Intelmachinederived**](intelmachinederived) |  | [required]

## Examples

- Prepare the resource
```powershell
$Intelidentitymachineaggregate = Initialize-Intelidentitymachineaggregate  -Id ef38f94347e94562b5bb8424a56397d8 `
 -Type NHI `
 -DisplayName display name `
 -Description null `
 -Subtype AI Agent `
 -Created 2026-05-12T08:00Z `
 -Modified 2026-05-12T09:15:30Z `
 -MatchConfidence exact `
 -IdentityGraph null `
 -Accounts null `
 -NativeIdentity arn:aws:bedrock:us-east-1:336721:agent/ABCDEFGHI `
 -DatasetId dataset-001 `
 -Source null `
 -ExistsOnSource TRUE `
 -ManuallyEdited false `
 -ManuallyCreated false `
 -Owners null `
 -UserEntitlements null `
 -Attributes {} `
 -Derived null
```

- Convert the resource to JSON
```powershell
$Intelidentitymachineaggregate | ConvertTo-JSON
```


[[Back to top]](#) 

