---
id: v1-create-auto-write-settings-v1409-response
title: CreateAutoWriteSettingsV1409Response
pagination_label: CreateAutoWriteSettingsV1409Response
sidebar_label: CreateAutoWriteSettingsV1409Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'CreateAutoWriteSettingsV1409Response', 'V1CreateAutoWriteSettingsV1409Response'] 
slug: /tools/sdk/go/suggestedentitlementdescription/models/create-auto-write-settings-v1409-response
tags: ['SDK', 'Software Development Kit', 'CreateAutoWriteSettingsV1409Response', 'V1CreateAutoWriteSettingsV1409Response']
---

# CreateAutoWriteSettingsV1409Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ErrorName** | Pointer to **interface{}** | A message describing the error | [optional] 
**ErrorMessage** | Pointer to **interface{}** | Description of the error | [optional] 
**TrackingId** | Pointer to **string** | Unique tracking id for the error. | [optional] 

## Methods

### NewCreateAutoWriteSettingsV1409Response

`func NewCreateAutoWriteSettingsV1409Response() *CreateAutoWriteSettingsV1409Response`

NewCreateAutoWriteSettingsV1409Response instantiates a new CreateAutoWriteSettingsV1409Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreateAutoWriteSettingsV1409ResponseWithDefaults

`func NewCreateAutoWriteSettingsV1409ResponseWithDefaults() *CreateAutoWriteSettingsV1409Response`

NewCreateAutoWriteSettingsV1409ResponseWithDefaults instantiates a new CreateAutoWriteSettingsV1409Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetErrorName

`func (o *CreateAutoWriteSettingsV1409Response) GetErrorName() interface{}`

GetErrorName returns the ErrorName field if non-nil, zero value otherwise.

### GetErrorNameOk

`func (o *CreateAutoWriteSettingsV1409Response) GetErrorNameOk() (*interface{}, bool)`

GetErrorNameOk returns a tuple with the ErrorName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrorName

`func (o *CreateAutoWriteSettingsV1409Response) SetErrorName(v interface{})`

SetErrorName sets ErrorName field to given value.

### HasErrorName

`func (o *CreateAutoWriteSettingsV1409Response) HasErrorName() bool`

HasErrorName returns a boolean if a field has been set.

### SetErrorNameNil

`func (o *CreateAutoWriteSettingsV1409Response) SetErrorNameNil(b bool)`

 SetErrorNameNil sets the value for ErrorName to be an explicit nil

### UnsetErrorName
`func (o *CreateAutoWriteSettingsV1409Response) UnsetErrorName()`

UnsetErrorName ensures that no value is present for ErrorName, not even an explicit nil
### GetErrorMessage

`func (o *CreateAutoWriteSettingsV1409Response) GetErrorMessage() interface{}`

GetErrorMessage returns the ErrorMessage field if non-nil, zero value otherwise.

### GetErrorMessageOk

`func (o *CreateAutoWriteSettingsV1409Response) GetErrorMessageOk() (*interface{}, bool)`

GetErrorMessageOk returns a tuple with the ErrorMessage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrorMessage

`func (o *CreateAutoWriteSettingsV1409Response) SetErrorMessage(v interface{})`

SetErrorMessage sets ErrorMessage field to given value.

### HasErrorMessage

`func (o *CreateAutoWriteSettingsV1409Response) HasErrorMessage() bool`

HasErrorMessage returns a boolean if a field has been set.

### SetErrorMessageNil

`func (o *CreateAutoWriteSettingsV1409Response) SetErrorMessageNil(b bool)`

 SetErrorMessageNil sets the value for ErrorMessage to be an explicit nil

### UnsetErrorMessage
`func (o *CreateAutoWriteSettingsV1409Response) UnsetErrorMessage()`

UnsetErrorMessage ensures that no value is present for ErrorMessage, not even an explicit nil
### GetTrackingId

`func (o *CreateAutoWriteSettingsV1409Response) GetTrackingId() string`

GetTrackingId returns the TrackingId field if non-nil, zero value otherwise.

### GetTrackingIdOk

`func (o *CreateAutoWriteSettingsV1409Response) GetTrackingIdOk() (*string, bool)`

GetTrackingIdOk returns a tuple with the TrackingId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTrackingId

`func (o *CreateAutoWriteSettingsV1409Response) SetTrackingId(v string)`

SetTrackingId sets TrackingId field to given value.

### HasTrackingId

`func (o *CreateAutoWriteSettingsV1409Response) HasTrackingId() bool`

HasTrackingId returns a boolean if a field has been set.


