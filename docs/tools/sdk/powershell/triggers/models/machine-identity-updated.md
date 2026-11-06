# MachineIdentityUpdated

# MachineIdentityUpdated

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EventType** |  **Enum** [  "MACHINE_IDENTITY_UPDATED" ] | Type of the event. | [required]
**MachineIdentity** | [**MachineIdentityUpdatedMachineIdentity**](machine-identity-updated-machine-identity) |  | [required]
**MachineIdentityChangeTypes** | **[]String** | Types of changes that occurred to the machine identity. | [required]
**UserEntitlementChanges** | [**MachineIdentityUpdatedUserEntitlementChanges**](machine-identity-updated-user-entitlement-changes) |  | [required]
**OwnerChanges** | [**MachineIdentityUpdatedOwnerChanges**](machine-identity-updated-owner-changes) |  | [required]
**SingleValueAttributeChanges** | [**[]MachineIdentityUpdatedSingleValueAttributeChangesInner**](machine-identity-updated-single-value-attribute-changes-inner) | Details about the single-value attribute changes that occurred. | [required]

## Examples

- Prepare the resource
```powershell
$MachineIdentityUpdated = Initialize-MachineIdentityUpdated  -EventType MACHINE_IDENTITY_UPDATED `
 -MachineIdentity null `
 -MachineIdentityChangeTypes ["ATTRIBUTES_CHANGED","USER_ENTITLEMENTS_ADDED","USER_ENTITLEMENTS_REMOVED","OWNERS_ADDED","OWNERS_REMOVED"] `
 -UserEntitlementChanges null `
 -OwnerChanges null `
 -SingleValueAttributeChanges null
```

- Convert the resource to JSON
```powershell
$MachineIdentityUpdated | ConvertTo-JSON
```


[[Back to top]](#) 

