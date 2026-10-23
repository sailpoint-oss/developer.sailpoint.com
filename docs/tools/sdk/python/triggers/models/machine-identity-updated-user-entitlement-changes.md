# MachineIdentityUpdatedUserEntitlementChanges

# MachineIdentityUpdatedUserEntitlementChanges

Changes to user entitlements.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attribute_name** | **str** | Name of the attribute that changed. | [optional] 
**added** | **[]MachineIdentityUserEntitlements** | User entitlements that were added. | [optional] 
**removed** | **[]MachineIdentityUserEntitlements** | User entitlements that were removed. | [optional] 
\}

## Example

```python
from sailpoint.triggers.models.machine_identity_updated_user_entitlement_changes import MachineIdentityUpdatedUserEntitlementChanges

machine_identity_updated_user_entitlement_changes = MachineIdentityUpdatedUserEntitlementChanges(
attribute_name='userEntitlements',
added=[
                    {"entitlementId":"2509f650c20a3ab5956be70f6f136fbc","displayName":"CN=Engineering-test-org3,OU=megapod-useast1-test-org3,OU=org-data-service,DC=TestAutomationAD,DC=local","source":{"type":"SOURCE","id":"7443d0ffb1304bbcbdf4c07b5c09d4f2","name":"ODS-AD-Source"}}
                    ],
removed=[
                    {"entitlementId":"2509f650c20a3ab5956be70f6f136fbc","displayName":"CN=Engineering-test-org3,OU=megapod-useast1-test-org3,OU=org-data-service,DC=TestAutomationAD,DC=local","source":{"type":"SOURCE","id":"7443d0ffb1304bbcbdf4c07b5c09d4f2","name":"ODS-AD-Source"}}
                    ]
)

```
[[Back to top]](#) 

