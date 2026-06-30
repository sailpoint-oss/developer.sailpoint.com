---
id: v1-create-domain-dkim-v1405-response
title: CreateDomainDkimV1405Response
pagination_label: CreateDomainDkimV1405Response
sidebar_label: CreateDomainDkimV1405Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'CreateDomainDkimV1405Response', 'V1CreateDomainDkimV1405Response'] 
slug: /tools/sdk/go/notifications/models/create-domain-dkim-v1405-response
tags: ['SDK', 'Software Development Kit', 'CreateDomainDkimV1405Response', 'V1CreateDomainDkimV1405Response']
---

# CreateDomainDkimV1405Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ErrorName** | Pointer to **interface{}** | A message describing the error | [optional] 
**ErrorMessage** | Pointer to **interface{}** | Description of the error | [optional] 
**TrackingId** | Pointer to **string** | Unique tracking id for the error. | [optional] 

## Methods

### NewCreateDomainDkimV1405Response

`func NewCreateDomainDkimV1405Response() *CreateDomainDkimV1405Response`

NewCreateDomainDkimV1405Response instantiates a new CreateDomainDkimV1405Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreateDomainDkimV1405ResponseWithDefaults

`func NewCreateDomainDkimV1405ResponseWithDefaults() *CreateDomainDkimV1405Response`

NewCreateDomainDkimV1405ResponseWithDefaults instantiates a new CreateDomainDkimV1405Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetErrorName

`func (o *CreateDomainDkimV1405Response) GetErrorName() interface{}`

GetErrorName returns the ErrorName field if non-nil, zero value otherwise.

### GetErrorNameOk

`func (o *CreateDomainDkimV1405Response) GetErrorNameOk() (*interface{}, bool)`

GetErrorNameOk returns a tuple with the ErrorName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrorName

`func (o *CreateDomainDkimV1405Response) SetErrorName(v interface{})`

SetErrorName sets ErrorName field to given value.

### HasErrorName

`func (o *CreateDomainDkimV1405Response) HasErrorName() bool`

HasErrorName returns a boolean if a field has been set.

### SetErrorNameNil

`func (o *CreateDomainDkimV1405Response) SetErrorNameNil(b bool)`

 SetErrorNameNil sets the value for ErrorName to be an explicit nil

### UnsetErrorName
`func (o *CreateDomainDkimV1405Response) UnsetErrorName()`

UnsetErrorName ensures that no value is present for ErrorName, not even an explicit nil
### GetErrorMessage

`func (o *CreateDomainDkimV1405Response) GetErrorMessage() interface{}`

GetErrorMessage returns the ErrorMessage field if non-nil, zero value otherwise.

### GetErrorMessageOk

`func (o *CreateDomainDkimV1405Response) GetErrorMessageOk() (*interface{}, bool)`

GetErrorMessageOk returns a tuple with the ErrorMessage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrorMessage

`func (o *CreateDomainDkimV1405Response) SetErrorMessage(v interface{})`

SetErrorMessage sets ErrorMessage field to given value.

### HasErrorMessage

`func (o *CreateDomainDkimV1405Response) HasErrorMessage() bool`

HasErrorMessage returns a boolean if a field has been set.

### SetErrorMessageNil

`func (o *CreateDomainDkimV1405Response) SetErrorMessageNil(b bool)`

 SetErrorMessageNil sets the value for ErrorMessage to be an explicit nil

### UnsetErrorMessage
`func (o *CreateDomainDkimV1405Response) UnsetErrorMessage()`

UnsetErrorMessage ensures that no value is present for ErrorMessage, not even an explicit nil
### GetTrackingId

`func (o *CreateDomainDkimV1405Response) GetTrackingId() string`

GetTrackingId returns the TrackingId field if non-nil, zero value otherwise.

### GetTrackingIdOk

`func (o *CreateDomainDkimV1405Response) GetTrackingIdOk() (*string, bool)`

GetTrackingIdOk returns a tuple with the TrackingId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTrackingId

`func (o *CreateDomainDkimV1405Response) SetTrackingId(v string)`

SetTrackingId sets TrackingId field to given value.

### HasTrackingId

`func (o *CreateDomainDkimV1405Response) HasTrackingId() bool`

HasTrackingId returns a boolean if a field has been set.


