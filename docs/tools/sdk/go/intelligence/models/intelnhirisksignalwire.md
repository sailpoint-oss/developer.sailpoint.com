# Intelnhirisksignalwire

# Intelnhirisksignalwire

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | Stable identifier for this factor. | 
**Name** | **string** | Short title of the factor. | 
**Description** | **string** | Why this factor affects risk. | 
**SeverityValue** | Pointer to **string** | Severity of this factor. Omitted when not available. | [optional] 
**LastReceivedAt** | **SailPointTime** | When this factor was last observed. | 
**Status** | **string** | State of the factor. | 

## Methods

### NewIntelnhirisksignalwire

`func NewIntelnhirisksignalwire(id string, name string, description string, lastReceivedAt SailPointTime, status string, ) *Intelnhirisksignalwire`

NewIntelnhirisksignalwire instantiates a new Intelnhirisksignalwire object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIntelnhirisksignalwireWithDefaults

`func NewIntelnhirisksignalwireWithDefaults() *Intelnhirisksignalwire`

NewIntelnhirisksignalwireWithDefaults instantiates a new Intelnhirisksignalwire object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Intelnhirisksignalwire) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Intelnhirisksignalwire) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Intelnhirisksignalwire) SetId(v string)`

SetId sets Id field to given value.


### GetName

`func (o *Intelnhirisksignalwire) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Intelnhirisksignalwire) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Intelnhirisksignalwire) SetName(v string)`

SetName sets Name field to given value.


### GetDescription

`func (o *Intelnhirisksignalwire) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Intelnhirisksignalwire) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Intelnhirisksignalwire) SetDescription(v string)`

SetDescription sets Description field to given value.


### GetSeverityValue

`func (o *Intelnhirisksignalwire) GetSeverityValue() string`

GetSeverityValue returns the SeverityValue field if non-nil, zero value otherwise.

### GetSeverityValueOk

`func (o *Intelnhirisksignalwire) GetSeverityValueOk() (*string, bool)`

GetSeverityValueOk returns a tuple with the SeverityValue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSeverityValue

`func (o *Intelnhirisksignalwire) SetSeverityValue(v string)`

SetSeverityValue sets SeverityValue field to given value.

### HasSeverityValue

`func (o *Intelnhirisksignalwire) HasSeverityValue() bool`

HasSeverityValue returns a boolean if a field has been set.

### GetLastReceivedAt

`func (o *Intelnhirisksignalwire) GetLastReceivedAt() SailPointTime`

GetLastReceivedAt returns the LastReceivedAt field if non-nil, zero value otherwise.

### GetLastReceivedAtOk

`func (o *Intelnhirisksignalwire) GetLastReceivedAtOk() (*SailPointTime, bool)`

GetLastReceivedAtOk returns a tuple with the LastReceivedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastReceivedAt

`func (o *Intelnhirisksignalwire) SetLastReceivedAt(v SailPointTime)`

SetLastReceivedAt sets LastReceivedAt field to given value.


### GetStatus

`func (o *Intelnhirisksignalwire) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *Intelnhirisksignalwire) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *Intelnhirisksignalwire) SetStatus(v string)`

SetStatus sets Status field to given value.



