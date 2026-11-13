# MachineIdentityDailyCountMetric

# MachineIdentityDailyCountMetric

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EntityType** | Pointer to **string** | Entity type the counts apply to. | [optional] 
**SubType** | Pointer to **string** | Subtype the counts apply to. `UNKNOWN` is used for entities that have no subtype. | [optional] 
**TotalCount** | Pointer to **int64** | Number of entities of this type and subtype that existed on the day. | [optional] 
**CreatedCount** | Pointer to **int64** | Number of entities of this type and subtype created on the day. | [optional] 
**CreatedCount30d** | Pointer to **int64** | Number of entities of this type and subtype created in the 30 days ending on the day. | [optional] 

## Methods

### NewMachineIdentityDailyCountMetric

`func NewMachineIdentityDailyCountMetric() *MachineIdentityDailyCountMetric`

NewMachineIdentityDailyCountMetric instantiates a new MachineIdentityDailyCountMetric object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMachineIdentityDailyCountMetricWithDefaults

`func NewMachineIdentityDailyCountMetricWithDefaults() *MachineIdentityDailyCountMetric`

NewMachineIdentityDailyCountMetricWithDefaults instantiates a new MachineIdentityDailyCountMetric object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEntityType

`func (o *MachineIdentityDailyCountMetric) GetEntityType() string`

GetEntityType returns the EntityType field if non-nil, zero value otherwise.

### GetEntityTypeOk

`func (o *MachineIdentityDailyCountMetric) GetEntityTypeOk() (*string, bool)`

GetEntityTypeOk returns a tuple with the EntityType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntityType

`func (o *MachineIdentityDailyCountMetric) SetEntityType(v string)`

SetEntityType sets EntityType field to given value.

### HasEntityType

`func (o *MachineIdentityDailyCountMetric) HasEntityType() bool`

HasEntityType returns a boolean if a field has been set.

### GetSubType

`func (o *MachineIdentityDailyCountMetric) GetSubType() string`

GetSubType returns the SubType field if non-nil, zero value otherwise.

### GetSubTypeOk

`func (o *MachineIdentityDailyCountMetric) GetSubTypeOk() (*string, bool)`

GetSubTypeOk returns a tuple with the SubType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubType

`func (o *MachineIdentityDailyCountMetric) SetSubType(v string)`

SetSubType sets SubType field to given value.

### HasSubType

`func (o *MachineIdentityDailyCountMetric) HasSubType() bool`

HasSubType returns a boolean if a field has been set.

### GetTotalCount

`func (o *MachineIdentityDailyCountMetric) GetTotalCount() int64`

GetTotalCount returns the TotalCount field if non-nil, zero value otherwise.

### GetTotalCountOk

`func (o *MachineIdentityDailyCountMetric) GetTotalCountOk() (*int64, bool)`

GetTotalCountOk returns a tuple with the TotalCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalCount

`func (o *MachineIdentityDailyCountMetric) SetTotalCount(v int64)`

SetTotalCount sets TotalCount field to given value.

### HasTotalCount

`func (o *MachineIdentityDailyCountMetric) HasTotalCount() bool`

HasTotalCount returns a boolean if a field has been set.

### GetCreatedCount

`func (o *MachineIdentityDailyCountMetric) GetCreatedCount() int64`

GetCreatedCount returns the CreatedCount field if non-nil, zero value otherwise.

### GetCreatedCountOk

`func (o *MachineIdentityDailyCountMetric) GetCreatedCountOk() (*int64, bool)`

GetCreatedCountOk returns a tuple with the CreatedCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedCount

`func (o *MachineIdentityDailyCountMetric) SetCreatedCount(v int64)`

SetCreatedCount sets CreatedCount field to given value.

### HasCreatedCount

`func (o *MachineIdentityDailyCountMetric) HasCreatedCount() bool`

HasCreatedCount returns a boolean if a field has been set.

### GetCreatedCount30d

`func (o *MachineIdentityDailyCountMetric) GetCreatedCount30d() int64`

GetCreatedCount30d returns the CreatedCount30d field if non-nil, zero value otherwise.

### GetCreatedCount30dOk

`func (o *MachineIdentityDailyCountMetric) GetCreatedCount30dOk() (*int64, bool)`

GetCreatedCount30dOk returns a tuple with the CreatedCount30d field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedCount30d

`func (o *MachineIdentityDailyCountMetric) SetCreatedCount30d(v int64)`

SetCreatedCount30d sets CreatedCount30d field to given value.

### HasCreatedCount30d

`func (o *MachineIdentityDailyCountMetric) HasCreatedCount30d() bool`

HasCreatedCount30d returns a boolean if a field has been set.


