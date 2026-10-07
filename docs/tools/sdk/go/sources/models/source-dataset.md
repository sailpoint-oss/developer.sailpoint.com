# SourceDataset

# SourceDataset

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Dataset identifier. Server-generated on create. | [optional] [readonly] 
**Name** | Pointer to **string** | Display name of the dataset. Required on create. | [optional] 
**Description** | Pointer to **string** | Description of the dataset. | [optional] 
**AggregationEnabled** | Pointer to **bool** | Whether aggregation is enabled for this dataset on the source. | [optional] [default to false]
**Resources** | Pointer to [**[]SourceDatasetResourceReference**](source-dataset-resource-reference) | Simplified resource references associated with this dataset. | [optional] 

## Methods

### NewSourceDataset

`func NewSourceDataset() *SourceDataset`

NewSourceDataset instantiates a new SourceDataset object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSourceDatasetWithDefaults

`func NewSourceDatasetWithDefaults() *SourceDataset`

NewSourceDatasetWithDefaults instantiates a new SourceDataset object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *SourceDataset) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *SourceDataset) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *SourceDataset) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *SourceDataset) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *SourceDataset) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *SourceDataset) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *SourceDataset) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *SourceDataset) HasName() bool`

HasName returns a boolean if a field has been set.

### GetDescription

`func (o *SourceDataset) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *SourceDataset) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *SourceDataset) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *SourceDataset) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetAggregationEnabled

`func (o *SourceDataset) GetAggregationEnabled() bool`

GetAggregationEnabled returns the AggregationEnabled field if non-nil, zero value otherwise.

### GetAggregationEnabledOk

`func (o *SourceDataset) GetAggregationEnabledOk() (*bool, bool)`

GetAggregationEnabledOk returns a tuple with the AggregationEnabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAggregationEnabled

`func (o *SourceDataset) SetAggregationEnabled(v bool)`

SetAggregationEnabled sets AggregationEnabled field to given value.

### HasAggregationEnabled

`func (o *SourceDataset) HasAggregationEnabled() bool`

HasAggregationEnabled returns a boolean if a field has been set.

### GetResources

`func (o *SourceDataset) GetResources() []SourceDatasetResourceReference`

GetResources returns the Resources field if non-nil, zero value otherwise.

### GetResourcesOk

`func (o *SourceDataset) GetResourcesOk() (*[]SourceDatasetResourceReference, bool)`

GetResourcesOk returns a tuple with the Resources field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResources

`func (o *SourceDataset) SetResources(v []SourceDatasetResourceReference)`

SetResources sets Resources field to given value.

### HasResources

`func (o *SourceDataset) HasResources() bool`

HasResources returns a boolean if a field has been set.


