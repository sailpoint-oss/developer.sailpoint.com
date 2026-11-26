# Intelidentityambiguousbody

# Intelidentityambiguousbody

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DetailCode** | **string** | Constant detail code indicating that more than one identity matched the filter. | 
**TrackingId** | Pointer to **string** | Unique tracking id for the error. | [optional] 
**Messages** | Pointer to [**[]ErrorMessageDto**](error-message-dto) | Generic localized reason for error | [optional] 
**Causes** | Pointer to [**[]ErrorMessageDto**](error-message-dto) | Plain-text descriptive reasons to provide additional detail to the text provided in the messages field | [optional] 
**Candidates** | [**[]Intelidentityambiguouscandidate**](intelidentityambiguouscandidate) | Identities that matched the ambiguous filter expression. | 

## Methods

### NewIntelidentityambiguousbody

`func NewIntelidentityambiguousbody(detailCode string, candidates []Intelidentityambiguouscandidate, ) *Intelidentityambiguousbody`

NewIntelidentityambiguousbody instantiates a new Intelidentityambiguousbody object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIntelidentityambiguousbodyWithDefaults

`func NewIntelidentityambiguousbodyWithDefaults() *Intelidentityambiguousbody`

NewIntelidentityambiguousbodyWithDefaults instantiates a new Intelidentityambiguousbody object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDetailCode

`func (o *Intelidentityambiguousbody) GetDetailCode() string`

GetDetailCode returns the DetailCode field if non-nil, zero value otherwise.

### GetDetailCodeOk

`func (o *Intelidentityambiguousbody) GetDetailCodeOk() (*string, bool)`

GetDetailCodeOk returns a tuple with the DetailCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDetailCode

`func (o *Intelidentityambiguousbody) SetDetailCode(v string)`

SetDetailCode sets DetailCode field to given value.


### GetTrackingId

`func (o *Intelidentityambiguousbody) GetTrackingId() string`

GetTrackingId returns the TrackingId field if non-nil, zero value otherwise.

### GetTrackingIdOk

`func (o *Intelidentityambiguousbody) GetTrackingIdOk() (*string, bool)`

GetTrackingIdOk returns a tuple with the TrackingId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTrackingId

`func (o *Intelidentityambiguousbody) SetTrackingId(v string)`

SetTrackingId sets TrackingId field to given value.

### HasTrackingId

`func (o *Intelidentityambiguousbody) HasTrackingId() bool`

HasTrackingId returns a boolean if a field has been set.

### GetMessages

`func (o *Intelidentityambiguousbody) GetMessages() []ErrorMessageDto`

GetMessages returns the Messages field if non-nil, zero value otherwise.

### GetMessagesOk

`func (o *Intelidentityambiguousbody) GetMessagesOk() (*[]ErrorMessageDto, bool)`

GetMessagesOk returns a tuple with the Messages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessages

`func (o *Intelidentityambiguousbody) SetMessages(v []ErrorMessageDto)`

SetMessages sets Messages field to given value.

### HasMessages

`func (o *Intelidentityambiguousbody) HasMessages() bool`

HasMessages returns a boolean if a field has been set.

### GetCauses

`func (o *Intelidentityambiguousbody) GetCauses() []ErrorMessageDto`

GetCauses returns the Causes field if non-nil, zero value otherwise.

### GetCausesOk

`func (o *Intelidentityambiguousbody) GetCausesOk() (*[]ErrorMessageDto, bool)`

GetCausesOk returns a tuple with the Causes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCauses

`func (o *Intelidentityambiguousbody) SetCauses(v []ErrorMessageDto)`

SetCauses sets Causes field to given value.

### HasCauses

`func (o *Intelidentityambiguousbody) HasCauses() bool`

HasCauses returns a boolean if a field has been set.

### GetCandidates

`func (o *Intelidentityambiguousbody) GetCandidates() []Intelidentityambiguouscandidate`

GetCandidates returns the Candidates field if non-nil, zero value otherwise.

### GetCandidatesOk

`func (o *Intelidentityambiguousbody) GetCandidatesOk() (*[]Intelidentityambiguouscandidate, bool)`

GetCandidatesOk returns a tuple with the Candidates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCandidates

`func (o *Intelidentityambiguousbody) SetCandidates(v []Intelidentityambiguouscandidate)`

SetCandidates sets Candidates field to given value.



