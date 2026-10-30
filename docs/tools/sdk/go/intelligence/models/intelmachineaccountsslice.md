# Intelmachineaccountsslice

# Intelmachineaccountsslice

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Items** | [**[]Intelmachineaccountwire**](intelmachineaccountwire) | Machine accounts correlated to the non-human identity. | 
**TotalCount** | Pointer to **int32** | Correlated machine account count from aggregation; omitted when items is empty. | [optional] 
**Next** | Pointer to **string** | Next page URL when totalCount exceeds items returned. Includes isNHI=true. | [optional] 

## Methods

### NewIntelmachineaccountsslice

`func NewIntelmachineaccountsslice(items []Intelmachineaccountwire, ) *Intelmachineaccountsslice`

NewIntelmachineaccountsslice instantiates a new Intelmachineaccountsslice object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIntelmachineaccountssliceWithDefaults

`func NewIntelmachineaccountssliceWithDefaults() *Intelmachineaccountsslice`

NewIntelmachineaccountssliceWithDefaults instantiates a new Intelmachineaccountsslice object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetItems

`func (o *Intelmachineaccountsslice) GetItems() []Intelmachineaccountwire`

GetItems returns the Items field if non-nil, zero value otherwise.

### GetItemsOk

`func (o *Intelmachineaccountsslice) GetItemsOk() (*[]Intelmachineaccountwire, bool)`

GetItemsOk returns a tuple with the Items field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItems

`func (o *Intelmachineaccountsslice) SetItems(v []Intelmachineaccountwire)`

SetItems sets Items field to given value.


### GetTotalCount

`func (o *Intelmachineaccountsslice) GetTotalCount() int32`

GetTotalCount returns the TotalCount field if non-nil, zero value otherwise.

### GetTotalCountOk

`func (o *Intelmachineaccountsslice) GetTotalCountOk() (*int32, bool)`

GetTotalCountOk returns a tuple with the TotalCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalCount

`func (o *Intelmachineaccountsslice) SetTotalCount(v int32)`

SetTotalCount sets TotalCount field to given value.

### HasTotalCount

`func (o *Intelmachineaccountsslice) HasTotalCount() bool`

HasTotalCount returns a boolean if a field has been set.

### GetNext

`func (o *Intelmachineaccountsslice) GetNext() string`

GetNext returns the Next field if non-nil, zero value otherwise.

### GetNextOk

`func (o *Intelmachineaccountsslice) GetNextOk() (*string, bool)`

GetNextOk returns a tuple with the Next field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNext

`func (o *Intelmachineaccountsslice) SetNext(v string)`

SetNext sets Next field to given value.

### HasNext

`func (o *Intelmachineaccountsslice) HasNext() bool`

HasNext returns a boolean if a field has been set.


