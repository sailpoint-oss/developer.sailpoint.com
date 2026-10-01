# SourceDataset

# SourceDataset

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | Dataset identifier. Server-generated on create. | [readonly] [default to undefined]
**name** | **(optional)** `string` | Display name of the dataset. Required on create. | [default to undefined]
**description** | **(optional)** `string` | Description of the dataset. | [default to undefined]
**aggregationEnabled** | **(optional)** `boolean` | Whether aggregation is enabled for this dataset on the source. | [default to false]
**resources** | **(optional)** `Array<SourceDatasetResourceReference>` | Simplified resource references associated with this dataset. | [default to undefined]

