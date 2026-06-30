---
id: v1-delete-parameter-v1409-response
title: DeleteParameterV1409Response
pagination_label: DeleteParameterV1409Response
sidebar_label: DeleteParameterV1409Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'DeleteParameterV1409Response', 'V1DeleteParameterV1409Response'] 
slug: /tools/sdk/go/parameterstorage/models/delete-parameter-v1409-response
tags: ['SDK', 'Software Development Kit', 'DeleteParameterV1409Response', 'V1DeleteParameterV1409Response']
---

# DeleteParameterV1409Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ErrorName** | Pointer to **interface{}** | A message describing the error | [optional] 
**ErrorMessage** | Pointer to **interface{}** | Description of the error | [optional] 
**TrackingId** | Pointer to **string** | Unique tracking id for the error. | [optional] 

## Methods

### NewDeleteParameterV1409Response

`func NewDeleteParameterV1409Response() *DeleteParameterV1409Response`

NewDeleteParameterV1409Response instantiates a new DeleteParameterV1409Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDeleteParameterV1409ResponseWithDefaults

`func NewDeleteParameterV1409ResponseWithDefaults() *DeleteParameterV1409Response`

NewDeleteParameterV1409ResponseWithDefaults instantiates a new DeleteParameterV1409Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetErrorName

`func (o *DeleteParameterV1409Response) GetErrorName() interface{}`

GetErrorName returns the ErrorName field if non-nil, zero value otherwise.

### GetErrorNameOk

`func (o *DeleteParameterV1409Response) GetErrorNameOk() (*interface{}, bool)`

GetErrorNameOk returns a tuple with the ErrorName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrorName

`func (o *DeleteParameterV1409Response) SetErrorName(v interface{})`

SetErrorName sets ErrorName field to given value.

### HasErrorName

`func (o *DeleteParameterV1409Response) HasErrorName() bool`

HasErrorName returns a boolean if a field has been set.

### SetErrorNameNil

`func (o *DeleteParameterV1409Response) SetErrorNameNil(b bool)`

 SetErrorNameNil sets the value for ErrorName to be an explicit nil

### UnsetErrorName
`func (o *DeleteParameterV1409Response) UnsetErrorName()`

UnsetErrorName ensures that no value is present for ErrorName, not even an explicit nil
### GetErrorMessage

`func (o *DeleteParameterV1409Response) GetErrorMessage() interface{}`

GetErrorMessage returns the ErrorMessage field if non-nil, zero value otherwise.

### GetErrorMessageOk

`func (o *DeleteParameterV1409Response) GetErrorMessageOk() (*interface{}, bool)`

GetErrorMessageOk returns a tuple with the ErrorMessage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrorMessage

`func (o *DeleteParameterV1409Response) SetErrorMessage(v interface{})`

SetErrorMessage sets ErrorMessage field to given value.

### HasErrorMessage

`func (o *DeleteParameterV1409Response) HasErrorMessage() bool`

HasErrorMessage returns a boolean if a field has been set.

### SetErrorMessageNil

`func (o *DeleteParameterV1409Response) SetErrorMessageNil(b bool)`

 SetErrorMessageNil sets the value for ErrorMessage to be an explicit nil

### UnsetErrorMessage
`func (o *DeleteParameterV1409Response) UnsetErrorMessage()`

UnsetErrorMessage ensures that no value is present for ErrorMessage, not even an explicit nil
### GetTrackingId

`func (o *DeleteParameterV1409Response) GetTrackingId() string`

GetTrackingId returns the TrackingId field if non-nil, zero value otherwise.

### GetTrackingIdOk

`func (o *DeleteParameterV1409Response) GetTrackingIdOk() (*string, bool)`

GetTrackingIdOk returns a tuple with the TrackingId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTrackingId

`func (o *DeleteParameterV1409Response) SetTrackingId(v string)`

SetTrackingId sets TrackingId field to given value.

### HasTrackingId

`func (o *DeleteParameterV1409Response) HasTrackingId() bool`

HasTrackingId returns a boolean if a field has been set.


