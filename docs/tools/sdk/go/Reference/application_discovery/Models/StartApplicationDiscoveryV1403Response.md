---
id: v1-start-application-discovery-v1403-response
title: StartApplicationDiscoveryV1403Response
pagination_label: StartApplicationDiscoveryV1403Response
sidebar_label: StartApplicationDiscoveryV1403Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'StartApplicationDiscoveryV1403Response', 'V1StartApplicationDiscoveryV1403Response'] 
slug: /tools/sdk/go/applicationdiscovery/models/start-application-discovery-v1403-response
tags: ['SDK', 'Software Development Kit', 'StartApplicationDiscoveryV1403Response', 'V1StartApplicationDiscoveryV1403Response']
---

# StartApplicationDiscoveryV1403Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DetailCode** | Pointer to **string** | Fine-grained error code providing more detail of the error. | [optional] 
**TrackingId** | Pointer to **string** | Unique tracking id for the error. | [optional] 
**Messages** | Pointer to [**[]Errormessagedto**](errormessagedto) | Generic localized reason for error | [optional] 
**Causes** | Pointer to [**[]Errormessagedto**](errormessagedto) | Plain-text descriptive reasons to provide additional detail to the text provided in the messages field | [optional] 
**Error** | **string** | Error message when quota is exceeded | 

## Methods

### NewStartApplicationDiscoveryV1403Response

`func NewStartApplicationDiscoveryV1403Response(error_ string, ) *StartApplicationDiscoveryV1403Response`

NewStartApplicationDiscoveryV1403Response instantiates a new StartApplicationDiscoveryV1403Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewStartApplicationDiscoveryV1403ResponseWithDefaults

`func NewStartApplicationDiscoveryV1403ResponseWithDefaults() *StartApplicationDiscoveryV1403Response`

NewStartApplicationDiscoveryV1403ResponseWithDefaults instantiates a new StartApplicationDiscoveryV1403Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDetailCode

`func (o *StartApplicationDiscoveryV1403Response) GetDetailCode() string`

GetDetailCode returns the DetailCode field if non-nil, zero value otherwise.

### GetDetailCodeOk

`func (o *StartApplicationDiscoveryV1403Response) GetDetailCodeOk() (*string, bool)`

GetDetailCodeOk returns a tuple with the DetailCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDetailCode

`func (o *StartApplicationDiscoveryV1403Response) SetDetailCode(v string)`

SetDetailCode sets DetailCode field to given value.

### HasDetailCode

`func (o *StartApplicationDiscoveryV1403Response) HasDetailCode() bool`

HasDetailCode returns a boolean if a field has been set.

### GetTrackingId

`func (o *StartApplicationDiscoveryV1403Response) GetTrackingId() string`

GetTrackingId returns the TrackingId field if non-nil, zero value otherwise.

### GetTrackingIdOk

`func (o *StartApplicationDiscoveryV1403Response) GetTrackingIdOk() (*string, bool)`

GetTrackingIdOk returns a tuple with the TrackingId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTrackingId

`func (o *StartApplicationDiscoveryV1403Response) SetTrackingId(v string)`

SetTrackingId sets TrackingId field to given value.

### HasTrackingId

`func (o *StartApplicationDiscoveryV1403Response) HasTrackingId() bool`

HasTrackingId returns a boolean if a field has been set.

### GetMessages

`func (o *StartApplicationDiscoveryV1403Response) GetMessages() []Errormessagedto`

GetMessages returns the Messages field if non-nil, zero value otherwise.

### GetMessagesOk

`func (o *StartApplicationDiscoveryV1403Response) GetMessagesOk() (*[]Errormessagedto, bool)`

GetMessagesOk returns a tuple with the Messages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessages

`func (o *StartApplicationDiscoveryV1403Response) SetMessages(v []Errormessagedto)`

SetMessages sets Messages field to given value.

### HasMessages

`func (o *StartApplicationDiscoveryV1403Response) HasMessages() bool`

HasMessages returns a boolean if a field has been set.

### GetCauses

`func (o *StartApplicationDiscoveryV1403Response) GetCauses() []Errormessagedto`

GetCauses returns the Causes field if non-nil, zero value otherwise.

### GetCausesOk

`func (o *StartApplicationDiscoveryV1403Response) GetCausesOk() (*[]Errormessagedto, bool)`

GetCausesOk returns a tuple with the Causes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCauses

`func (o *StartApplicationDiscoveryV1403Response) SetCauses(v []Errormessagedto)`

SetCauses sets Causes field to given value.

### HasCauses

`func (o *StartApplicationDiscoveryV1403Response) HasCauses() bool`

HasCauses returns a boolean if a field has been set.

### GetError

`func (o *StartApplicationDiscoveryV1403Response) GetError() string`

GetError returns the Error field if non-nil, zero value otherwise.

### GetErrorOk

`func (o *StartApplicationDiscoveryV1403Response) GetErrorOk() (*string, bool)`

GetErrorOk returns a tuple with the Error field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetError

`func (o *StartApplicationDiscoveryV1403Response) SetError(v string)`

SetError sets Error field to given value.



