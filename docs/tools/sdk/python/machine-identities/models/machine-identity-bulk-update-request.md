# MachineIdentityBulkUpdateRequest

# MachineIdentityBulkUpdateRequest

Machine identities to update and the JSON Patch operations to apply to each of them.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ids** | **[]str** | IDs of the machine identities to update. Provide between 1 and 100 IDs. | [required]
**json_patch** | [**[]JsonPatchOperation**](json-patch-operation) | [JSON Patch](https://tools.ietf.org/html/rfc6902) operations applied to every machine identity in `ids`. Only these paths can be patched: `/description`, `/userEntitlements`, `/owners`, `/owners/primary`, and `/owners/secondary`. | [required]
\}

## Example

```python
from sailpoint.machine_identities.models.machine_identity_bulk_update_request import MachineIdentityBulkUpdateRequest

machine_identity_bulk_update_request = MachineIdentityBulkUpdateRequest(
ids=["ef38f94347e94562b5bb8424a56397d8","2c9180858082150f0180893dbaf44201"],
json_patch=[{"op":"replace","path":"/description","value":"Agent used by the finance team"}]
)

```
[[Back to top]](#) 

