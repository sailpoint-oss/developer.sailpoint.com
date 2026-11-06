# Uncorrelatedaccountsreportarguments

# Uncorrelatedaccountsreportarguments

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SelectedFormats** | Pointer to **[]string** | Output report file formats. These are formats for calling GET endpoint as query parameter 'fileFormat'.  In case report won't have this argument there will be ['CSV', 'PDF'] as default. | [optional] 

## Methods

### NewUncorrelatedaccountsreportarguments

`func NewUncorrelatedaccountsreportarguments() *Uncorrelatedaccountsreportarguments`

NewUncorrelatedaccountsreportarguments instantiates a new Uncorrelatedaccountsreportarguments object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUncorrelatedaccountsreportargumentsWithDefaults

`func NewUncorrelatedaccountsreportargumentsWithDefaults() *Uncorrelatedaccountsreportarguments`

NewUncorrelatedaccountsreportargumentsWithDefaults instantiates a new Uncorrelatedaccountsreportarguments object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSelectedFormats

`func (o *Uncorrelatedaccountsreportarguments) GetSelectedFormats() []string`

GetSelectedFormats returns the SelectedFormats field if non-nil, zero value otherwise.

### GetSelectedFormatsOk

`func (o *Uncorrelatedaccountsreportarguments) GetSelectedFormatsOk() (*[]string, bool)`

GetSelectedFormatsOk returns a tuple with the SelectedFormats field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSelectedFormats

`func (o *Uncorrelatedaccountsreportarguments) SetSelectedFormats(v []string)`

SetSelectedFormats sets SelectedFormats field to given value.

### HasSelectedFormats

`func (o *Uncorrelatedaccountsreportarguments) HasSelectedFormats() bool`

HasSelectedFormats returns a boolean if a field has been set.


