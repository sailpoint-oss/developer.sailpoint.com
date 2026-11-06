# MachineIdentityAggregationRequest

# MachineIdentityAggregationRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DatasetIds** | **[]string** | List of dataset Ids to aggregate machine identities | 
**DisableOptimization** | Pointer to **bool** | Flag to disable optimization for the aggregation. Defaults to false when not provided. When set to true, it disables aggregation optimizations and may increase processing time. | [optional] [default to false]

## Methods

### NewMachineIdentityAggregationRequest

`func NewMachineIdentityAggregationRequest(datasetIds []string, ) *MachineIdentityAggregationRequest`

NewMachineIdentityAggregationRequest instantiates a new MachineIdentityAggregationRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMachineIdentityAggregationRequestWithDefaults

`func NewMachineIdentityAggregationRequestWithDefaults() *MachineIdentityAggregationRequest`

NewMachineIdentityAggregationRequestWithDefaults instantiates a new MachineIdentityAggregationRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDatasetIds

`func (o *MachineIdentityAggregationRequest) GetDatasetIds() []string`

GetDatasetIds returns the DatasetIds field if non-nil, zero value otherwise.

### GetDatasetIdsOk

`func (o *MachineIdentityAggregationRequest) GetDatasetIdsOk() (*[]string, bool)`

GetDatasetIdsOk returns a tuple with the DatasetIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDatasetIds

`func (o *MachineIdentityAggregationRequest) SetDatasetIds(v []string)`

SetDatasetIds sets DatasetIds field to given value.


### GetDisableOptimization

`func (o *MachineIdentityAggregationRequest) GetDisableOptimization() bool`

GetDisableOptimization returns the DisableOptimization field if non-nil, zero value otherwise.

### GetDisableOptimizationOk

`func (o *MachineIdentityAggregationRequest) GetDisableOptimizationOk() (*bool, bool)`

GetDisableOptimizationOk returns a tuple with the DisableOptimization field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisableOptimization

`func (o *MachineIdentityAggregationRequest) SetDisableOptimization(v bool)`

SetDisableOptimization sets DisableOptimization field to given value.

### HasDisableOptimization

`func (o *MachineIdentityAggregationRequest) HasDisableOptimization() bool`

HasDisableOptimization returns a boolean if a field has been set.


