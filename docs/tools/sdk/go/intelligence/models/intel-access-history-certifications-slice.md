# IntelAccessHistoryCertificationsSlice

# IntelAccessHistoryCertificationsSlice

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Items** | **[]IntelCertificationHistoryEvent** | First page of certification history events for the identity. | 
**TotalCount** | Pointer to **int32** | Total number of events in this category; omitted when `items` is empty. | [optional] 
**Next** | Pointer to **string** | Absolute URL to the next certifications page; present when totalCount exceeds the items returned on this page. | [optional] 

## Methods

### NewIntelAccessHistoryCertificationsSlice

`func NewIntelAccessHistoryCertificationsSlice(items []IntelCertificationHistoryEvent, ) *IntelAccessHistoryCertificationsSlice`

NewIntelAccessHistoryCertificationsSlice instantiates a new IntelAccessHistoryCertificationsSlice object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIntelAccessHistoryCertificationsSliceWithDefaults

`func NewIntelAccessHistoryCertificationsSliceWithDefaults() *IntelAccessHistoryCertificationsSlice`

NewIntelAccessHistoryCertificationsSliceWithDefaults instantiates a new IntelAccessHistoryCertificationsSlice object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetItems

`func (o *IntelAccessHistoryCertificationsSlice) GetItems() []IntelCertificationHistoryEvent`

GetItems returns the Items field if non-nil, zero value otherwise.

### GetItemsOk

`func (o *IntelAccessHistoryCertificationsSlice) GetItemsOk() (*[]IntelCertificationHistoryEvent, bool)`

GetItemsOk returns a tuple with the Items field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItems

`func (o *IntelAccessHistoryCertificationsSlice) SetItems(v []IntelCertificationHistoryEvent)`

SetItems sets Items field to given value.


### GetTotalCount

`func (o *IntelAccessHistoryCertificationsSlice) GetTotalCount() int32`

GetTotalCount returns the TotalCount field if non-nil, zero value otherwise.

### GetTotalCountOk

`func (o *IntelAccessHistoryCertificationsSlice) GetTotalCountOk() (*int32, bool)`

GetTotalCountOk returns a tuple with the TotalCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalCount

`func (o *IntelAccessHistoryCertificationsSlice) SetTotalCount(v int32)`

SetTotalCount sets TotalCount field to given value.

### HasTotalCount

`func (o *IntelAccessHistoryCertificationsSlice) HasTotalCount() bool`

HasTotalCount returns a boolean if a field has been set.

### GetNext

`func (o *IntelAccessHistoryCertificationsSlice) GetNext() string`

GetNext returns the Next field if non-nil, zero value otherwise.

### GetNextOk

`func (o *IntelAccessHistoryCertificationsSlice) GetNextOk() (*string, bool)`

GetNextOk returns a tuple with the Next field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNext

`func (o *IntelAccessHistoryCertificationsSlice) SetNext(v string)`

SetNext sets Next field to given value.

### HasNext

`func (o *IntelAccessHistoryCertificationsSlice) HasNext() bool`

HasNext returns a boolean if a field has been set.


