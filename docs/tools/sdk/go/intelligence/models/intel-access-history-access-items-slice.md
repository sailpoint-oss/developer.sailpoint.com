# IntelAccessHistoryAccessItemsSlice

# IntelAccessHistoryAccessItemsSlice

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Items** | **[]IntelAccessItemHistoryEvent** | First page of access-item history events for the identity. | 
**TotalCount** | Pointer to **int32** | Total number of events in this category; omitted when `items` is empty. | [optional] 
**Next** | Pointer to **string** | Absolute URL to the next access-items page; present when totalCount exceeds the items returned on this page. | [optional] 

## Methods

### NewIntelAccessHistoryAccessItemsSlice

`func NewIntelAccessHistoryAccessItemsSlice(items []IntelAccessItemHistoryEvent, ) *IntelAccessHistoryAccessItemsSlice`

NewIntelAccessHistoryAccessItemsSlice instantiates a new IntelAccessHistoryAccessItemsSlice object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIntelAccessHistoryAccessItemsSliceWithDefaults

`func NewIntelAccessHistoryAccessItemsSliceWithDefaults() *IntelAccessHistoryAccessItemsSlice`

NewIntelAccessHistoryAccessItemsSliceWithDefaults instantiates a new IntelAccessHistoryAccessItemsSlice object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetItems

`func (o *IntelAccessHistoryAccessItemsSlice) GetItems() []IntelAccessItemHistoryEvent`

GetItems returns the Items field if non-nil, zero value otherwise.

### GetItemsOk

`func (o *IntelAccessHistoryAccessItemsSlice) GetItemsOk() (*[]IntelAccessItemHistoryEvent, bool)`

GetItemsOk returns a tuple with the Items field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItems

`func (o *IntelAccessHistoryAccessItemsSlice) SetItems(v []IntelAccessItemHistoryEvent)`

SetItems sets Items field to given value.


### GetTotalCount

`func (o *IntelAccessHistoryAccessItemsSlice) GetTotalCount() int32`

GetTotalCount returns the TotalCount field if non-nil, zero value otherwise.

### GetTotalCountOk

`func (o *IntelAccessHistoryAccessItemsSlice) GetTotalCountOk() (*int32, bool)`

GetTotalCountOk returns a tuple with the TotalCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalCount

`func (o *IntelAccessHistoryAccessItemsSlice) SetTotalCount(v int32)`

SetTotalCount sets TotalCount field to given value.

### HasTotalCount

`func (o *IntelAccessHistoryAccessItemsSlice) HasTotalCount() bool`

HasTotalCount returns a boolean if a field has been set.

### GetNext

`func (o *IntelAccessHistoryAccessItemsSlice) GetNext() string`

GetNext returns the Next field if non-nil, zero value otherwise.

### GetNextOk

`func (o *IntelAccessHistoryAccessItemsSlice) GetNextOk() (*string, bool)`

GetNextOk returns a tuple with the Next field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNext

`func (o *IntelAccessHistoryAccessItemsSlice) SetNext(v string)`

SetNext sets Next field to given value.

### HasNext

`func (o *IntelAccessHistoryAccessItemsSlice) HasNext() bool`

HasNext returns a boolean if a field has been set.


