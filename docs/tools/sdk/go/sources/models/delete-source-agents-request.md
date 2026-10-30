# DeleteSourceAgentsRequest

# DeleteSourceAgentsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DatasetIds** | **[]string** | IDs of the datasets to delete AI agents for. All AI agents from these datasets on the source are deleted. Must contain at least one ID, and IDs cannot be blank. | 

## Methods

### NewDeleteSourceAgentsRequest

`func NewDeleteSourceAgentsRequest(datasetIds []string, ) *DeleteSourceAgentsRequest`

NewDeleteSourceAgentsRequest instantiates a new DeleteSourceAgentsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDeleteSourceAgentsRequestWithDefaults

`func NewDeleteSourceAgentsRequestWithDefaults() *DeleteSourceAgentsRequest`

NewDeleteSourceAgentsRequestWithDefaults instantiates a new DeleteSourceAgentsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDatasetIds

`func (o *DeleteSourceAgentsRequest) GetDatasetIds() []string`

GetDatasetIds returns the DatasetIds field if non-nil, zero value otherwise.

### GetDatasetIdsOk

`func (o *DeleteSourceAgentsRequest) GetDatasetIdsOk() (*[]string, bool)`

GetDatasetIdsOk returns a tuple with the DatasetIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDatasetIds

`func (o *DeleteSourceAgentsRequest) SetDatasetIds(v []string)`

SetDatasetIds sets DatasetIds field to given value.



