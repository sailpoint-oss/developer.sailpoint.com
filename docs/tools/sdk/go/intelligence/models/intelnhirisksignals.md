# Intelnhirisksignals

# Intelnhirisksignals

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Items** | Pointer to [**[]Intelnhirisksignalwire**](intelnhirisksignalwire) | First page of risk factors. | [optional] 
**TotalCount** | Pointer to **int32** | Total number of risk factors. Omitted when `items` is empty. | [optional] 
**Next** | Pointer to **string** | URL for the next page of risk factors. Omitted when everything fits on this page. | [optional] 
**Message** | Pointer to **string** | Set when risk factors could not be loaded. `items`, `totalCount`, and `next` are omitted. | [optional] 
**Reason** | Pointer to **Intelenrichmentfailurereason** |  | [optional] 

## Methods

### NewIntelnhirisksignals

`func NewIntelnhirisksignals() *Intelnhirisksignals`

NewIntelnhirisksignals instantiates a new Intelnhirisksignals object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIntelnhirisksignalsWithDefaults

`func NewIntelnhirisksignalsWithDefaults() *Intelnhirisksignals`

NewIntelnhirisksignalsWithDefaults instantiates a new Intelnhirisksignals object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetItems

`func (o *Intelnhirisksignals) GetItems() []Intelnhirisksignalwire`

GetItems returns the Items field if non-nil, zero value otherwise.

### GetItemsOk

`func (o *Intelnhirisksignals) GetItemsOk() (*[]Intelnhirisksignalwire, bool)`

GetItemsOk returns a tuple with the Items field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItems

`func (o *Intelnhirisksignals) SetItems(v []Intelnhirisksignalwire)`

SetItems sets Items field to given value.

### HasItems

`func (o *Intelnhirisksignals) HasItems() bool`

HasItems returns a boolean if a field has been set.

### GetTotalCount

`func (o *Intelnhirisksignals) GetTotalCount() int32`

GetTotalCount returns the TotalCount field if non-nil, zero value otherwise.

### GetTotalCountOk

`func (o *Intelnhirisksignals) GetTotalCountOk() (*int32, bool)`

GetTotalCountOk returns a tuple with the TotalCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalCount

`func (o *Intelnhirisksignals) SetTotalCount(v int32)`

SetTotalCount sets TotalCount field to given value.

### HasTotalCount

`func (o *Intelnhirisksignals) HasTotalCount() bool`

HasTotalCount returns a boolean if a field has been set.

### GetNext

`func (o *Intelnhirisksignals) GetNext() string`

GetNext returns the Next field if non-nil, zero value otherwise.

### GetNextOk

`func (o *Intelnhirisksignals) GetNextOk() (*string, bool)`

GetNextOk returns a tuple with the Next field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNext

`func (o *Intelnhirisksignals) SetNext(v string)`

SetNext sets Next field to given value.

### HasNext

`func (o *Intelnhirisksignals) HasNext() bool`

HasNext returns a boolean if a field has been set.

### GetMessage

`func (o *Intelnhirisksignals) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *Intelnhirisksignals) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *Intelnhirisksignals) SetMessage(v string)`

SetMessage sets Message field to given value.

### HasMessage

`func (o *Intelnhirisksignals) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### GetReason

`func (o *Intelnhirisksignals) GetReason() Intelenrichmentfailurereason`

GetReason returns the Reason field if non-nil, zero value otherwise.

### GetReasonOk

`func (o *Intelnhirisksignals) GetReasonOk() (*Intelenrichmentfailurereason, bool)`

GetReasonOk returns a tuple with the Reason field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReason

`func (o *Intelnhirisksignals) SetReason(v Intelenrichmentfailurereason)`

SetReason sets Reason field to given value.

### HasReason

`func (o *Intelnhirisksignals) HasReason() bool`

HasReason returns a boolean if a field has been set.


