# MachineIdentityCreated

# MachineIdentityCreated


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event_type** |  **Enum** [  'MACHINE_IDENTITY_CREATED' ] | Type of the event. | [required]
**machine_identity** | [**MachineIdentityCreatedMachineIdentity**](machine-identity-created-machine-identity) |  | [required]
\}

## Example

```python
from sailpoint.triggers.models.machine_identity_created import MachineIdentityCreated

machine_identity_created = MachineIdentityCreated(
event_type='MACHINE_IDENTITY_CREATED',
machine_identity=sailpoint.triggers.models.machine_identity_created_machine_identity.MachineIdentityCreated_machineIdentity(
                    id = '8cd6c945-0057-4a6e-ad65-9cbf3b3c71b6', 
                    name = 'TestName', 
                    created = '2025-08-08T12:42:21.491666Z', 
                    modified = '2025-09-01T06:36:54.401476Z', 
                    business_application = 'MyBusinessApplication2', 
                    description = 'test description event', 
                    attributes = {"botUserId":"005KV00000BLoMCYA1"}, 
                    subtype = 'AI Agent', 
                    owners = [
                        {"type":"IDENTITY","id":"84d8c1b819144608b8b8bc3b84ddbb7b","name":"Jerrie admin3cf084","isPrimary":true}
                        ], 
                    source_id = 'c0201251a6ce4d268aba536cdd60a7f2', 
                    uuid = 'f5dd23fe-3414-42b7-bb1c-869400ad7a10', 
                    native_identity = 'abc:123:dddd1', 
                    manually_edited = True, 
                    manually_created = True, 
                    dataset_id = 'agentforce:agents', 
                    source = {"type":"SOURCE","id":"c0201251a6ce4d268aba536cdd60a7f2","name":"IdentityNow"}, 
                    user_entitlements = [
                        {"entitlementId":"2509f650c20a3ab5956be70f6f136fbc","displayName":"CN=Engineering-test-org3,OU=megapod-useast1-test-org3,OU=org-data-service,DC=TestAutomationAD,DC=local","source":{"type":"SOURCE","id":"7443d0ffb1304bbcbdf4c07b5c09d4f2","name":"ODS-AD-Source"}}
                        ], 
                    exists_on_source = 'NOT_APPLICABLE', )
)

```
[[Back to top]](#) 

