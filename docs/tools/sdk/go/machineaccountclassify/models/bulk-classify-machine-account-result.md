# BulkClassifyMachineAccountResult

# BulkClassifyMachineAccountResult

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Account ID from the request. | [optional] 
**Status** | Pointer to **int32** | HTTP status code for this account. `200` means the account was classified, `404` means the account was not found, and other codes describe why classification failed. | [optional] 
**IsMachine** | Pointer to **bool** | Indicates if the account is classified as machine. `false` when classification did not succeed. | [optional] [default to false]
**Message** | Pointer to **string** | Result message for this account. | [optional] 

## Methods

### NewBulkClassifyMachineAccountResult

`func NewBulkClassifyMachineAccountResult() *BulkClassifyMachineAccountResult`

NewBulkClassifyMachineAccountResult instantiates a new BulkClassifyMachineAccountResult object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBulkClassifyMachineAccountResultWithDefaults

`func NewBulkClassifyMachineAccountResultWithDefaults() *BulkClassifyMachineAccountResult`

NewBulkClassifyMachineAccountResultWithDefaults instantiates a new BulkClassifyMachineAccountResult object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *BulkClassifyMachineAccountResult) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *BulkClassifyMachineAccountResult) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *BulkClassifyMachineAccountResult) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *BulkClassifyMachineAccountResult) HasId() bool`

HasId returns a boolean if a field has been set.

### GetStatus

`func (o *BulkClassifyMachineAccountResult) GetStatus() int32`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *BulkClassifyMachineAccountResult) GetStatusOk() (*int32, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *BulkClassifyMachineAccountResult) SetStatus(v int32)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *BulkClassifyMachineAccountResult) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetIsMachine

`func (o *BulkClassifyMachineAccountResult) GetIsMachine() bool`

GetIsMachine returns the IsMachine field if non-nil, zero value otherwise.

### GetIsMachineOk

`func (o *BulkClassifyMachineAccountResult) GetIsMachineOk() (*bool, bool)`

GetIsMachineOk returns a tuple with the IsMachine field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsMachine

`func (o *BulkClassifyMachineAccountResult) SetIsMachine(v bool)`

SetIsMachine sets IsMachine field to given value.

### HasIsMachine

`func (o *BulkClassifyMachineAccountResult) HasIsMachine() bool`

HasIsMachine returns a boolean if a field has been set.

### GetMessage

`func (o *BulkClassifyMachineAccountResult) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *BulkClassifyMachineAccountResult) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *BulkClassifyMachineAccountResult) SetMessage(v string)`

SetMessage sets Message field to given value.

### HasMessage

`func (o *BulkClassifyMachineAccountResult) HasMessage() bool`

HasMessage returns a boolean if a field has been set.


