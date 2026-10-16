# Intelidentityenvelope

# Intelidentityenvelope

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Identity Security Cloud identifier for this non-human identity. | [required]
**Type** |  **Enum** [  "Human",    "NHI" ] | Identity type for the matched record. | [required]
**DisplayName** | **String** | Preferred display name for the non-human identity. | [optional] 
**Description** | **String** | Optional description from upstream when present. | [optional] 
**Subtype** | **String** | Sub-classification label for that NHI. | [optional] 
**Attributes** | **map[string]AnyType** | Connector or runtime metadata; empty object when absent upstream. | [required]
**Created** | **System.DateTime** | Timestamp when the identity record was created in Identity Security Cloud. | [optional] 
**Modified** | **System.DateTime** | Timestamp when the identity record was last modified in Identity Security Cloud. | [optional] 
**Alias** | **String** | Primary login or account alias for the identity. | [optional] 
**Email** | **String** | Primary business email address for the identity. | [optional] 
**IdentityStatus** | **String** | Current identity lifecycle status label from Identity Security Cloud. | [optional] 
**IsManager** | **Boolean** | True when the identity is flagged as a people manager in the organization. | [optional] [default to $false]
**IdentityGraph** | [**Intelidentitygraphlink**](intelidentitygraphlink) | Omitted when the tenant lacks the idg:base license. | [optional] 
**NonHumanIdentityOwnership** | [**Intelnonhumanidentityownership**](intelnonhumanidentityownership) | Omitted when the tenant lacks `idn:machine-identity-security`. When present, both `agents` and `applications` always render.  | [optional] 
**Accounts** | [**Intelmachineaccountsslice**](intelmachineaccountsslice) |  | [required]
**PrivilegedAccess** | [**IntelPrivilegedAccessSlice**](intel-privileged-access-slice) | Full privileged access result for the identity. | [required]
**Outliers** | [**IntelOutliersSlice**](intel-outliers-slice) | Rare access slice; omitted when the tenant lacks the IDA-outliers license. | [optional] 
**AccessHistory** | [**IntelAccessHistory**](intel-access-history) | Access-history split into access items and certifications sub-slices. | [required]
**MatchConfidence** |  **Enum** [  "exact",    "partial" ] | Match quality for opaque prefix resolution; omitted for direct id eq and exact opaque matches. | [optional] 
**NativeIdentity** | **String** | Native identifier on the source system. | [required]
**DatasetId** | **String** | Dataset identifier from upstream machine-identity services when present. | [optional] 
**Source** | [**Intelmachinesourcewire**](intelmachinesourcewire) | Source metadata for the machine identity when present upstream. | [optional] 
**ExistsOnSource** | **String** | Upstream existsOnSource value. Wire uses uppercase strings such as TRUE or FALSE. | [optional] 
**ManuallyEdited** | **Boolean** | True when an administrator manually edited machine identity attributes. | [optional] [default to $false]
**ManuallyCreated** | **Boolean** | True when the machine identity was created manually in Identity Security Cloud. | [optional] [default to $false]
**Owners** | [**Intelmachineidentityowners**](intelmachineidentityowners) |  | [required]
**UserEntitlements** | [**[]Intelmachineuserentitlement**](intelmachineuserentitlement) | Entitlements associated with the machine identity from upstream. | [optional] 
**Derived** | [**Intelmachinederived**](intelmachinederived) |  | [required]

## Examples

- Prepare the resource
```powershell
$Intelidentityenvelope = Initialize-Intelidentityenvelope  -Id ef38f94347e94562b5bb8424a56397d8 `
 -Type Human `
 -DisplayName display name `
 -Description null `
 -Subtype AI Agent `
 -Attributes {} `
 -Created 2026-05-12T08:00Z `
 -Modified 2026-05-12T09:15:30Z `
 -Alias example.user `
 -Email user@example.com `
 -IdentityStatus ACTIVE `
 -IsManager false `
 -IdentityGraph null `
 -NonHumanIdentityOwnership null `
 -Accounts null `
 -PrivilegedAccess null `
 -Outliers null `
 -AccessHistory null `
 -MatchConfidence exact `
 -NativeIdentity arn:aws:bedrock:us-east-1:336721:agent/ABCDEFGHI `
 -DatasetId dataset-001 `
 -Source null `
 -ExistsOnSource TRUE `
 -ManuallyEdited false `
 -ManuallyCreated false `
 -Owners null `
 -UserEntitlements null `
 -Derived null
```

- Convert the resource to JSON
```powershell
$Intelidentityenvelope | ConvertTo-JSON
```


[[Back to top]](#) 

