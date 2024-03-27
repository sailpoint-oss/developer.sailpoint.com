---
id: status-response
title: StatusResponse
pagination_label: StatusResponse
sidebar_label: StatusResponse
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'StatusResponse'] 
slug: /tools/sdk/go/beta/models/status-response
tags: ['SDK', 'Software Development Kit', 'StatusResponse']
---

# StatusResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **string** | ID of the source | [optional] [readonly] 
**Name** |  Pointer to **string** | Name of the source | [optional] [readonly] 
**Status** |  Pointer to **string** | The status of the health check. | [optional] [readonly] 
**ElapsedMillis** |  Pointer to **int32** | The number of milliseconds spent on the entire request. | [optional] [readonly] 
**Details** |  Pointer to **map[string]interface{}** | The document contains the results of the health check. The schema of this document depends on the type of source used.  | [optional] [readonly] 

## Methods

### NewStatusResponse

`func NewStatusResponse() *StatusResponse`

NewStatusResponse instantiates a new StatusResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewStatusResponseWithDefaults

`func NewStatusResponseWithDefaults() *StatusResponse`

NewStatusResponseWithDefaults instantiates a new StatusResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *StatusResponse) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *StatusResponse) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *StatusResponse) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *StatusResponse) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *StatusResponse) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *StatusResponse) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *StatusResponse) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *StatusResponse) HasName() bool`

HasName returns a boolean if a field has been set.

### GetStatus

`func (o *StatusResponse) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *StatusResponse) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *StatusResponse) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *StatusResponse) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetElapsedMillis

`func (o *StatusResponse) GetElapsedMillis() int32`

GetElapsedMillis returns the ElapsedMillis field if non-nil, zero value otherwise.

### GetElapsedMillisOk

`func (o *StatusResponse) GetElapsedMillisOk() (*int32, bool)`

GetElapsedMillisOk returns a tuple with the ElapsedMillis field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetElapsedMillis

`func (o *StatusResponse) SetElapsedMillis(v int32)`

SetElapsedMillis sets ElapsedMillis field to given value.

### HasElapsedMillis

`func (o *StatusResponse) HasElapsedMillis() bool`

HasElapsedMillis returns a boolean if a field has been set.

### GetDetails

`func (o *StatusResponse) GetDetails() map[string]interface{}`

GetDetails returns the Details field if non-nil, zero value otherwise.

### GetDetailsOk

`func (o *StatusResponse) GetDetailsOk() (*map[string]interface{}, bool)`

GetDetailsOk returns a tuple with the Details field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDetails

`func (o *StatusResponse) SetDetails(v map[string]interface{})`

SetDetails sets Details field to given value.

### HasDetails

`func (o *StatusResponse) HasDetails() bool`

HasDetails returns a boolean if a field has been set.


[[Back to top]](#) 


