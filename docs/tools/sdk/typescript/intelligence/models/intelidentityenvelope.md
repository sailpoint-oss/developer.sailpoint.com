# Intelidentityenvelope

# Intelidentityenvelope

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | `string` | Identity Security Cloud identifier for this non-human identity. | [default to undefined]
**type** | `string` | Identity type for the matched record. | [default to undefined]
**displayName** | **(optional)** `string` | Preferred display name for the non-human identity. | [default to undefined]
**description** | **(optional)** `string` | Optional description from upstream when present. | [default to undefined]
**subtype** | **(optional)** `string` | Sub-classification label for that NHI. | [default to undefined]
**attributes** |  | Connector or runtime metadata; empty object when absent upstream. | [default to undefined]
**created** | **(optional)** `string` | Timestamp when the identity record was created in Identity Security Cloud. | [default to undefined]
**modified** | **(optional)** `string` | Timestamp when the identity record was last modified in Identity Security Cloud. | [default to undefined]
**alias** | **(optional)** `string` | Primary login or account alias for the identity. | [default to undefined]
**email** | **(optional)** `string` | Primary business email address for the identity. | [default to undefined]
**identityStatus** | **(optional)** `string` | Current identity lifecycle status label from Identity Security Cloud. | [default to undefined]
**isManager** | **(optional)** `boolean` | True when the identity is flagged as a people manager in the organization. | [default to false]
**identityGraph** | **(optional)** `Intelidentitygraphlink` | Omitted when the tenant lacks the idg:base license. | [default to undefined]
**nonHumanIdentityOwnership** | **(optional)** `Intelnonhumanidentityownership` | Omitted when the tenant lacks `idn:machine-identity-security`. When present, both `agents` and `applications` always render.  | [default to undefined]
**accounts** | `Intelmachineaccountsslice` |  | [default to undefined]
**privilegedAccess** | `IntelPrivilegedAccessSlice` | Full privileged access result for the identity. | [default to undefined]
**outliers** | **(optional)** `IntelOutliersSlice` | Rare access slice; omitted when the tenant lacks the IDA-outliers license. | [default to undefined]
**accessHistory** | `IntelAccessHistory` | Access-history split into access items and certifications sub-slices. | [default to undefined]
**matchConfidence** | **(optional)** `string` | Match quality for opaque prefix resolution; omitted for direct id eq and exact opaque matches. | [default to undefined]
**nativeIdentity** | `string` | Native identifier on the source system. | [default to undefined]
**datasetId** | **(optional)** `string` | Dataset identifier from upstream machine-identity services when present. | [default to undefined]
**source** | **(optional)** `Intelmachinesourcewire` | Source metadata for the machine identity when present upstream. | [default to undefined]
**existsOnSource** | **(optional)** `string` | Upstream existsOnSource value. Wire uses uppercase strings such as TRUE or FALSE. | [default to undefined]
**manuallyEdited** | **(optional)** `boolean` | True when an administrator manually edited machine identity attributes. | [default to false]
**manuallyCreated** | **(optional)** `boolean` | True when the machine identity was created manually in Identity Security Cloud. | [default to false]
**owners** | `Intelmachineidentityowners` |  | [default to undefined]
**userEntitlements** | **(optional)** `Array<Intelmachineuserentitlement>` | Entitlements associated with the machine identity from upstream. | [default to undefined]
**derived** | `Intelmachinederived` |  | [default to undefined]

