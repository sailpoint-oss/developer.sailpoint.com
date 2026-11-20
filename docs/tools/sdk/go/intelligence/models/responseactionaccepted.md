# Responseactionaccepted

# Responseactionaccepted

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RequestId** | **string** | Tracking handle and correlation id for the response action. | 
**Status** | **string** | Aggregate status of the response action. SUBMITTED at creation (registered; no correlated workflow execution observed yet). | 
**StatusUrl** | **string** | Relative URL to poll for the current status of the response action. | 

## Methods

### NewResponseactionaccepted

`func NewResponseactionaccepted(requestId string, status string, statusUrl string, ) *Responseactionaccepted`

NewResponseactionaccepted instantiates a new Responseactionaccepted object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewResponseactionacceptedWithDefaults

`func NewResponseactionacceptedWithDefaults() *Responseactionaccepted`

NewResponseactionacceptedWithDefaults instantiates a new Responseactionaccepted object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRequestId

`func (o *Responseactionaccepted) GetRequestId() string`

GetRequestId returns the RequestId field if non-nil, zero value otherwise.

### GetRequestIdOk

`func (o *Responseactionaccepted) GetRequestIdOk() (*string, bool)`

GetRequestIdOk returns a tuple with the RequestId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestId

`func (o *Responseactionaccepted) SetRequestId(v string)`

SetRequestId sets RequestId field to given value.


### GetStatus

`func (o *Responseactionaccepted) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *Responseactionaccepted) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *Responseactionaccepted) SetStatus(v string)`

SetStatus sets Status field to given value.


### GetStatusUrl

`func (o *Responseactionaccepted) GetStatusUrl() string`

GetStatusUrl returns the StatusUrl field if non-nil, zero value otherwise.

### GetStatusUrlOk

`func (o *Responseactionaccepted) GetStatusUrlOk() (*string, bool)`

GetStatusUrlOk returns a tuple with the StatusUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatusUrl

`func (o *Responseactionaccepted) SetStatusUrl(v string)`

SetStatusUrl sets StatusUrl field to given value.



