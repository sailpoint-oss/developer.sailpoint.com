# IntelAccountsSlice

# IntelAccountsSlice

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Items** | [**[]IntelAccessAccountWire**](intel-access-account-wire) | First page of accounts for the identity. | 
**TotalCount** | Pointer to **int32** | Total number of accounts for this identity; omitted when `items` is empty. | [optional] 
**Next** | Pointer to **string** | Absolute URL to the next accounts page; present when totalCount exceeds the items returned on this page. | [optional] 

## Methods

### NewIntelAccountsSlice

`func NewIntelAccountsSlice(items []IntelAccessAccountWire, ) *IntelAccountsSlice`

NewIntelAccountsSlice instantiates a new IntelAccountsSlice object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIntelAccountsSliceWithDefaults

`func NewIntelAccountsSliceWithDefaults() *IntelAccountsSlice`

NewIntelAccountsSliceWithDefaults instantiates a new IntelAccountsSlice object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetItems

`func (o *IntelAccountsSlice) GetItems() []IntelAccessAccountWire`

GetItems returns the Items field if non-nil, zero value otherwise.

### GetItemsOk

`func (o *IntelAccountsSlice) GetItemsOk() (*[]IntelAccessAccountWire, bool)`

GetItemsOk returns a tuple with the Items field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItems

`func (o *IntelAccountsSlice) SetItems(v []IntelAccessAccountWire)`

SetItems sets Items field to given value.


### GetTotalCount

`func (o *IntelAccountsSlice) GetTotalCount() int32`

GetTotalCount returns the TotalCount field if non-nil, zero value otherwise.

### GetTotalCountOk

`func (o *IntelAccountsSlice) GetTotalCountOk() (*int32, bool)`

GetTotalCountOk returns a tuple with the TotalCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalCount

`func (o *IntelAccountsSlice) SetTotalCount(v int32)`

SetTotalCount sets TotalCount field to given value.

### HasTotalCount

`func (o *IntelAccountsSlice) HasTotalCount() bool`

HasTotalCount returns a boolean if a field has been set.

### GetNext

`func (o *IntelAccountsSlice) GetNext() string`

GetNext returns the Next field if non-nil, zero value otherwise.

### GetNextOk

`func (o *IntelAccountsSlice) GetNextOk() (*string, bool)`

GetNextOk returns a tuple with the Next field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNext

`func (o *IntelAccountsSlice) SetNext(v string)`

SetNext sets Next field to given value.

### HasNext

`func (o *IntelAccountsSlice) HasNext() bool`

HasNext returns a boolean if a field has been set.


