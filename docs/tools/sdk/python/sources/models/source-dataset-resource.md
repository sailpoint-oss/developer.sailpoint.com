# SourceDatasetResource

# SourceDatasetResource

Resource definition for a source. On create, `name`, `type`, `datasetId`, and `schema` are required. The `schema` must define at least one attribute plus `identityAttribute` and `displayAttribute`. The resource `id` is always server-generated from `name` (`customer:` plus a normalized form of `name`); any client-supplied `id` is ignored. After creation, schema attribute edits are made through the source schema APIs. `datasetId` associates the resource with a dataset and is recorded in the resource schema configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Resource identifier. Server-generated on create. | [optional] [readonly] 
**name** | **str** | Display name of the resource. Required on create. | [optional] 
**features** | **[]str** | Feature identifiers supported by this resource. | [optional] 
**type** | **str** | Resource type. Required on create. | [optional] 
**dataset_id** | **str** | Dataset identifier to associate this resource with. Required on create. | [optional] 
**var_schema** | [**ModelSchema**](model-schema) |  | [optional] 
\}

## Example

```python
from sailpoint.sources.models.source_dataset_resource import SourceDatasetResource

source_dataset_resource = SourceDatasetResource(
id='aws:iam-role',
name='Account',
features=["Create","Delete"],
type='std:resource',
dataset_id='cmdb-servicenow:applications',
var_schema=sailpoint.sources.models.schema.Schema(
                    id = '2c9180835d191a86015d28455b4a2329', 
                    name = 'account', 
                    native_object_type = 'User', 
                    identity_attribute = 'sAMAccountName', 
                    display_attribute = 'distinguishedName', 
                    hierarchy_attribute = 'memberOf', 
                    include_permissions = False, 
                    features = ["PROVISIONING","NO_PERMISSIONS_PROVISIONING","GROUPS_HAVE_MEMBERS"], 
                    configuration = {"groupMemberAttribute":"member"}, 
                    attributes = [{"name":"sAMAccountName","type":"STRING","isMultiValued":false,"isEntitlement":false,"isGroup":false},{"name":"memberOf","type":"STRING","schema":{"type":"CONNECTOR_SCHEMA","id":"2c9180887671ff8c01767b4671fc7d60","name":"group"},"description":"Group membership","isMultiValued":true,"isEntitlement":true,"isGroup":true}], 
                    created = '2019-12-24T22:32:58.104Z', 
                    modified = '2019-12-31T20:22:28.104Z', )
)

```
[[Back to top]](#) 

