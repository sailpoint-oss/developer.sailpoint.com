# SubtypeTarget

# SubtypeTarget

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **(optional)** `string` | DTO type of the target. `SOURCE` for source-tier rows; `CONNECTOR` for connector-tier rows. | [default to undefined]
**id** | **(optional)** `string` | Target identifier. Source id for `SOURCE`. Connector specification id or connector type for `CONNECTOR`. | [default to undefined]
**name** | **(optional)** `string` | Human-readable target name. Falls back to `id` when a display name is not available. | [default to undefined]
**supportsProvisioning** | **(optional)** `boolean` | Whether the target can provision accounts. `false` when the target does not support provisioning. | [default to false]

