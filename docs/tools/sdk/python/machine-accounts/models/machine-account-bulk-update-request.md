# MachineAccountBulkUpdateRequest

# MachineAccountBulkUpdateRequest

The machine accounts to update and the JSON Patch to apply to each of them.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ids** | **[]str** | IDs of the machine accounts to update. Provide between 1 and 100 IDs. | [required]
**json_patch** | [**[]JsonPatchOperation**](json-patch-operation) | [JSON Patch](https://tools.ietf.org/html/rfc6902) operations to apply to every machine account in `ids`. Each operation must target one of these top-level fields: `description`, `subtype`, `environment`, `machineIdentity`, `ownerIdentity`, `manuallyEdited`. | [required]
\}

## Example

```python
from sailpoint.machine_accounts.models.machine_account_bulk_update_request import MachineAccountBulkUpdateRequest

machine_account_bulk_update_request = MachineAccountBulkUpdateRequest(
ids=["ef38f94347e94562b5bb8424a56397d8","2c9180835d2e5168015d32f890ca1581"],
json_patch=[{"op":"replace","path":"/environment","value":"PROD"}]
)

```
[[Back to top]](#) 

