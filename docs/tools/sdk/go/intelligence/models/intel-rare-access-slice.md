# IntelRareAccessSlice

# IntelRareAccessSlice

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Items** | [**[]IntelOutlierAccessItem**](intel-outlier-access-item) | First page of rare access items for the identity. | 
**TotalCount** | Pointer to **int32** | Total number of rare-access items for the resolved outlier; omitted when `items` is empty. | [optional] 
**Next** | Pointer to **string** | Absolute URL to the next rareAccess page; present when totalCount exceeds the items returned on this page. | [optional] 

## Methods

### NewIntelRareAccessSlice

`func NewIntelRareAccessSlice(items []IntelOutlierAccessItem, ) *IntelRareAccessSlice`

NewIntelRareAccessSlice instantiates a new IntelRareAccessSlice object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIntelRareAccessSliceWithDefaults

`func NewIntelRareAccessSliceWithDefaults() *IntelRareAccessSlice`

NewIntelRareAccessSliceWithDefaults instantiates a new IntelRareAccessSlice object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetItems

`func (o *IntelRareAccessSlice) GetItems() []IntelOutlierAccessItem`

GetItems returns the Items field if non-nil, zero value otherwise.

### GetItemsOk

`func (o *IntelRareAccessSlice) GetItemsOk() (*[]IntelOutlierAccessItem, bool)`

GetItemsOk returns a tuple with the Items field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItems

`func (o *IntelRareAccessSlice) SetItems(v []IntelOutlierAccessItem)`

SetItems sets Items field to given value.


### GetTotalCount

`func (o *IntelRareAccessSlice) GetTotalCount() int32`

GetTotalCount returns the TotalCount field if non-nil, zero value otherwise.

### GetTotalCountOk

`func (o *IntelRareAccessSlice) GetTotalCountOk() (*int32, bool)`

GetTotalCountOk returns a tuple with the TotalCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalCount

`func (o *IntelRareAccessSlice) SetTotalCount(v int32)`

SetTotalCount sets TotalCount field to given value.

### HasTotalCount

`func (o *IntelRareAccessSlice) HasTotalCount() bool`

HasTotalCount returns a boolean if a field has been set.

### GetNext

`func (o *IntelRareAccessSlice) GetNext() string`

GetNext returns the Next field if non-nil, zero value otherwise.

### GetNextOk

`func (o *IntelRareAccessSlice) GetNextOk() (*string, bool)`

GetNextOk returns a tuple with the Next field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNext

`func (o *IntelRareAccessSlice) SetNext(v string)`

SetNext sets Next field to given value.

### HasNext

`func (o *IntelRareAccessSlice) HasNext() bool`

HasNext returns a boolean if a field has been set.


