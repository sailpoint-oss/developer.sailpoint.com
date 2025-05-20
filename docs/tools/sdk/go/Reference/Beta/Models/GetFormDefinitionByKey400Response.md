---
id: beta-get-form-definition-by-key400-response
title: GetFormDefinitionByKey400Response
pagination_label: GetFormDefinitionByKey400Response
sidebar_label: GetFormDefinitionByKey400Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'GetFormDefinitionByKey400Response', 'BetaGetFormDefinitionByKey400Response'] 
slug: /tools/sdk/go/beta/models/get-form-definition-by-key400-response
tags: ['SDK', 'Software Development Kit', 'GetFormDefinitionByKey400Response', 'BetaGetFormDefinitionByKey400Response']
---

# GetFormDefinitionByKey400Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DetailCode** | Pointer to **string** |  | [optional] 
**Messages** | Pointer to [**[]ErrorMessage**](error-message) |  | [optional] 
**StatusCode** | Pointer to **int64** |  | [optional] 
**TrackingId** | Pointer to **string** |  | [optional] 

## Methods

### NewGetFormDefinitionByKey400Response

`func NewGetFormDefinitionByKey400Response() *GetFormDefinitionByKey400Response`

NewGetFormDefinitionByKey400Response instantiates a new GetFormDefinitionByKey400Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetFormDefinitionByKey400ResponseWithDefaults

`func NewGetFormDefinitionByKey400ResponseWithDefaults() *GetFormDefinitionByKey400Response`

NewGetFormDefinitionByKey400ResponseWithDefaults instantiates a new GetFormDefinitionByKey400Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDetailCode

`func (o *GetFormDefinitionByKey400Response) GetDetailCode() string`

GetDetailCode returns the DetailCode field if non-nil, zero value otherwise.

### GetDetailCodeOk

`func (o *GetFormDefinitionByKey400Response) GetDetailCodeOk() (*string, bool)`

GetDetailCodeOk returns a tuple with the DetailCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDetailCode

`func (o *GetFormDefinitionByKey400Response) SetDetailCode(v string)`

SetDetailCode sets DetailCode field to given value.

### HasDetailCode

`func (o *GetFormDefinitionByKey400Response) HasDetailCode() bool`

HasDetailCode returns a boolean if a field has been set.

### GetMessages

`func (o *GetFormDefinitionByKey400Response) GetMessages() []ErrorMessage`

GetMessages returns the Messages field if non-nil, zero value otherwise.

### GetMessagesOk

`func (o *GetFormDefinitionByKey400Response) GetMessagesOk() (*[]ErrorMessage, bool)`

GetMessagesOk returns a tuple with the Messages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessages

`func (o *GetFormDefinitionByKey400Response) SetMessages(v []ErrorMessage)`

SetMessages sets Messages field to given value.

### HasMessages

`func (o *GetFormDefinitionByKey400Response) HasMessages() bool`

HasMessages returns a boolean if a field has been set.

### GetStatusCode

`func (o *GetFormDefinitionByKey400Response) GetStatusCode() int64`

GetStatusCode returns the StatusCode field if non-nil, zero value otherwise.

### GetStatusCodeOk

`func (o *GetFormDefinitionByKey400Response) GetStatusCodeOk() (*int64, bool)`

GetStatusCodeOk returns a tuple with the StatusCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatusCode

`func (o *GetFormDefinitionByKey400Response) SetStatusCode(v int64)`

SetStatusCode sets StatusCode field to given value.

### HasStatusCode

`func (o *GetFormDefinitionByKey400Response) HasStatusCode() bool`

HasStatusCode returns a boolean if a field has been set.

### GetTrackingId

`func (o *GetFormDefinitionByKey400Response) GetTrackingId() string`

GetTrackingId returns the TrackingId field if non-nil, zero value otherwise.

### GetTrackingIdOk

`func (o *GetFormDefinitionByKey400Response) GetTrackingIdOk() (*string, bool)`

GetTrackingIdOk returns a tuple with the TrackingId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTrackingId

`func (o *GetFormDefinitionByKey400Response) SetTrackingId(v string)`

SetTrackingId sets TrackingId field to given value.

### HasTrackingId

`func (o *GetFormDefinitionByKey400Response) HasTrackingId() bool`

HasTrackingId returns a boolean if a field has been set.


