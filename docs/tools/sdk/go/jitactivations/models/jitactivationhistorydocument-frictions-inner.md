# JitactivationhistorydocumentFrictionsInner

# JitactivationhistorydocumentFrictionsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** | Type of friction control. | [optional] 
**BypassAllowed** | Pointer to **bool** | Whether the user had permission to bypass this friction. | [optional] [default to false]
**SubmittedData** | Pointer to **NullableString** | Data submitted by the user to satisfy this friction (e.g. ticket ID, justification text). | [optional] 
**Status** | Pointer to **string** | Completion status of this friction item. | [optional] 

## Methods

### NewJitactivationhistorydocumentFrictionsInner

`func NewJitactivationhistorydocumentFrictionsInner() *JitactivationhistorydocumentFrictionsInner`

NewJitactivationhistorydocumentFrictionsInner instantiates a new JitactivationhistorydocumentFrictionsInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewJitactivationhistorydocumentFrictionsInnerWithDefaults

`func NewJitactivationhistorydocumentFrictionsInnerWithDefaults() *JitactivationhistorydocumentFrictionsInner`

NewJitactivationhistorydocumentFrictionsInnerWithDefaults instantiates a new JitactivationhistorydocumentFrictionsInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *JitactivationhistorydocumentFrictionsInner) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *JitactivationhistorydocumentFrictionsInner) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *JitactivationhistorydocumentFrictionsInner) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *JitactivationhistorydocumentFrictionsInner) HasType() bool`

HasType returns a boolean if a field has been set.

### GetBypassAllowed

`func (o *JitactivationhistorydocumentFrictionsInner) GetBypassAllowed() bool`

GetBypassAllowed returns the BypassAllowed field if non-nil, zero value otherwise.

### GetBypassAllowedOk

`func (o *JitactivationhistorydocumentFrictionsInner) GetBypassAllowedOk() (*bool, bool)`

GetBypassAllowedOk returns a tuple with the BypassAllowed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBypassAllowed

`func (o *JitactivationhistorydocumentFrictionsInner) SetBypassAllowed(v bool)`

SetBypassAllowed sets BypassAllowed field to given value.

### HasBypassAllowed

`func (o *JitactivationhistorydocumentFrictionsInner) HasBypassAllowed() bool`

HasBypassAllowed returns a boolean if a field has been set.

### GetSubmittedData

`func (o *JitactivationhistorydocumentFrictionsInner) GetSubmittedData() string`

GetSubmittedData returns the SubmittedData field if non-nil, zero value otherwise.

### GetSubmittedDataOk

`func (o *JitactivationhistorydocumentFrictionsInner) GetSubmittedDataOk() (*string, bool)`

GetSubmittedDataOk returns a tuple with the SubmittedData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubmittedData

`func (o *JitactivationhistorydocumentFrictionsInner) SetSubmittedData(v string)`

SetSubmittedData sets SubmittedData field to given value.

### HasSubmittedData

`func (o *JitactivationhistorydocumentFrictionsInner) HasSubmittedData() bool`

HasSubmittedData returns a boolean if a field has been set.

### SetSubmittedDataNil

`func (o *JitactivationhistorydocumentFrictionsInner) SetSubmittedDataNil(b bool)`

 SetSubmittedDataNil sets the value for SubmittedData to be an explicit nil

### UnsetSubmittedData
`func (o *JitactivationhistorydocumentFrictionsInner) UnsetSubmittedData()`

UnsetSubmittedData ensures that no value is present for SubmittedData, not even an explicit nil
### GetStatus

`func (o *JitactivationhistorydocumentFrictionsInner) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *JitactivationhistorydocumentFrictionsInner) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *JitactivationhistorydocumentFrictionsInner) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *JitactivationhistorydocumentFrictionsInner) HasStatus() bool`

HasStatus returns a boolean if a field has been set.


