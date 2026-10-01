# Intelmachineaccountwire

# Intelmachineaccountwire

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Unique account identifier in Identity Security Cloud. | [required]
**Name** | **String** | Account name on the correlated source. | [required]
**NativeIdentity** | **String** | Native identifier on the source system. | [required]
**Source** | [**Intelmachinesourcewire**](intelmachinesourcewire) | Source metadata for the machine account when present upstream. | [required]
**Enabled** | **Boolean** | True when the account is enabled for use on the source. | [required]
**Locked** | **Boolean** | True when the account is locked on the source. | [required]
**MachineIdentity** | [**Intelmachineentityref**](intelmachineentityref) | Reference to the parent machine identity when populated upstream. | [required]
**OwnerIdentity** | [**Intelmachineentityref**](intelmachineentityref) | Reference to the owning human identity when populated upstream. | [required]
**Description** | **String** | Free-text account description from the source. | [required]
**Subtype** | **String** | Account subtype label from upstream classification. | [required]
**AccessType** | **String** | Access type label for the account (for example account or entitlement). | [required]
**Environment** | **String** | Environment label associated with the account. | [required]
**ClassificationMethod** | **String** | Method used to classify the account as a machine account. | [required]
**ManuallyEdited** | **Boolean** | True when an administrator manually edited account attributes. | [required]
**ManuallyCorrelated** | **Boolean** | True when an administrator manually correlated the account. | [required]
**HasEntitlements** | **Boolean** | True when the account holds one or more entitlements. | [required]
**Created** | **System.DateTime** | Timestamp when the account record was created. | [required]
**Modified** | **System.DateTime** | Timestamp when the account record was last modified. | [required]
**Attributes** | **map[string]AnyType** | Extended account attributes from the source connector. | [required]
**ConnectorAttributes** | **map[string]AnyType** | Connector-specific attribute bag from upstream. | [required]

## Examples

- Prepare the resource
```powershell
$Intelmachineaccountwire = Initialize-Intelmachineaccountwire  -Id 2c91808874ff91550175097daaec161c `
 -Name account-name `
 -NativeIdentity arn:aws:bedrock:us-east-1:336721:agent/ABCDEFGHI `
 -Source null `
 -Enabled true `
 -Locked false `
 -MachineIdentity null `
 -OwnerIdentity null `
 -Description Service account for automation `
 -Subtype Service Account `
 -AccessType account `
 -Environment production `
 -ClassificationMethod DISCOVERED `
 -ManuallyEdited false `
 -ManuallyCorrelated false `
 -HasEntitlements true `
 -Created 2026-01-01T00:00Z `
 -Modified 2026-05-01T00:00Z `
 -Attributes {} `
 -ConnectorAttributes {}
```

- Convert the resource to JSON
```powershell
$Intelmachineaccountwire | ConvertTo-JSON
```


[[Back to top]](#) 

