---
id: v1-statusresponse
title: Statusresponse
pagination_label: Statusresponse
sidebar_label: Statusresponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Statusresponse', 'V1Statusresponse'] 
slug: /tools/sdk/go/sources/models/statusresponse
tags: ['SDK', 'Software Development Kit', 'Statusresponse', 'V1Statusresponse']
---

# Statusresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | ID of the source | [optional] [readonly] 
**Name** | Pointer to **string** | Name of the source | [optional] [readonly] 
**Status** | Pointer to **string** | The status of the health check. | [optional] [readonly] 
**ElapsedMillis** | Pointer to **int32** | The number of milliseconds spent on the entire request. | [optional] [readonly] 
**Details** | Pointer to **map[string]interface{}** | The document contains the results of the health check. The schema of this document depends on the type of source used.  | [optional] [readonly] 

## Methods

### NewStatusresponse

`func NewStatusresponse() *Statusresponse`

NewStatusresponse instantiates a new Statusresponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewStatusresponseWithDefaults

`func NewStatusresponseWithDefaults() *Statusresponse`

NewStatusresponseWithDefaults instantiates a new Statusresponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Statusresponse) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Statusresponse) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Statusresponse) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Statusresponse) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *Statusresponse) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Statusresponse) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Statusresponse) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Statusresponse) HasName() bool`

HasName returns a boolean if a field has been set.

### GetStatus

`func (o *Statusresponse) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *Statusresponse) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *Statusresponse) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *Statusresponse) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetElapsedMillis

`func (o *Statusresponse) GetElapsedMillis() int32`

GetElapsedMillis returns the ElapsedMillis field if non-nil, zero value otherwise.

### GetElapsedMillisOk

`func (o *Statusresponse) GetElapsedMillisOk() (*int32, bool)`

GetElapsedMillisOk returns a tuple with the ElapsedMillis field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetElapsedMillis

`func (o *Statusresponse) SetElapsedMillis(v int32)`

SetElapsedMillis sets ElapsedMillis field to given value.

### HasElapsedMillis

`func (o *Statusresponse) HasElapsedMillis() bool`

HasElapsedMillis returns a boolean if a field has been set.

### GetDetails

`func (o *Statusresponse) GetDetails() map[string]interface{}`

GetDetails returns the Details field if non-nil, zero value otherwise.

### GetDetailsOk

`func (o *Statusresponse) GetDetailsOk() (*map[string]interface{}, bool)`

GetDetailsOk returns a tuple with the Details field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDetails

`func (o *Statusresponse) SetDetails(v map[string]interface{})`

SetDetails sets Details field to given value.

### HasDetails

`func (o *Statusresponse) HasDetails() bool`

HasDetails returns a boolean if a field has been set.


