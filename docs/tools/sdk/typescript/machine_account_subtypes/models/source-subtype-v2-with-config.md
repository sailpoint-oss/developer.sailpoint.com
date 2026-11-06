# SourceSubtypeV2WithConfig

# SourceSubtypeV2WithConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | Unique identifier for the subtype. | [default to undefined]
**technicalName** | **(optional)** `string` | Technical name of the subtype. | [default to undefined]
**displayName** | **(optional)** `string` | Display name of the subtype. | [default to undefined]
**description** | **(optional)** `string` | Description of the subtype. | [default to undefined]
**type** | **(optional)** `string` | Entity type of the subtype. | [default to undefined]
**targetType** | **(optional)** `string` | Tier the subtype is defined at. `SOURCE` subtypes apply to one source. `CONNECTOR` subtypes apply to every source of a connector type. `CONNECTOR_VARIANT` is reserved for future use. | [default to undefined]
**targetId** | **(optional)** `string` | Scope key of the subtype. The source ID for `SOURCE` subtypes, or the connector type for `CONNECTOR` subtypes. | [default to undefined]
**targetName** | **(optional)** `string` | Display name of the target source or connector. | [default to undefined]
**classification** | **(optional)** `string` | Classification of the subtype. | [default to undefined]
**origin** | **(optional)** `string` | Tier of the parent subtype this subtype overrides. Set to `CONNECTOR` when a source subtype replaces a connector subtype with the same technical name in a source\'s effective subtype list. Otherwise `null`. | [default to undefined]
**profile** | **(optional)** `SourceSubtypeV2Profile` |  | [default to undefined]
**systemManaged** | **(optional)** `boolean` | Indicates whether the subtype is managed by the system. | [readonly] [default to false]
**created** | **(optional)** `string` | Creation timestamp. | [default to undefined]
**modified** | **(optional)** `string` | Last modified timestamp. | [default to undefined]
**target** | **(optional)** `SubtypeTarget` |  | [default to undefined]
**config** | **(optional)** `SourceSubtypeV2WithConfigAllOfConfig` |  | [default to undefined]

